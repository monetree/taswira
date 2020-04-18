import React from "react";

const SchemaModal = (props) => {
    const { activeschematable, viewschema, schema, closeViewSchema } = props;
    return (
        <div>
            {
            viewschema ?
            (
            <div className="modal fade show" id="exampleModalLong" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLongTitle" style={{display: 'block', paddingRight: '8px'}} aria-modal="true">
            <div className="modal-dialog" role="document" style={{ maxWidth:'800px' }}>
            <div className="modal-content">
        

                <div className="modal-body">
                <span aria-hidden="true" className="arrow fr f20 pointer" onClick={() => closeViewSchema()}>×</span>
                <div class="iq-card-body" style={{ overflowX:'auto' }}>
                <p className="text-center"><code class="highlighter-rouge">{activeschematable}</code> schema</p>
                <table class="table table-dark">
                    <thead>
                        <tr>
                                {
                                    Object.keys(schema[0]).map((field, index) => (
                                        <th key={index}>{field}</th>
                                    ))
                                }
                        </tr>
                    </thead>
                    {
                        schema && schema.length ? 
                        (
                            <tbody>
                                {
                                    schema.map((name, index) => (
                                        <tr key={index}>
                                            {
                                                Object.keys(schema[0]).map((field, innerindex) =>(
                                                    <td key={innerindex}>{name[field]}</td>
                                                ))
                                            }
                                        </tr>
                                    ))
                                }
                            </tbody>
                        ):(
                            <tbody>
                                <tr>
                                    <th scope="row" colSpan="4">Table is empty !</th>
                                </tr>
                            </tbody>
                        )
                    }
                </table>
                </div>
            
                </div>
            </div>
            </div>
        </div>
    ):(
        <div>
        </div>
    )}
    </div>
    )
}


export default SchemaModal;