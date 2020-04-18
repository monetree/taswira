import React from 'react';
import FormatUrl from "../../utils/UrlFormatter";
import { ToastsStore } from 'react-toasts';

class Databases extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          createdbmodal: false,
          ssh: false,
          host: null,
          user: null,
          password: null,
          database: null,
          db_type: null,
          port: null,
          ssh_host: null,
          ssh_username: null,
          ssh_password: null,
          databases:[]
        }
    }

    handleModal = (show) => {
      let body = document.body;
      if(show){
        body.classList.add("modal-open");
      } else {
        body.classList.remove("modal-open");
      }

      this.setState({
        createdbmodal: show
      })
    }

    // b'{"connection_data":{"host":"localhost","user":"root","password":"Thinkonce","database":"music","db_type":"MYS","port":"3306","id":null},
    // "ssh_data":{"host":"localhost","username":"soubhagya","password":"Thinkonce"}}'

    addDatabase = (ev) => {
      ev.preventDefault();
      const { ssh, host, user, password, database, db_type, port, ssh_host, ssh_username, ssh_password } = this.state;

      if(!host){
        ToastsStore.warning("host required", 3000, "custom-toaster");
        return
      }

      if(!user){
        ToastsStore.warning("user required", 3000, "custom-toaster");
        return
      }

      if(!password){
        ToastsStore.warning("password required", 3000, "custom-toaster");
        return
      }

      if(!database){
        ToastsStore.warning("database required", 3000, "custom-toaster");
        return
      }

      if(!db_type){
        ToastsStore.warning("database type required", 3000, "custom-toaster");
        return
      }

      if(!port){
        ToastsStore.warning("port required", 3000, "custom-toaster");
        return
      }

      const company = localStorage.getItem("company_id")
      const data = {"host":host,"user":user,"password":password,"database":database,"db_type":db_type,"port":port,"company":company}

      let url = FormatUrl(`/api/datasource/database/`);
      fetch(url, {
      method: 'POST',
      headers:{
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
      })
      .then(response => response.json())
      .then(res => {
        if(res.code === 200){
          ToastsStore.warning("Database added", 3000, "custom-toaster");
          this.handleModal(false)
        } else {
          ToastsStore.warning("Failed to add database", 3000, "custom-toaster");
        }
      }).catch(err => {
        ToastsStore.warning("Failed to add database", 3000, "custom-toaster");
      })
    }


    componentDidMount(){
      const company_id = localStorage.getItem("company_id")
      let url = FormatUrl(`/api/datasource/database/?company_id=${company_id}`);
      fetch(url)
      .then(res => res.json())
      .then(res => {
        this.setState({
          databases: res
        })
      }).catch(err => {
        console.log(err)
      })
    }

    render(){
      const { createdbmodal, ssh, databases } = this.state;
        return (
          <div className="row">
          <div className="col-md-12">
            <div class="iq-card">
            <div class="iq-card-header d-flex justify-content-between">
               <div class="iq-header-title">
                  <h4 class="card-title">Databases</h4>
               </div>
            </div>
            <div class="iq-card-body">
                         <div id="table" class="table-editable">
                           <span class="table-add float-right mb-3 mr-2">
                              <button class="btn btn-sm iq-bg-success" onClick={() => this.handleModal(true)}>
                                <i class="ri-add-fill"><span class="pl-1">Add New</span></i>
                              </button>
                           </span>
                           <table class="table table-bordered table-responsive-md table-striped text-center">
                             <thead>
                               <tr>
                                 <th>Database Name</th>
                                 <th>Database Type</th>
                                 <th>Added On</th>
                                 <th>Action</th>
                               </tr>
                             </thead>
                             <tbody>
                               {
                                 databases.map((database, index) => (
                                  <tr key={index}>
                                    <td contenteditable="true">{database.database}</td>
                                    <td contenteditable="true">{database.db_type}</td>
                                    <td contenteditable="true">12.23.4565</td>
                                    <td>
                                      <span class="table-remove"><button type="button"
                                          class="btn iq-bg-danger btn-rounded btn-sm my-0 mr10">Edit</button>
                                      </span>
                                      <span class="table-remove"><button type="button"
                                          class="btn iq-bg-danger btn-rounded btn-sm my-0">Remove</button>
                                      </span>
                                    </td>
                                  </tr>
                                 ))
                               }
                             </tbody>
                           </table>
                         </div>                    
                     </div>

                                   
                {
                  createdbmodal ?
                  (
                    <div className="modal fade show" id="exampleModalLong" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLongTitle" style={{display: 'block', paddingRight: '8px'}} aria-modal="true">
                    <div className="modal-dialog" role="document">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title text-center">Add database connection</h5>
                          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true" onClick={() => this.handleModal(false)}>×</span>
                          </button>
                        </div>
                        <div className="modal-body">
                          <form className="mt-4" onSubmit={this.addDatabase}>
                            <div className="form-group">
                              <label>Host</label>
                              <input onChange={(e) => this.setState({ host:e.target.value })} type="text" className="form-control mb-0"placeholder="Host" />
                            </div>

                            <div className="form-group">
                              <label>User</label>
                              <input onChange={(e) => this.setState({ user:e.target.value })} type="text" className="form-control mb-0"placeholder="User" />
                            </div>

                            <div className="form-group">
                              <label>Password</label>
                              <input onChange={(e) => this.setState({ password:e.target.value })} type="password" className="form-control mb-0"placeholder="Password" />
                            </div>

                            <div className="form-group">
                              <label>Database</label>
                              <input onChange={(e) => this.setState({ database:e.target.value })} type="text" className="form-control mb-0" placeholder="Database" />
                            </div>

                            <div className="form-group">
                              <label>Database type</label>
                              <input onChange={(e) => this.setState({ db_type:e.target.value })} type="text" className="form-control mb-0" placeholder="Database type" />
                            </div>

                            <div className="form-group">
                              <label>Port</label>
                              <input onChange={(e) => this.setState({ port:e.target.value })} type="text" className="form-control mb-0" placeholder="Port" />
                            </div>

                            <div className="d-inline-block w-100">
                              <div className="custom-control custom-checkbox d-inline-block mt-2 pt-1">
                                <input type="checkbox" className="custom-control-input" id="customCheck1" onChange={() => this.setState({ ssh: !ssh })} />
                                <label className="custom-control-label" htmlFor="customCheck1">Use SSH</label>
                                
                              </div>
                            </div>
                            <br/><br/>
                            
                            {
                              ssh ?
                              (
                                <div>
                                  <div className="form-group">
                                    <label>Host name</label>
                                    <input type="text" onChange={(e) => this.setState({ username:e.target.value })} className="form-control mb-0" placeholder="Host name" />
                                  </div>
    
                                  <div className="form-group">
                                    <label>User name</label>
                                    <input type="text" onChange={(e) => this.setState({ username:e.target.value })} className="form-control mb-0" placeholder="User name" />
                                  </div>
    
                                  <div className="form-group">
                                    <label>Password</label>
                                    <input type="password" onChange={(e) => this.setState({ username:e.target.value })} className="form-control mb-0" placeholder="Password" />
                                  </div>
                                </div>
                              ):(
                                <div>
                                </div>
                              )
                            }



                            <div className="d-inline-block w-100">
                              <button type="submit" className="btn btn-primary float-right">Add</button>
                            </div>

                          </form>
                     
                        </div>
                      </div>
                    </div>
                  </div>
                  ):(
                    <div>
                    </div>
                  )
                }
         </div>
         </div>
        </div>

        )
    }
}

export default Databases;







