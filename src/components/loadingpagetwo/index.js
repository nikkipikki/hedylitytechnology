import React from "react"
import { HashRouter, Route, Link } from "react-router-dom"
import "./style.css"
import Header from "../header"
import Whatwedo from "../whatwedo"
import Hamburgermenu from "../hamburgermenu"
import Fotnot from "../fotnot"






class Loadingpagetwo extends React.Component {
  render() {
    return (
      <HashRouter>

      <div>
      <div className="headerpic">
  <Hamburgermenu/>
      <Header/>



      <div className="whatwedotext">
      <p>Hedy focuses on making successful digitalization journeys
      with forefront technology, high-skilled people and an innovative environment.
      We want sustainable, win-win-win-win business relations where the end-customer,
      the client/partner, Hedy and the world wins on the tech and business solutions
      we are developing.</p>
      </div>

      <div id="arcamajora">
      <h1 id="colorwhite">WHAT WE DO</h1>
        <div className="whatwedoflexbox">




          <p className="hedytexttiltleft">Hedy</p>
          <div className="whatwedounitleft" id="arcamajora">
              <h1 id="colorwhite">SERVICES</h1>
              <h6>
                We support start-ups, mid- sized and larger
                companies in their ambition to build a profitable
                and successful business.</h6>
          </div>

          <p className="hedytexttiltleft">Hedy</p>
          <div className="whatwedounitleft" id="arcamajora">
              <h1 id="colorwhite">ACADEMY</h1>
              <h6>
              We provide high quality education to
              close the gap between tech and business,
              and build the skills we need to face a
              future where technology will be the main actor.</h6>
          </div>

          <p className="hedytexttiltleft">Hedy</p>
          <div className="whatwedounitleft" id="arcamajora">
              <h1 id="colorwhite">INNOVATION</h1>
              <h1 id="colorwhite">STUDIO</h1>
              <h6>
              We edge up our business model by investing
              in tech innovations that make a difference
              and have the ambition to solve at least one
              of the 17 sustainability goals set by the world’s
              leaders for 2030.</h6>
          </div>
          </div>
            </div>






      <Fotnot/>
      </div>
      </div>
      </HashRouter>

    )
  }

}

export default Loadingpagetwo
