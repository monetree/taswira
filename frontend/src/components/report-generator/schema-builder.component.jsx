import React from "react";
import FormatUrl from "../../utils/UrlFormatter";

class SchemaBuilder extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            tables: [],
            fields: [],
            selected_fields: [],
            database_name: null,
            table_name: null,
            error: false
        }
    }

    getTables = (ev, databases) => {
        const database = ev.target.value;
        for(let i of databases){
            if(i.database_name === database){
                this.setState({
                    tables: i.tables,
                    database_name: i.database_name
                })
                return
            }
        }
    }

    getFields = (ev, tables) => {
        const table = ev.target.value;
        for(let i of tables){
            if(i.table_name === table){
                this.setState({
                    fields: i.fields,
                    table_name: i.table_name
                })
                return
            }
        }
    }

    chooseFields = (ev) => {
        let values = Array.from(ev.target.selectedOptions, option => option.value);
        this.setState({
            selected_fields: values
        })
    }

    getResult = () => {
        const { connection_id } = this.props;
        const { selected_fields, database_name, table_name } = this.state;
        const query = `select ${selected_fields.toString()} from ${database_name}.${table_name}`;
        this.makeQuery(connection_id, query)
    }


    makeQuery = (connection_id, query) => {
        const url = FormatUrl(`/api/datasource/query-builder/?id=${connection_id}&query=${query}`)
        fetch(url)
        .then(res => res.json())
        .then(res => {
            if(res && res.length){
                this.props.handleData(res)
            }
        }).catch(err => {
            this.setState({
                error: true,
                data: []
            })
        })
    }


    render(){
        const { databases } = this.props;
        const { tables, fields } = this.state;
        return (
            <div className="row">
                <div class="col-sm-6 col-lg-6">
                    <div class="form-group">
                        <select onChange={(e) => this.getTables(e, databases)} class="form-control form-control-sm mb-3">
                        <option selected="">Select database</option>
                            {
                                databases.map(( database, index ) => (
                                    <option key={index} value={database.database_name}>{database.database_name}</option>
                                ))
                            }
                            
                            
                        </select>
                    </div>
                </div>
                <div class="col-sm-6 col-lg-6">
                    <div class="form-group">
                        <select class="form-control form-control-sm mb-3" onChange={(e) => this.getFields(e, tables)}>
                            <option selected="">Select table</option>
                            {
                                tables.map(( table, index ) => (
                                    <option key={index} value={table.table_name}>{table.table_name}</option>
                                ))
                            }
                        </select>
                    </div>
                </div>
                <div class="col-sm-12 col-lg-12">
                    <div class="form-group">
                        <label for="exampleFormControlSelect2">Select fields</label>
                        <select multiple class="form-control" onChange={this.chooseFields} id="exampleFormControlSelect2">
                            {
                                fields.map(( field, index ) => (
                                    <option key={index} value={field}>{field}</option>
                                ))
                            }
                        </select>
                    </div>
    
                    <button onClick={this.getResult} type="button" class="btn btn-primary mb-3 fr">Get data</button>
                </div>
            </div>
        )
    }

}

export default SchemaBuilder;