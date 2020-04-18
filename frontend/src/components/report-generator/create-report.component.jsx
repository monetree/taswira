import React from "react";
import FormatUrl from "../../utils/UrlFormatter";
import SchemaModal from "./schema-modal.component";
import DatabaseSchema from "./database-schema.component";
import QueryBuilder from "./query-builder.component";
import SchemaBuilder from "./schema-builder.component";
import Connections from "./connections.component";
import FieldsBar from "./fields-bar.componnet";
import ChartTypes from "./chart-types.componnet";

class ReportGenerator extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            connections:[],
            databases: [],
            datasource: null,
            datasourcemodal:false,
            datasourcebar: false,
            datasourcetype: null,
            rightsidebar: false,
            dataselected: true,
            expandedb: null,
            viewschema: false,
            activeschematable: null,
            connection_id: null,
            schema: [],
            data: []
        }
    }

    expandTables = (database) => {
        const { expandedb } = this.state;
        this.setState({
            expandedb: database === expandedb ? null : database
        })
    }

    getTableSchema = (table_name, database_name) => {
        let body = document.body;
        const { connection_id } = this.state;
        const url = FormatUrl(`/api/datasource/table-schema/?id=${connection_id}&table_name=${table_name}&database_name=${database_name}`);
        fetch(url)
        .then(res => res.json())
        .then(res => {
            body.classList.add("modal-open");
            this.setState({
                viewschema: true,
                activeschematable:table_name,
                schema: res
            })
        }).catch(err => {
            console.log(err)
        })
    }

    getDatabaseDetails = (id, datasourcetype) => {
        const company_id = localStorage.getItem("company_id")
        const url = FormatUrl(`/api/datasource/database/?company_id=${company_id}&id=${id}`);
        fetch(url)
        .then(res => res.json())
        .then(res => {
            this.setState({
                databases: res.data,
                datasourcetype: datasourcetype,
                connection_id: id
            })
        }).catch(err => {
            console.log(err)
        })
    }

    componentDidMount(){
        document.getElementById("line-menu").click()
        const company_id = localStorage.getItem("company_id")
        let url = FormatUrl(`/api/datasource/database/?company_id=${company_id}`);
        fetch(url)
        .then(res => res.json())
        .then(res => {
          this.setState({
            connections: res
          })
        }).catch(err => {
          console.log(err)
        })
    }

    handleDatasource = (ev) => {
        this.setState({
            datasource:ev.target.value
        })
    }

    closeViewSchema = () => {
        this.setState({
        viewschema:false
        })
    }

    handleData = (data) => {
        this.setState({ 
            dataselected: true, 
            datasourcemodal: false,
            data: data 
        })
    }

    render(){
        const { 
            databases, 
            datasource, 
            datasourcemodal, 
            datasourcebar, 
            datasourcetype, 
            rightsidebar, 
            dataselected, 
            connections, 
            expandedb,
            viewschema,
            activeschematable,
            schema,
            connection_id,
            data
        } = this.state;
        return (
            <div className="row">

            {
                rightsidebar ?
                (
                 <FieldsBar data={data} />
                ):(
                    <div>
                    </div>
                )
            }


                {
                    datasourcebar ? 
                    (
                        <div class="col-sm-12 col-lg-12">
                            {
                                dataselected ?
                                (
                                    <ChartTypes />
                                ):(
                                    <div class="iq-card" style={{ marginBottom:'0px', borderBottomLeftRadius:'0px', borderBottomRightRadius:'0px' }}>
                                        <div class="iq-card-body" style={{ paddingBottom:'0px' }}>
                                        <ul class="nav nav-tabs" id="myTab-1" role="tablist">
                                            <li class="nav-item">
                                                <a onClick={() => this.setState({ datasourcemodal: !datasourcemodal })} class="nav-link active" id="home-tab" data-toggle="tab" role="tab" aria-controls="home" aria-selected="true">Get data <i class="las la-angle-double-down"></i></a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link" id="profile-tab" data-toggle="tab" role="tab" aria-controls="profile" aria-selected="false">Publish <i class="las la-globe-americas"></i></a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link" id="contact-tab" data-toggle="tab" role="tab" aria-controls="contact" aria-selected="false">Save report <i class="las la-hdd"></i></a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link" id="contact-tab" data-toggle="tab" role="tab" aria-controls="contact" aria-selected="false">Reset <i class="las la-ban"></i></a>
                                            </li>
        
                                            <li class="nav-item">
                                                <a onClick={() => this.setState({ datasourcebar: false })} class="nav-link" id="contact-tab" data-toggle="tab" role="tab" aria-controls="contact" aria-selected="false">Close <i class="las la-times-circle"></i></a>
                                            </li>
        
                                        </ul>
                                        </div>
                                    </div>
                                )
                            }
 
                            {
                                datasourcemodal ?
                                (
                                    <div className="row">
                                        <div class="col-sm-6 col-lg-6">
                                            <div class="iq-card" style={{ borderRadius:'1px', marginTop:'-16px', height:'350px', overflowY:'auto' }}>
                                                <div class="iq-card-body">
                                                    <div class="form-group">
                                                        <select class="form-control" onChange={this.handleDatasource} id="exampleFormControlSelect1">
                                                            <option selected="" disabled="">Select datasources</option>
                                                            <option value="1">DATABASE</option>
                                                            <option value="2">EXCEL</option>
                                                            <option value="3">CSV</option>
                                                            <option value="4">JSON</option>
                                                        </select>
                                                    </div>
                        
                                                    {
                                                        datasource ?
                                                        (
                                                            <Connections 
                                                                datasource={datasource} 
                                                                connections={connections} 
                                                                getDatabaseDetails={this.getDatabaseDetails}
                                                            />
                                                        ) : (
                                                            <div>
                                                            </div>
                                                        )
                                                    }
                                    
                                                </div>
                                            </div>
                                        </div>
                                        {
                                            datasourcetype ?
                                            (
                                                <div class="col-sm-6 col-lg-6">
                                                    <div class="iq-card" style={{ borderRadius:'1px', marginTop:'-16px', height:'350px', padding:'10px', overflowY:'auto', overflowX:'hidden' }}>
                                                        {
                                                            datasourcetype === 1 ?
                                                            (
                                                                <QueryBuilder 
                                                                    connection_id={connection_id} 
                                                                />
                                                            ) : datasourcetype === 2 ? (
                                                                <SchemaBuilder 
                                                                    databases={databases} 
                                                                    connection_id={connection_id}  
                                                                    handleData={this.handleData}
                                                                />
                                                            ) : (
                                                                <DatabaseSchema 
                                                                    databases={databases} 
                                                                    expandedb={expandedb} 
                                                                    expandTables={this.expandTables}
                                                                    getTableSchema={this.getTableSchema}
                                                                />
                                                            )
                                                        }
                                                    </div>
                                                </div>
                                            ):(
                                                <div>
                                                </div>
                                            )
                                        }
                                    </div>
                                ) : (
                                    <div>
                                    </div>
                                )
                            }
                        </div>    
                    ):(
                        <div className="col-sm-12 col-lg-12">
                            <i onClick={() => this.setState({ datasourcebar: true })} class="las la-cog datasorce-setting-icon fr"></i>
                        </div>
                    )
                }
                {
                    dataselected ?
                    <i style={{ position:'fixed', bottom:'30px', right:'30px', zIndex:'100000' }} onClick={() => this.setState({ rightsidebar: !rightsidebar })} class="las la-sliders-h datasorce-setting-icon"></i> :
                    ""

                }


                {
                    viewschema ?
                    (
                        <SchemaModal 
                            closeViewSchema={this.closeViewSchema} 
                            viewschema={viewschema} 
                            schema={schema} 
                            activeschematable={activeschematable} 
                        />
                    ):(
                        <div>
                        </div>
                    )

                }



            </div>
        )
    }
}


export default ReportGenerator;












