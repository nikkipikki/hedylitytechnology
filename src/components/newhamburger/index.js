import React from "react"
import { Link } from "react-router-dom"
import "./style.css"


class Newhamburger extends React.Component {


  render() {
    return (

      <div>

        <div id="sidemenuToggle">
          <p className="menutext">MENU</p>

          <input type="checkbox" />



          <ul id="sidemenu">

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
              to="/services">
            <p>SERVICES</p>
            </Link>
            <Link
              style={{ textDecoration: "none", color: "#FE7E83" }}
              to="/about">
            <p>ABOUT</p>
            </Link>

          </ul>
        </div>
      </div>
    )
  }
}

export default Newhamburger
