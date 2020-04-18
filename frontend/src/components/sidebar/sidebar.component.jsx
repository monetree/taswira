import React from "react";
import { Link } from "react-router-dom";

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openMenu: false,
      mart: true,
      datasource: true,
      path: window.location.pathname
    }
  }

  closeMenu = () => {
    if (this.state.openMenu) {
      document.body.classList.remove('sidebar-main');
    } else {
      document.body.classList.add('sidebar-main');
    }
    this.setState({
      openMenu: !this.state.openMenu
    });
  }

  toggleMart = () => {
    this.setState({
      mart: !this.state.mart
    });
  }

  toggleDatasource = () => {
    this.setState({
      datasource: !this.state.datasource
    });
  }

  render() {
    const { mart, datasource, openMenu, path } = this.state;
    return (
      <div className="iq-sidebar">
        <div className="iq-sidebar-logo d-flex justify-content-between">
          <Link href="/dashboard">
            <img src="/static/img/logo.gif" className="img-fluid" alt="" />
            <span>Metorik</span>
          </Link>
          <div className="iq-menu-bt align-self-center" onClick={this.closeMenu} id="line-menu">
            <div className={openMenu ? "wrapper-menu open" : "wrapper-menu"}>
              <div className="line-menu half start" />
              <div className="line-menu" />
              <div className="line-menu half end" />
            </div>
          </div>
        </div>
        <div id="sidebar-scrollbar" data-scrollbar="true" tabIndex={-1} style={{ overflow: 'hidden', outline: 'none' }}>
          <div className="scroll-content" style={{ transform: 'translate3d(0px, 0px, 0px)' }}>
            <nav className="iq-sidebar-menu">
              <ul id="iq-sidebar-toggle" className="iq-menu">
              <li><Link to="/dashboard" className="iq-waves-effect"><i className="las la-edit" /><span> New Report 
              </span></Link></li>

                <li className="active">
                  <a onClick={this.toggleMart} className={mart ? "iq-waves-effect" : "iq-waves-effect collapsed"} data-toggle="collapse" aria-expanded="true"><i className="las la-city" /><span>Marts</span><i className="ri-arrow-right-s-line iq-arrow-right" /></a>
                  <ul id="dashboard" className={mart ? "iq-submenu collapse show" : "iq-submenu collapse"} data-parent="#iq-sidebar-toggle">
                    <li className="active"><a href="https://iqonic.design/themes/metorik/html/index.html"><i className="las la-copy Reports"/>Reports</a></li>
                    <li><a href="https://iqonic.design/themes/metorik/html/dashboard1.html"><i className="las la-home" />Dashboard</a></li>
                  </ul>
                </li>


                <li className="active">
                  <a onClick={this.toggleDatasource} className={datasource ? "iq-waves-effect" : "iq-waves-effect collapsed"} data-toggle="collapse" aria-expanded="true"><i class="las la-server"></i><span>Datasource</span><i className="ri-arrow-right-s-line iq-arrow-right" /></a>
                  <ul id="dashboard" className={datasource ? "iq-submenu collapse show" : "iq-submenu collapse"} data-parent="#iq-sidebar-toggle">
                    <li className="active"><Link to="/dashboard/databases"><i class="las la-database"></i>Databases
                    </Link></li>
                    <li><a href="https://iqonic.design/themes/metorik/html/dashboard1.html"><i class="las la-file-excel"></i>Files</a></li>
                  </ul>
                </li>



                <li><a href="https://iqonic.design/themes/metorik/html/calendar.html" className="iq-waves-effect"><i class="las la-wave-square"></i><span>Requests</span></a></li>
                <li><a href="https://iqonic.design/themes/metorik/html/calendar.html" className="iq-waves-effect"><i class="las la-cogs"></i><span>Settings</span></a></li>
         
              </ul>
            </nav>
            <div className="p-3" />
          </div><div className="scrollbar-track scrollbar-track-x" style={{ display: 'none' }}><div className="scrollbar-thumb scrollbar-thumb-x" style={{ width: '260px', transform: 'translate3d(0px, 0px, 0px)' }} /></div><div className="scrollbar-track scrollbar-track-y" style={{ display: 'block' }}><div className="scrollbar-thumb scrollbar-thumb-y" style={{ height: '330.604px', transform: 'translate3d(0px, 0px, 0px)' }} /></div></div>
      </div>

    )
  }
}

export default Sidebar;











                 