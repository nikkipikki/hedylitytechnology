import React from "react"
import { Link } from "react-router-dom"
import "./style.css"

class Hamburgermenu extends React.Component {
  render() {
    return (
      <div>
      <div className="mobile">
      <div className="pagemargin">
      <div className="menuboarddiv">
        <div className="boxbehindhamburger" id="menuToggle">
          <nav role='navigation'>
            <div id="menuToggle">
              <input type="checkbox" />
              <span></span>
              <span></span>
              <span></span>
              <ul id="menu">
              <Link
                style={{ textDecoration: "none", color: "#ffffff" }}
                to="/">
                <p>HOME</p>
                </Link>
                <Link
                  style={{ textDecoration: "none", color: "#ffffff" }}
                  to="/services">
                <p>SERVICES</p>
                </Link>
                <Link
                  style={{ textDecoration: "none", color: "#ffffff" }}
                  to="/academy">
                <p>ACADEMY</p>
                </Link>
                <Link
                  style={{ textDecoration: "none", color: "#ffffff" }}
                  to="/innovationstudio">
                <p>INNOVATION STUDIO</p>
                </Link>
                <Link
                  style={{ textDecoration: "none", color: "#ffffff" }}
                  to="/team">
                <p>TEAM</p>
                </Link>
                <Link
                  style={{ textDecoration: "none", color: "#ffffff" }}
                  to="/about">
                <p>ABOUT</p>
                </Link>
              </ul>
            </div>
          </nav>
          {/* {!this.state.isHidden && <Menudropdown />} */}
        </div>
      </div>
      </div>
      </div>

      <div className="web">
      <div className="webmenuboarddiv">

      <div className="webhedylogotextbox">
      <Link
        style={{ textDecoration: "none", color: "black",  cursor:"pointer" }}
        to="/">
      <div id="blackhylogo">
        </div>
        </Link>

      </div>
      <div className="menutext">
      <h5 id="arcamajora">MENU</h5>
      </div>
        <div className="webboxbehindhamburger" id="webmenuToggle">

          <nav role='navigation'>

            <div id="webmenuToggle">

              <input type="checkbox" />

              <ul id="webmenu">
              <Link
                style={{ textDecoration: "none", color: "#ffffff" }}
                to="/">
                <p>HOME</p>
                </Link>
                <Link
                  style={{ textDecoration: "none", color: "#ffffff" }}
                  to="/services">
                <p>SERVICES</p>
                </Link>
                <Link
                  style={{ textDecoration: "none", color: "#ffffff" }}
                  to="/academy">
                <p>ACADEMY</p>
                </Link>
                <Link
                  style={{ textDecoration: "none", color: "#ffffff" }}
                  to="/innovationstudio">
                <p>INNOVATION STUDIO</p>
                </Link>
                <Link
                  style={{ textDecoration: "none", color: "#ffffff" }}
                  to="/team">
                <p>TEAM</p>
                </Link>
                <Link
                  style={{ textDecoration: "none", color: "#ffffff" }}
                  to="/about">
                <p>ABOUT</p>
                </Link>
              </ul>
            </div>
          </nav>
          {/* {!this.state.isHidden && <Menudropdown />} */}
        </div>
        </div>


      </div>
      </div>


    )
  }

}

export default Hamburgermenu
