import React from "react"
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

class Loadingpage extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <Introbox/>
        <Whatwedo/>
        <Academyintro/>
        <Tellmemorebutton/>
        <Innovationstudiointro/>
        <Tellmemorebutton/>
        <Servicesintro/>
        <Tellmemorebutton/>
        <Teamintro/>
        <Wearehedytext/>
        <Hedylamarrintro/>
      </div>
    )
  }

}

export default Loadingpage
