import React from "react";

const Connections  = (props) => {
    const { datasource, connections, getDatabaseDetails } = props;
    return (
        <div>
            {
                datasource === "1" ?
                (
                    <div id="table" class="table-editable">
                        <table class="table table-bordered table-responsive-md table-striped text-center">
                            <thead>
                            <tr>
                                <th>Connection Name</th>
                                <th>Database Type</th>
                                <th>Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                connections.map((connection, index) => (
                                <tr key={index}>
                                    <td>{connection.database}</td>
                                    <td>{connection.db_type}</td>
                                    <td>
                                        <span class="table-remove"><button type="button"
                                            class="btn iq-bg-danger btn-rounded btn-sm my-0 mr10" onClick={() => getDatabaseDetails(connection.id, 1)}>Query builder</button>
                                        </span>
                                        <span class="table-remove"><button type="button"
                                            class="btn iq-bg-danger btn-rounded btn-sm my-0" onClick={() => getDatabaseDetails(connection.id, 2)}>Select schema</button>
                                        </span>
                                        <span class="table-remove"><button type="button"
                                            class="btn iq-bg-danger btn-rounded btn-sm my-0" onClick={() => getDatabaseDetails(connection.id, 3)}>View schema</button>
                                        </span>
                                    </td>
                                </tr>
                                ))
                            }
                            </tbody>
                        </table>
                    </div>   
                ) : (
                    <div class="uploadbox">
                        <label for="file-upload" class="custom-file-upload">
                            <i class="las la-cloud-upload-alt"></i> <span>{datasource === "2" ? "Upload EXCEL" : datasource === "3" ? "Upload CSV" : "Upload JSON"} </span>
                        </label>
                        <input id="file-upload" type="file" style={{ display: "none" }} />
                    </div>
                )
            }
        </div>
    )
}

export default Connections;