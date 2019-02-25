import React from "react"
import { Link } from "react-router-dom"
import "./style.css"

class Hamburgermenu extends React.Component {
  render() {
    return (
      <div>
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
                to="/about">
                <p>ABOUT</p>
                </Link>
                <Link
                  style={{ textDecoration: "none", color: "#FE7E83" }}
                  to="/academy">
                <p>ACADEMY</p>
                </Link>
                <p>CONTACT</p>
                <Link
                  style={{ textDecoration: "none", color: "#FE7E83" }}
                  to="/innovationstudio">
                <p>INNOVATION STUDIO</p>
                </Link>
                <Link
                  style={{ textDecoration: "none", color: "#FE7E83" }}
                  to="/services">
                <p>SERVICES</p>
                </Link>
              </ul>
            </div>
          </nav>
          {/* {!this.state.isHidden && <Menudropdown />} */}
        </div>
      </div>
      </div>
    )
  }

}

export default Hamburgermenu
