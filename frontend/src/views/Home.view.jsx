import React from "react";
import { Switch, Route } from 'react-router-dom';
import Header from "../components/header/header.component";
import Sidebar from "../components/sidebar/sidebar.component";
import Databases from "../components/database/databases.component";
import NewReport from "../components/report-generator/new-report.component";
import CreateReport from "../components/report-generator/create-report.component";


class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expensesMenu: false
    }
  }

  toggleExpensesMenu = () => {
    this.setState({
      expensesMenu: !this.state.expensesMenu
    });
  }

  componentDidMount(){
    const auth_token = localStorage.getItem("auth_token")
    if(!auth_token){
      window.location = "/"
      return
    }
  }

  render() {
    const toggleMenuShow = (this.state.expensesMenu) ? "show" : "";

    return (
      <div>
        <div className="wrapper">
          <Sidebar />
          <Header />
          <div id="content-page" className="content-page">
            <div className="container-fluid">
  
                <Switch>
                  <Route exact path='/dashboard' component={NewReport} />
                  <Route exact path='/dashboard/databases/' component={Databases} />
                  <Route exact path='/dashboard/create-report/' component={CreateReport} />
                </Switch>


              {/* <div className="row">
                <div className="col-md-6 col-lg-3">
                  <div className="iq-card iq-card-block iq-card-stretch iq-card-height overflow-hidden">
                    <div className="iq-card-body">
                      <div className="text-center mb-2">
                        <div className="rounded-circle iq-card-icon iq-bg-primary"><i className="ri-user-line" /></div></div>
                      <div className="clearfix" />
                      <div className="text-center">
                        <h2 className="mb-0"><span className="counter">74.5</span><span>K</span></h2>
                        <h6 className="mb-2">Users</h6>
                        <p className="mb-0 text-secondary line-height"><i className="ri-arrow-up-line text-success mr-1" /><span className="text-success">10%</span> Increased</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-3">
                  <div className="iq-card iq-card-block iq-card-stretch iq-card-height overflow-hidden">
                    <div className="iq-card-body">
                      <div className="text-center mb-2">
                        <div className="rounded-circle iq-card-icon iq-bg-danger"><i className="ri-search-2-line" /></div></div>
                      <div className="clearfix" />
                      <div className="text-center">
                        <h2 className="mb-0"><span className="counter">95.5</span><span>K</span></h2>
                        <h6 className="mb-2">Sessions</h6>
                        <p className="mb-0 text-secondary line-height"><i className="ri-arrow-up-line text-success mr-1" /><span className="text-success">22%</span> Increased</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-3">
                  <div className="iq-card iq-card-block iq-card-stretch iq-card-height overflow-hidden">
                    <div className="iq-card-body">
                      <div className="text-center mb-2">
                        <div className="rounded-circle iq-card-icon iq-bg-success"><i className="ri-drizzle-line" /></div></div>
                      <div className="clearfix" />
                      <div className="text-center">
                        <h2 className="mb-0"><span className="counter">5.2</span><span>K</span></h2>
                        <h6 className="mb-2">Bounce Rate</h6>
                        <p className="mb-0 text-secondary line-height"><i className="ri-arrow-up-line text-success mr-1" /><span className="text-success">8%</span> Increased</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-3">
                  <div className="iq-card iq-card-block iq-card-stretch iq-card-height overflow-hidden">
                    <div className="iq-card-body p-0" style={{ background: 'url(images/page-img/01.png) no-repeat scroll center center', backgroundSize: 'contain', minHeight: '202px' }}>
                    </div>
                  </div>
                </div>


                <div className="col-lg-6">
                  <div className="iq-card iq-card-block iq-card-stretch iq-card-height overflow-hidden">
                    <div className="iq-card-header d-flex justify-content-between">
                      <div className="iq-header-title">
                        <h4 className="card-title">Expenses </h4>
                      </div>
                      <div className="iq-card-header-toolbar d-flex align-items-center">

                        <div className="dropdown">
                          <span onClick={this.toggleExpensesMenu} className="dropdown-toggle" data-toggle="dropdown" aria-expanded="false" role="button">
                            <i className="ri-more-2-fill" ></i>
                          </span>
                          <div className={"dropdown-menu dropdown-menu-right " + toggleMenuShow} aria-labelledby="dropdownMenuButton01">
                            <a className="dropdown-item" href="#"><i className="ri-eye-fill mr-2"></i>View</a>
                            <a className="dropdown-item" href="#"><i className="ri-delete-bin-6-fill mr-2"></i>Delete</a>
                            <a className="dropdown-item" href="#"><i className="ri-pencil-fill mr-2"></i>Edit</a>
                            <a className="dropdown-item" href="#"><i className="ri-printer-fill mr-2"></i>Print</a>
                            <a className="dropdown-item" href="#"><i className="ri-file-download-fill mr-2"></i>Download</a>
                          </div>
                        </div>


                      </div>
                    </div>
                    <div className="iq-card-body pl-0">
                      <div id="home-chart-1" style={{ height: "380px" }}></div>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 col-lg-3">
                  <div className="iq-card iq-card-block iq-card-stretch iq-card-height">
                    <div className="iq-card-header d-flex justify-content-between">
                      <div className="iq-header-title">
                        <h4 className="card-title">Device</h4>
                      </div>
                      <div className="iq-card-header-toolbar d-flex align-items-center">
                        <div className="dropdown">
                          <span className="dropdown-toggle" id="dropdownMenuButton02" data-toggle="dropdown" aria-expanded="false" role="button">
                            <i className="ri-more-2-fill" onClick={() => this.setState({ card_id: 2 })} />
                          </span>
                          <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton02" style={{}}>
                            <a className="dropdown-item" href="https://iqonic.design/themes/metorik/html/index.html#"><i className="ri-eye-fill mr-2" />View</a>
                            <a className="dropdown-item" href="https://iqonic.design/themes/metorik/html/index.html#"><i className="ri-delete-bin-6-fill mr-2" />Delete</a>
                            <a className="dropdown-item" href="https://iqonic.design/themes/metorik/html/index.html#"><i className="ri-pencil-fill mr-2" />Edit</a>
                            <a className="dropdown-item" href="https://iqonic.design/themes/metorik/html/index.html#"><i className="ri-printer-fill mr-2" />Print</a>
                            <a className="dropdown-item" href="https://iqonic.design/themes/metorik/html/index.html#"><i className="ri-file-download-fill mr-2" />Download</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-3">
                  <div className="iq-card iq-card-block iq-card-stretch iq-card-height" style={{ position: 'relative' }}>
                    <div className="iq-card-header d-flex justify-content-between">
                      <div className="iq-header-title">
                        <h4 className="card-title">Server History</h4>
                      </div>
                      <div className="iq-card-header-toolbar d-flex align-items-center">
                        <div className="dropdown">
                          <span className="dropdown-toggle text-primary" id="dropdownMenuButton03" data-toggle="dropdown">
                            <i className="ri-more-2-fill" onClick={() => this.setState({ card_id: 3 })} />
                          </span>
                          <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton03">
                            <a className="dropdown-item" href="https://iqonic.design/themes/metorik/html/index.html#"><i className="ri-eye-fill mr-2" />View</a>
                            <a className="dropdown-item" href="https://iqonic.design/themes/metorik/html/index.html#"><i className="ri-delete-bin-6-fill mr-2" />Delete</a>
                            <a className="dropdown-item" href="https://iqonic.design/themes/metorik/html/index.html#"><i className="ri-pencil-fill mr-2" />Edit</a>
                            <a className="dropdown-item" href="https://iqonic.design/themes/metorik/html/index.html#"><i className="ri-printer-fill mr-2" />Print</a>
                            <a className="dropdown-item" href="https://iqonic.design/themes/metorik/html/index.html#"><i className="ri-file-download-fill mr-2" />Download</a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="resize-triggers"><div className="expand-trigger"><div style={{ width: '238px', height: '481px' }} /></div><div className="contract-trigger" /></div></div>
                </div>

              </div>
              <div className="row">
                <div className="col-lg-4">
                  <div className="iq-card iq-card-block iq-card-stretch iq-card-height">
                    <div className="iq-card-header d-flex justify-content-between">
                      <div className="iq-header-title">
                        <h4 className="card-title">Maintenance Tasks</h4>
                      </div>
                    </div>
                    <div className="iq-card-body">
                      <ul className="tasks-lists m-0 p-0">
                        <li className="d-flex justify-content-between mb-3 align-items-center">
                          <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="task-1" />
                            <label className="custom-control-label" htmlFor="task-1">Prepare for presentation</label>
                          </div>
                          <div className="font-size-18">
                            <i className="ri-close-circle-line" />
                          </div>
                        </li>
                        <li className="d-flex justify-content-between mb-3 align-items-center">
                          <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="task-2" defaultChecked />
                            <label className="custom-control-label" htmlFor="task-2"><del>Create invoice </del> </label>
                          </div>
                          <div className="font-size-18">
                            <i className="ri-close-circle-line" />
                          </div>
                        </li>
                        <li className="d-flex justify-content-between mb-3 align-items-center">
                          <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="task-3" />
                            <label className="custom-control-label" htmlFor="task-3">Print Documents </label>
                          </div>
                          <div className="font-size-18">
                            <i className="ri-close-circle-line" />
                          </div>
                        </li>
                        <li className="d-flex justify-content-between mb-3 align-items-center">
                          <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="task-4" />
                            <label className="custom-control-label" htmlFor="task-4">Team Meeting on Satuarday</label>
                          </div>
                          <div className="font-size-18">
                            <i className="ri-close-circle-line" />
                          </div>
                        </li>
                        <li className="d-flex justify-content-between mb-3 align-items-center">
                          <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="task-5" defaultChecked />
                            <label className="custom-control-label" htmlFor="task-5"><del> Lunch our New Product </del> </label>
                          </div>
                          <div className="font-size-18">
                            <i className="ri-close-circle-line" />
                          </div>
                        </li>
                        <li className="d-flex justify-content-between mb-2 align-items-center">
                          <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="task-6" />
                            <label className="custom-control-label" htmlFor="task-6">Sent Email for Meeting </label>
                          </div>
                          <div className="font-size-18">
                            <i className="ri-close-circle-line" />
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="iq-card iq-card-block iq-card-stretch iq-card-height">
                    <div className="iq-card-header d-flex justify-content-between">
                      <div className="iq-header-title">
                        <h4 className="card-title">Schedules</h4>
                      </div>
                    </div>
                    <div className="iq-card-body">
                      <ul className="schedule-lists m-0 p-0">
                        <li className="d-flex justify-content-between mb-4 align-items-center">
                          <div className="media-support-info">
                            <h6 className="mb-2">Skype call with Ruby</h6>
                            <p className="mb-0"><span className="badge badge-primary">11:45 am</span> USA</p>
                          </div>
                          <div className="team-group">
                            <div className="iq-media-group">
                              <a href="https://iqonic.design/themes/metorik/html/index.html#" className="iq-media">
                                <img className="img-fluid avatar-40 rounded-circle" src="/static/img/05.jpg" alt="" />
                              </a>
                              <a href="https://iqonic.design/themes/metorik/html/index.html#" className="iq-media">
                                <img className="img-fluid avatar-40 rounded-circle" src="/static/img/06.jpg" alt="" />
                              </a>
                            </div>
                          </div>
                        </li>
                        <li className="d-flex justify-content-between mb-4 align-items-center">
                          <div className="media-support-info">
                            <h6 className="mb-2">Meeting with Team</h6>
                            <p className="mb-0"><span className="badge badge-info">10:30 am</span> Caneda</p>
                          </div>
                          <div className="team-group">
                            <div className="iq-media-group">
                              <a href="https://iqonic.design/themes/metorik/html/index.html#" className="iq-media">
                                <img className="img-fluid avatar-40 rounded-circle" src="/static/img/05.jpg" alt="" />
                              </a>
                              <a href="https://iqonic.design/themes/metorik/html/index.html#" className="iq-media">
                                <img className="img-fluid avatar-40 rounded-circle" src="/static/img/06.jpg" alt="" />
                              </a>
                              <a href="https://iqonic.design/themes/metorik/html/index.html#" className="iq-media">
                                <img className="img-fluid avatar-40 rounded-circle" src="/static/img/07.jpg" alt="" />
                              </a>
                              <a href="https://iqonic.design/themes/metorik/html/index.html#" className="iq-media">
                                <img className="img-fluid avatar-40 rounded-circle" src="/static/img/08.jpg" alt="" />
                              </a>
                            </div>
                          </div>
                        </li>
                        <li className="d-flex justify-content-between mb-4 align-items-center">
                          <div className="media-support-info">
                            <h6 className="mb-2">Data Analysing with Client</h6>
                            <p className="mb-0"><span className="badge badge-warning text-white">02:00 pm</span> Africa</p>
                          </div>
                          <div className="team-group">
                            <div className="iq-media-group">
                              <a href="https://iqonic.design/themes/metorik/html/index.html#" className="iq-media">
                                <img className="img-fluid avatar-40 rounded-circle" src="/static/img/05.jpg" alt="" />
                              </a>
                              <a href="https://iqonic.design/themes/metorik/html/index.html#" className="iq-media">
                                <img className="img-fluid avatar-40 rounded-circle" src="/static/img/06.jpg" alt="" />
                              </a>
                            </div>
                          </div>
                        </li>
                        <li className="d-flex justify-content-between mb-4 align-items-center">
                          <div className="media-support-info">
                            <h6 className="mb-2">conference with Team</h6>
                            <p className="mb-0"><span className="badge badge-success">03:30 am</span> Australia</p>
                          </div>
                          <div className="team-group">
                            <div className="iq-media-group">
                              <a href="https://iqonic.design/themes/metorik/html/index.html#" className="iq-media">
                                <img className="img-fluid avatar-40 rounded-circle" src="/static/img/05.jpg" alt="" />
                              </a>
                              <a href="https://iqonic.design/themes/metorik/html/index.html#" className="iq-media">
                                <img className="img-fluid avatar-40 rounded-circle" src="/static/img/06.jpg" alt="" />
                              </a>
                              <a href="https://iqonic.design/themes/metorik/html/index.html#" className="iq-media">
                                <img className="img-fluid avatar-40 rounded-circle" src="/static/img/07.jpg" alt="" />
                              </a>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="iq-card iq-card-block iq-card-stretch iq-card-height-half" style={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
                    <div className="iq-card-body bg-primary rounded">
                      <div className="d-flex align-items-center">
                        <div className="col-md-8">
                          <p className="text-white">Amount Due</p>
                          <h2 className="text-white"> $5450.90 </h2>
                          <h6 className="text-white"> Milestone Completed </h6>
                          <div className="text-white"> Payment for next week </div>
                        </div>
                        <div className="col-md-4 chart-icon text-center">
                          <i className="ri-bar-chart-grouped-line font-size-40 text-white" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="iq-card iq-card-block iq-card-stretch iq-card-height-half">
                    <div className="iq-card-body">
                      <div className="d-flex align-items-center justify-content-between mb-3">
                        <div className="revenue-desc">
                          <h6>Member Profit</h6>
                          <p className="font-weight-light mb-0"> Average Weekly Profit </p>
                        </div>
                        <div className="revenue-amount">
                          <p className="text-primary mb-0"> +168.900 </p>
                        </div>
                      </div>
                      <hr />
                      <div className="d-flex align-items-center justify-content-between mb-3">
                        <div className="revenue-desc">
                          <h6>Total Profit</h6>
                          <p className="font-weight-light mb-0"> Weekly Customer Orders </p>
                        </div>
                        <div className="revenue-amount">
                          <p className="text-primary mb-0"> +168.900 </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-4">
                  <div className="iq-card iq-card-block iq-card-stretch iq-card-height">
                    <div className="iq-card-header d-flex justify-content-between">
                      <div className="iq-header-title">
                        <h4 className="card-title">Activity</h4>
                      </div>
                      <div className="iq-card-header-toolbar d-flex align-items-center">
                        <div className="dropdown">
                          <span className="dropdown-toggle text-primary" id="dropdownMenuButton04" data-toggle="dropdown">
                            View All
                              </span>
                          <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton04">
                            <a className="dropdown-item" href="https://iqonic.design/themes/metorik/html/index.html#"><i className="ri-eye-fill mr-2" />View</a>
                            <a className="dropdown-item" href="https://iqonic.design/themes/metorik/html/index.html#"><i className="ri-delete-bin-6-fill mr-2" />Delete</a>
                            <a className="dropdown-item" href="https://iqonic.design/themes/metorik/html/index.html#"><i className="ri-pencil-fill mr-2" />Edit</a>
                            <a className="dropdown-item" href="https://iqonic.design/themes/metorik/html/index.html#"><i className="ri-printer-fill mr-2" />Print</a>
                            <a className="dropdown-item" href="https://iqonic.design/themes/metorik/html/index.html#"><i className="ri-file-download-fill mr-2" />Download</a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="iq-card-body">
                      <ul className="iq-timeline">
                        <li>
                          <div className="timeline-dots" />
                          <h6 className="float-left mb-1">Client Login</h6>
                          <small className="float-right mt-1">24 November 2019</small>
                          <div className="d-inline-block w-100">
                            <p>Bonbon macaroon jelly beans gummi bears jelly lollipop apple</p>
                          </div>
                        </li>
                        <li>
                          <div className="timeline-dots border-success" />
                          <h6 className="float-left mb-1">Scheduled Maintenance</h6>
                          <small className="float-right mt-1">23 November 2019</small>
                          <div className="d-inline-block w-100">
                            <p>Bonbon macaroon jelly beans gummi bears jelly lollipop apple</p>
                          </div>
                        </li>
                        <li>
                          <div className="timeline-dots border-primary" />
                          <h6 className="float-left mb-1">Client Call</h6>
                          <small className="float-right mt-1">19 November 2019</small>
                          <div className="d-inline-block w-100">
                            <p>Bonbon macaroon jelly beans gummi bears jelly lollipop apple</p>
                          </div>
                        </li>
                        <li>
                          <div className="timeline-dots border-warning" />
                          <h6 className="float-left mb-1">Mega event</h6>
                          <small className="float-right mt-1">15 November 2019</small>
                          <div className="d-inline-block w-100">
                            <p>Bonbon macaroon jelly beans gummi bears jelly lollipop apple</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-8">
                  <div className="iq-card iq-card-block iq-card-stretch iq-card-height">
                    <div className="iq-card-header d-flex justify-content-between">
                      <div className="iq-header-title">
                        <h4 className="card-title">Server History</h4>
                      </div>
                      <div className="iq-card-header-toolbar d-flex align-items-center">
                        <div className="dropdown">
                          <span className="dropdown-toggle text-primary" id="dropdownMenuButton05" data-toggle="dropdown">
                            <i className="ri-more-2-fill" />
                          </span>
                          <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton05">
                            <a className="dropdown-item" href="https://iqonic.design/themes/metorik/html/index.html#"><i className="ri-eye-fill mr-2" />View</a>
                            <a className="dropdown-item" href="https://iqonic.design/themes/metorik/html/index.html#"><i className="ri-delete-bin-6-fill mr-2" />Delete</a>
                            <a className="dropdown-item" href="https://iqonic.design/themes/metorik/html/index.html#"><i className="ri-pencil-fill mr-2" />Edit</a>
                            <a className="dropdown-item" href="https://iqonic.design/themes/metorik/html/index.html#"><i className="ri-printer-fill mr-2" />Print</a>
                            <a className="dropdown-item" href="https://iqonic.design/themes/metorik/html/index.html#"><i className="ri-file-download-fill mr-2" />Download</a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="iq-card-body pb-0">
                      <div className="table-responsive">
                        <table className="table mb-0 table-borderless">
                          <thead>
                            <tr>
                              <th scope="col">Server ID</th>
                              <th scope="col">Up Since</th>
                              <th scope="col">Last Reboot</th>
                              <th scope="col">Status</th>
                              <th scope="col">Host</th>
                              <th scope="col">Utilization</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>#0879985</td>
                              <td>26/12/2019</td>
                              <td>30/12/2019</td>
                              <td>
                                <div className="badge badge-pill badge-success">Running</div>
                              </td>
                              <td>Victoria 8007 Australia</td>
                              <td>
                                <div className="iq-progress-bar">
                                  <span className="bg-success" data-percent={90} style={{ transition: 'width 2s ease 0s', width: '90%' }} />
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>#0879984</td>
                              <td>23/12/2019</td>
                              <td>27/12/2019</td>
                              <td>
                                <div className="badge badge-pill badge-warning text-white">Starting</div>
                              </td>
                              <td>Athens 2745 Greece</td>
                              <td>
                                <div className="iq-progress-bar">
                                  <span className="bg-warning" data-percent={70} style={{ transition: 'width 2s ease 0s', width: '70%' }} />
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>#0879983</td>
                              <td>18/12/2019</td>
                              <td>21/12/2019</td>
                              <td>
                                <div className="badge badge-pill badge-danger">Stopped</div>
                              </td>
                              <td>Victoria 8007 Australia</td>
                              <td>
                                <div className="iq-progress-bar">
                                  <span className="bg-danger" data-percent={48} style={{ transition: 'width 2s ease 0s', width: '48%' }} />
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>#0879982</td>
                              <td>14/12/2019</td>
                              <td>20/12/2019</td>
                              <td>
                                <div className="badge badge-pill badge-info">Maintenance</div>
                              </td>
                              <td>Delhi 0014 India</td>
                              <td>
                                <div className="iq-progress-bar">
                                  <span className="bg-info" data-percent={90} style={{ transition: 'width 2s ease 0s', width: '90%' }} />
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>#0879981</td>
                              <td>10/12/2019</td>
                              <td>18/12/2019</td>
                              <td>
                                <div className="badge badge-pill badge-success">Running</div>
                              </td>
                              <td>Alabama 2741 USA</td>
                              <td>
                                <div className="iq-progress-bar">
                                  <span className="bg-success" data-percent={45} style={{ transition: 'width 2s ease 0s', width: '45%' }} />
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>#0879981</td>
                              <td>13/12/2019</td>
                              <td>23/12/2019</td>
                              <td>
                                <div className="badge badge-pill badge-primary">Running</div>
                              </td>
                              <td>Victoria 8007 Australia</td>
                              <td>
                                <div className="iq-progress-bar">
                                  <span className="bg-primary" data-percent={80} style={{ transition: 'width 2s ease 0s', width: '80%' }} />
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>#01258569</td>
                              <td>20/12/2019</td>
                              <td>29/12/2019</td>
                              <td>
                                <div className="badge badge-pill badge-warning text-white">Starting</div>
                              </td>
                              <td>Athens 2745 Greece</td>
                              <td>
                                <div className="iq-progress-bar">
                                  <span className="bg-warning" data-percent={55} style={{ transition: 'width 2s ease 0s', width: '55%' }} />
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>#0825685</td>
                              <td>12/12/2019</td>
                              <td>22/12/2019</td>
                              <td>
                                <div className="badge badge-pill badge-danger">Stoppen</div>
                              </td>
                              <td>Victoria 8007 Australia</td>
                              <td>
                                <div className="iq-progress-bar">
                                  <span className="bg-danger" data-percent={60} style={{ transition: 'width 2s ease 0s', width: '60%' }} />
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              */}
            </div>
          </div>
        </div>

   
        {/* <Footer /> */}
      </div>
    )
  }
}


export default Home;