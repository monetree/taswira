import React from "react";


class Footer extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return (
            <footer className="bg-white iq-footer">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-lg-6">
                    <ul className="list-inline mb-0">
                      <li className="list-inline-item"><a href="https://iqonic.design/themes/metorik/html/privacy-policy.html">Privacy Policy</a></li>
                      <li className="list-inline-item"><a href="https://iqonic.design/themes/metorik/html/terms-of-service.html">Terms of Use</a></li>
                    </ul>
                  </div>
                  <div className="col-lg-6 text-right">
                    Copyright 2020 <a href="https://iqonic.design/themes/metorik/html/index.html#">Metorik</a> All Rights Reserved.
                  </div>
                </div>
              </div>
            </footer>
        )
    }
}

export default Footer;