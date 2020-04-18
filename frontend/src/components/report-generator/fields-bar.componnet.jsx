import React from 'react';

const FieldsBar = (props) => {
    const { data } = props;
    return (
        <div className="iq-sidebar" style={{ right:'0', top:'76px', width:'250px' }}>
            <div id="sidebar-autobar" data-autobar="true" tabIndex={-1} style={{overflow: 'hidden', outline: 'none', marginTop:'0px'}}><div className="auto-content" style={{transform: 'translate3d(0px, 0px, 0px)'}}>
                <nav className="iq-sidebar-menu">
                <div class="iq-card iq-card-block iq-card-stretch iq-card-height" style={{ borderRadius:'0px' }}>
                <div class="iq-card-header d-flex justify-content-between">
                    <div class="iq-header-title">
                        <h4 class="card-title">Music - fields</h4>
                    </div>
                    </div>
                        <div class="iq-card-body" style={{ height:'450px', overflowY:'auto' }}>
                            {
                                data && data.length ?
                                (
                                    <ul className="tasks-lists m-0 p-0">
                                        {
                                            Object.keys(data[0]).map(( field, index ) => (
                                                <li key={index} className="d-flex justify-content-between mb-3 align-items-center">
                                                    <div className="custom-control custom-checkbox">
                                                        <input type="checkbox" className="custom-control-input" id="task-1" />
                                                            <label className="custom-control-label" htmlFor="task-1">{field}</label>
                                                    </div>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                ): (
                                    <div>
                                    </div>
                                )
                            }

                        </div>
                    </div>
                </nav>
                <div className="p-3" />
            </div>
            </div>
        </div>

    )
}


export default FieldsBar;