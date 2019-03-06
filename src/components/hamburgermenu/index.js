import React from "react"
import { Link } from "react-router-dom"
import "./style.css"

class Hamburgermenu extends React.Component {
  render() {
    return (
      <div>
      <div className="mobile">
      <div className="menuboarddiv">
      <Link
        style={{ textDecoration: "none", color: "black" }}
        to="/">
        <div className="hedylogotext">
          <p>Hedy</p>
        </div>
      </Link>
        <div className="boxbehindhamburger" id="menuToggle">
          <nav role='navigation'>
            <div id="menuToggle">
              <input type="checkbox" />
              <span></span>
              <span></span>
              <span></span>
              <ul id="menu">
              <Link
                style={{ textDecoration: "none", color: "#FE7E83" }}
                to="/">
                <p>HOME</p>
                </Link>
                <Link
                  style={{ textDecoration: "none", color: "#FE7E83" }}
                  to="/services">
                <p>SERVICES</p>
                </Link>
                <Link
                  style={{ textDecoration: "none", color: "#FE7E83" }}
                  to="/academy">
                <p>ACADEMY</p>
                </Link>
                <Link
                  style={{ textDecoration: "none", color: "#FE7E83" }}
                  to="/innovationstudio">
                <p>INNOVATION STUDIO</p>
                </Link>
                <Link
                  style={{ textDecoration: "none", color: "#FE7E83" }}
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

      <div className="web">
      <div className="webmenuboarddiv">
      <Link
        style={{ textDecoration: "none", color: "black",  cursor:"pointer" }}
        to="/">
      <div className="webhedylogotextbox">
        <div className="webhedylogotext">
          <p>Hedy</p>
        </div>
      </div>
      </Link>
      <div className="menutext">
      <p>MENU</p>
      </div>
        <div className="webboxbehindhamburger" id="webmenuToggle">

          <nav role='navigation'>

            <div id="webmenuToggle">

              <input type="checkbox" />

              <ul id="webmenu">
              <Link
                style={{ textDecoration: "none", color: "#FE7E83" }}
                to="/">
                <p>HOME</p>
                </Link>
                <Link
                  style={{ textDecoration: "none", color: "#FE7E83" }}
                  to="/services">
                <p>SERVICES</p>
                </Link>
                <Link
                  style={{ textDecoration: "none", color: "#FE7E83" }}
                  to="/academy">
                <p>ACADEMY</p>
                </Link>
                <Link
                  style={{ textDecoration: "none", color: "#FE7E83" }}
                  to="/innovationstudio">
                <p>INNOVATION STUDIO</p>
                </Link>
                <Link
                  style={{ textDecoration: "none", color: "#FE7E83" }}
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
