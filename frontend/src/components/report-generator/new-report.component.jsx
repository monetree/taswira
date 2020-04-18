import React from "react";
import { Link } from "react-router-dom";

class NewReport extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return (
            <div className="row">
                <div className="col-md-6 col-lg-4">
                <div className="iq-card iq-card-block iq-card-stretch iq-card-height overflow-hidden">
                    <Link to="/dashboard/create-report/">
                        <div className="iq-card-body pointer">
                        <div className="text-center mb-2">
                            <div className="rounded-circle iq-card-icon iq-bg-primary"><i className="las la-copy Reports"/></div></div>
                        <div className="clearfix" />
                        <div className="text-center">
                            <h3 className="mb-0">Create report</h3>
                        </div>
                        </div>
                    </Link>
                </div>
                </div>
            </div>
        )
    }
}


export default NewReport;