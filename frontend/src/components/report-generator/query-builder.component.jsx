import React from "react";
import FormatUrl from "../../utils/UrlFormatter";

class QueryBuilder extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            error: false,
            query: null,
            data: []
        }
    }

    makeQuery = () => {
        const { connection_id } = this.props;
        const { query } = this.state;
        const url = FormatUrl(`/api/datasource/query-builder/?id=${connection_id}&query=${query}`)
        fetch(url)
        .then(res => res.json())
        .then(res => {
            document.getElementById("query-builder").blur();
            if(res && res.length){
                this.setState({
                    data: res
                })
            }
        }).catch(err => {
            this.setState({
                error: true,
                data: []
            })
        })
    }

    _handleKeyDown = (event) => {
        if(event.keyCode === 13){
          this.makeQuery()
    }
  }


    componentWillUnmount() {
        document.removeEventListener("keydown", this._handleKeyDown);
      }


    componentDidMount(){
        document.addEventListener("keydown", this._handleKeyDown);
    }


    style = {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: 'none',
        margin:'auto'
      };

    render(){
        const { data, error } = this.state;
        return (
            <div>
                <div class="form-group">
                    <label className="text-secondary text-center">Fire your sql query here..</label>
                    <button className="btn btn-primary mb-3 fr">Create report</button>
                    <textarea onChange={(e) => this.setState({ query: e.target.value })} class="form-control" id="query-builder" rows="2"></textarea>
                </div>
                <div className={error ? "query-result-section dashed-border-danger" : "query-result-section dashed-border-info" }>
                    {
                        data && data.length ? 
                        (
                            <table class="table table-dark">
                                <thead>
                                    <tr>
                                        {
                                            Object.keys(data[0]).map((column, index) => (
                                                <th key={index}>{column}</th>
                                            ))
                                        }
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        data.map((name, index) => (
                                            <tr key={index}>
                                                {
                                                    Object.keys(data[0]).map((row, innerindex) =>(
                                                        <td key={innerindex}>{name[row]}</td>
                                                    ))
                                                }
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        ): error ? (
                            <div style={this.style}>
                                <h3 className="text-primary mt20">Failed to make query</h3>
                            </div>
                        ) : (
                            <div style={this.style}>
                                <h3 className="text-dark mt20">Result goes here</h3>
                            </div>
                        )
                    }
                </div>
            </div>
        )
    }
}

export default QueryBuilder;