import React from "react";

const DatabaseSchema  = (props) => {
    const { databases, expandedb, expandTables, getTableSchema } = props;
    return (
        <div class="iq-card" style={{ borderRadius:'1px', marginTop:'-16px', height:'350px', padding:'10px', overflowY:'auto', overflowX:'hidden' }}>                                              
            <div class="iq-card-body">
                <ul class="iq-timeline">
                    {
                        databases.map((database, index) => (
                            <li key={index}>
                                <div class="timeline-dots border-primary"></div>
                                <h6 class="float-left mb-1">Database name: {database.database_name}  <i onClick={() => expandTables(database.database_name)} class={database.database_name === expandedb ? "las la-minus-circle text-danger f20 pointer" : "las la-plus-circle text-danger f20 pointer" }></i>
                            
                                </h6>
                                <br/>
                                {
                                    database.database_name === expandedb ? 
                                    (
                                        <ul class="iq-timeline">
                                            {
                                                database.tables.map(( table, innerindex ) => (
                                                    <li key={innerindex}>
                                                        <div class="timeline-dots border-danger"></div>
                                                        <h6 class="">Table name: {table.table_name}
                                                        <i class="las la-arrow-right arrow"></i> &nbsp;
                                                        <span class="badge badge-primary pointer" onClick={() => getTableSchema(table.table_name, database.database_name)}> view schema</span> 
                                                        </h6>
                                                    </li>
                                                ))
                                            }
                                        </ul>    
                                    ):(
                                        <div>
                                        </div>
                                    )
                                }

                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default DatabaseSchema;