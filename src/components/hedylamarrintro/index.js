import React from "react"
import { Link } from "react-router-dom"
import "./style.css"

class Hedylamarrintro extends React.Component {
  render() {
    return (
      <div>
      <Link
        style={{ textDecoration: "none", color: "black" }}
        to="/hedy">
        <div className="hedylamarrpicturebox">
          <h1>OUR MUSE</h1>
        </div>
        <div id="hedylamarrpicture">
          <h1 id="hedylamarrtext">Hedy lamarr</h1>
        </div>
      </Link>
      </div>
    )
  }
}

export default Hedylamarrintro
