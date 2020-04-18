import React from 'react';

const ChartTypes = () => {
    return (
        <div class="iq-card" style={{ marginBottom:'0px', borderBottomLeftRadius:'0px', borderBottomRightRadius:'0px' }}>
            <div class="iq-card-body" style={{ paddingBottom:'0px' }}>
            <ul class="nav nav-tabs" id="myTab-1" role="tablist">
                <li class="nav-item chart-icons">
                    <a class="nav-link active" id="home-tab" data-toggle="tab" role="tab" aria-controls="home" aria-selected="true"> 
                        <img src="/static/img/charts/area.png" class="img-fluid rounded" alt="user" />
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link active" id="home-tab" data-toggle="tab" role="tab" aria-controls="home" aria-selected="true"> 
                        <img src="/static/img/charts/bubble.png" class="img-fluid rounded" alt="user" />
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link active" id="home-tab" data-toggle="tab" role="tab" aria-controls="home" aria-selected="true"> 
                        <img src="/static/img/charts/column.png" class="img-fluid rounded" alt="user" />
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link active" id="home-tab" data-toggle="tab" role="tab" aria-controls="home" aria-selected="true"> 
                        <img src="/static/img/charts/Column-bars.png" class="img-fluid rounded" alt="user" />
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link active" id="home-tab" data-toggle="tab" role="tab" aria-controls="home" aria-selected="true"> 
                        <img src="/static/img/charts/donut.png" class="img-fluid rounded" alt="user" />
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link active" id="home-tab" data-toggle="tab" role="tab" aria-controls="home" aria-selected="true"> 
                        <img src="/static/img/charts/filter.png" class="img-fluid rounded" alt="user" />
                    </a>
                </li>
            </ul>
            </div>
        </div>
    )
}

export default ChartTypes;