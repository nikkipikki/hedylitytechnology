import React from "react"
import { Link } from "react-router-dom"
import "./style.css"
import Tellmemorebutton from "../tellmemorebutton"


class Whatwedo extends React.Component {
  render() {
    return (
      <div>
        <div>
          <div className="circledivlargebox">
            <div className="rectangulardivlarge">
            </div>
          </div>
          <div className="whatwedobox">
            <h1>WHAT WE DO</h1>
          </div>
            <div className="threeareas">
            <div className="onearea">
            <Link
            style={{ textDecoration: "none", color: "black" }}
            to="/services">
            <p className="hedytexttilt">Hedy</p>
            <h1>SERVICES</h1>
            <p className="threeareassmalltext2">
                We support start-ups, mid- sized and larger
                companies in their ambition to build a profitable
                and successful business.</p>
              <Tellmemorebutton/>
              </Link>
              </div>
            <div className="onearea">
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to="/academy">
              <p className="hedytexttilt">Hedy</p>

            <h1>ACADEMY</h1>
            <p className="threeareassmalltext3">
            We provide high quality education to
            close the gap between tech and business,
            and build the skills we need to face a
            future where technology will be the main actor.</p>
            <Tellmemorebutton/>
            </Link>
              </div>
            <div className="onearea">
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to="/innovationstudio">
              <p className="hedytexttilt">Hedy</p>

            <h1>INNOVATION STUDIO</h1>
            <p className="threeareassmalltext">
                We edge up our business model by investing
                in tech innovations that make a difference
                and have the ambition to solve at least one
                of the 17 sustainability goals set by the world’s
                leaders for 2030.</p>
            <Tellmemorebutton/>
            </Link>
              </div>
            </div>
          </div>
        </div>
    )
  }

}

export default Whatwedo
