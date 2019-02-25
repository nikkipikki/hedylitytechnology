import React from "react"
import "./style.css"
import { Link } from "react-router-dom"


class Teamintro extends React.Component {
  render() {
    return (
      <Link
        style={{ textDecoration: "none", color: "black" }}
        to="/team">
      <div className="teampicturebox">
          <div id="teampicture">
            <h1 id="texthedyteam">The Hedy Team</h1>
          </div>
      </div>
      </Link>
    )
  }

}

export default Teamintro
