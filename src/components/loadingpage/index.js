import React from "react"
import { Link } from "react-router-dom"
import "./style.css"
import Header from "../header"
import Introbox from "../introbox"
import Whatwedo from "../whatwedo"
import Academyintro from "../academyintro"
import Innovationstudiointro from "../innovationstudiointro"
import Servicesintro from "../servicesintro"
import Tellmemorebutton from "../tellmemorebutton"
import Teamintro from "../teamintro"
import Wearehedytext from "../wearehedytext"
import Hedylamarrintro from "../hedylamarrintro"
import Fotnot from "../fotnot"
import ScrollToTopOnMount from "../scrolltotoponmount"

class Loadingpage extends React.Component {
  render() {
    return (
      <div className="fadeinclass">
        <Header/>

        <Introbox/>

        <Whatwedo/>

        <Link
          style={{ textDecoration: "none", color: "black" }}
          to="/academy">
        <Academyintro/>
        <Tellmemorebutton/>
        </Link>

        <Link
          style={{ textDecoration: "none", color: "black" }}
          to="/innovationstudio">
        <Innovationstudiointro/>
        <Tellmemorebutton/>
        </Link>

        <Link
          style={{ textDecoration: "none", color: "black" }}
          to="/services">
        <Servicesintro/>
        <Tellmemorebutton/>
        </Link>

        <Link
          style={{ textDecoration: "none", color: "black" }}
          to="/team">
        <Teamintro/>
        </Link>

        <Wearehedytext/>

        <Link
          style={{ textDecoration: "none", color: "black" }}
          to="/hedy">
        <Hedylamarrintro/>
        </Link>

        <Fotnot/>

      </div>
    )
  }

}

export default Loadingpage
