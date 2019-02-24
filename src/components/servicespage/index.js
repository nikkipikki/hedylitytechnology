import React from "react"
import "./style.css"
import Hamburgermenu from "../hamburgermenu"


class Servicespage extends React.Component {
  render() {
    return (
      <div>
        <div>
          <Hamburgermenu/>
        </div>
        <div className="whatwedoheadertext">
          <h1>SERVICES</h1>
        </div>
        <div className="whatwedosmalltext">
          <p>Consultancy services within programming and management</p>
        </div>
        <div className="whatwedosmalltext">
          <p>With forefront technology skills and strategic minds
          Hedy supports small, mid-sized and large companies in
          their aspiration to make a successful digitalization
          journey and bui3ld a profitable business.</p>
        </div>
        <div className="whatwedoheadertext">
          <h1>WHAT WE DO</h1>
        </div>
        <div className="whatwedosmalltext">
          <p>Accelerate businesses with skills and solutions
          for a profitable digitalization journey</p>
        </div>
        <div className="whatwedoheadertext">
          <h1>TYPE OF SERVICES</h1>
        </div>
        <div className="whatwedosmalltext">
          <ul>
            <li>Inhouse projects delivered by a Hedy team</li>
            <li>Consultancy service at client, where Hedy talent
            leads the work or is part of a team</li>
            <li>Take the role as tech and/or business partner</li>
          </ul>
        </div>
        <div className="whatwedoheadertext">
          <h1>TYPE OF CLIENT</h1>
        </div>
        <div className="whatwedosmalltext">
          <ul>
            <li>Wants to take their product or business to “the next level”</li>
            <li>Has digitalization on the agenda</li>
            <li>Needs support with specific competencies to develop its product</li>
            <li>Wants a long-term tech partner to complement its development team</li>
            <li>Is facing globalization, expansion or other change management challenges</li>
          </ul>
        </div>
        <div className="whatwedoheadertext">
          <h1>PRICE MODEL</h1>
        </div>
        <div className="whatwedosmalltext">
          <p>Depends on the assignments length, scope and need.
          We have booth fixed pricing and hourly rate</p>
        </div>
      </div>
    )
  }
}

export default Servicespage
