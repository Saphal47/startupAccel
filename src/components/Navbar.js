import React from 'react'

export default function Navbar(props) {

  let myStyle={
    fontFace: 'Poppins',
    fontSize: '24px',
  }

  return (
    <div>
      <nav style={{height:'80px'}} className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div style={myStyle} className="container-fluid">
              <a className="navbar-brand" href="#">
                <img src="untitled-design.png" style={{height:'80px',width:'80px'}}/>
              </a>

              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="container px-5">
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 mr-auto">
                  <li className="nav-item px-3">
                    <a className="nav-link active" aria-current="page" href="#">SERVICES</a>
                  </li>
                  <li className="nav-item dropdown px-3">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      ABOUT
                    </a>
                    <ul className="dropdown-menu mx-5">
                      <li><a className="dropdown-item" href="#">ABOUT US</a></li>
                      <li><a className="dropdown-item" href="#">REVIEWS</a></li>
                      <li><a className="dropdown-item" href="#">AWARDS</a></li>
                      <li><hr className="dropdown-divider"/></li>
                      <li><a className="dropdown-item" href="#">OUR VISION</a></li>
                    </ul>
                  </li>

                  <li className="nav-item px-3">
                    <a className="nav-link" href="#">PORTFOLIO</a>
                  </li>
                  
                  <li className="nav-item px-3">
                    <a className="nav-link">CONTACT</a>
                  </li>
                </ul>
                {/* <form className="d-flex" role="search">
                  <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                  <button className="btn btn-outline-success" type="submit">Search</button>
                </form> */}
                <button type="button" class="btn btn-primary btn-lg mx-4">FREE TRAINING</button>

              <div className={`form-check form-switch text-${props.mode ==='light' ? 'dark': 'light'} align-top`}>
              <input className="form-check-input" onClick={props.togglemode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault"></label>
            </div>
              </div>
              </div>
    
  </div>
   </nav>

    </div>
  )
}
