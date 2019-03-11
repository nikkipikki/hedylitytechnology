import React from "react"
import { Link } from "react-router-dom"
import "./style.css"
import Tellmemorebutton from "../tellmemorebutton"


class Whatwedo extends React.Component {
  render() {
    return (
      <div>
        <div>
          <div className="whatwedobox">
            <h1>WHAT WE DO</h1>
          </div>

          <div className="threeareas">

          <div className="picturedivwhatwedo">
            <div id="services">
              <div className="onearea">
                <Link
                style={{ textDecoration: "none", color: "black" }}
                to="/services">
              <div className="opacity05">
              <p className="hedytexttilt">Hedy</p>
              <h1 className="beige">SERVICES</h1>
                <p className="threeareassmalltext2">
                  We support start-ups, mid- sized and larger
                  companies in their ambition to build a profitable
                  and successful business.</p>
              </div>
                </Link>
                </div>
                </div>
                </div>

          <div className="picturedivwhatwedo">
            <div id="academy">
              <div className="onearea">
                <Link
                style={{ textDecoration: "none", color: "black" }}
                to="/academy">
                  <div className="opacity05">
                  <p className="hedytexttilt">Hedy</p>
                  <h1 className="beige">ACADEMY</h1>
                  <p className="threeareassmalltext3">
                  We provide high quality education to
                  close the gap between tech and business,
                  and build the skills we need to face a
                  future where technology will be the main actor.</p>
                </div>
                </Link>
                </div>
                </div>
                </div>

          <div className="picturedivwhatwedo">
            <div id="innovation">
              <div className="onearea">
                <Link
                style={{ textDecoration: "none", color: "black" }}
                to="/innovationstudio">
                  <div className="opacity05">
                  <p className="hedytexttilt">Hedy</p>
                  <h1 className="beige">INNOVATION STUDIO</h1>
                  <p className="threeareassmalltext">
                  We edge up our business model by investing
                  in tech innovations that make a difference
                  and have the ambition to solve at least one
                  of the 17 sustainability goals set by the world’s
                  leaders for 2030.</p>
                </div>
                </Link>
                </div>
                </div>
                </div>

            </div>
          </div>
        </div>
    )
  }

}

export default Whatwedo
