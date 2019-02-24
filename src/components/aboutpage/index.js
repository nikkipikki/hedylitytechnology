import React from "react"
import "./style.css"
import Hamburgermenu from "../hamburgermenu"


class Aboutpage extends React.Component {
  render() {
    return (
      <div>
        <div>
          <Hamburgermenu/>
        </div>
        <div className="whatwedoheadertext">
          <h1>ABOUT HEDY</h1>
        </div>
        <div className="whatwedosmalltext">
          <p>We are Honest. We are Effectual.
          We are Devoted. We are Young & Witty. We are HEDY.</p>
        </div>
        <div className="whatwedoheadertext">
          <h1>Values</h1>
        </div>
        <div className="whatwedosmalltext">
          <p>Honest - We see opportunities in all situations,
          we listen and openly share our opinions. We are humble and
          take responsibility for our actions. We value equality - the best solutions are created together.</p>
          <p>Effectual - We deliver with quality, efficiency and heart. We take responsibility to think one step
          further – with the customer, the team and the world in mind.</p>
          <p>Devoted - We have the courage to put our heart and soul in everything we do. We are problem solvers,
          always adapting to instant changes and new challenges.</p>
          <p>Young & Witty - We are young at mind, eager to learn and constantly improving.
          We love creativity and openly share our knowledge, new ideas and approaches.
          We celebrate successes and failures – knowing we need them both to exceed!</p>
        </div>
        <div className="whatwedoheadertext">
          <h1>Leadership philosophy</h1>
        </div>
        <div className="whatwedosmalltext">
          <p>We believe that everyone is a leader.
            Leadership and personal development
            goes hand-in-hand and is the key to creating
            openness, profitability and creativity.</p>
        </div>
        <div className="whatwedoheadertext">
          <h1>BILD</h1>
        </div>
        <div className="whatwedosmalltext">
          <p>We founded Hedy because our strong belief is that technology will be the enabler
          to create the world we want to live in. Hedy gathers high-skilled talents within
          an environment where each one gets to discover and utilize its full potential.
          With continuous learning as a core, Hedy answers up to the pace and dramatic changes
          of the tech world and is the actor that puts the agenda into action. Let’s create the future together!</p>
        </div>
        <div className="whatwedoheadertext">
          <h1>Hanna & Emelie</h1>
        </div>
      </div>
    )
  }
}

export default Aboutpage
