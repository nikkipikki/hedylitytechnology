import React from "react"
import "./style.css"

class Introbox extends React.Component {
  render() {
    return (
      <div>
        <div className="mobile">
          <div className="introbox">
            <h1 className="introtext">Our mission is to make a tech
            imprint for a better world.</h1>
            <p className="introtextsmall">Hedy focuses on making successful digitalization journeys
            with forefront technology, high-skilled people and an innovative environment.
            We want sustainable, win-win-win-win business relations where the end-customer,
            the client/partner, Hedy and the world wins on the tech and business solutions
            we are developing.</p>
            <h1 className="introtext">We are in it for the long-run,</h1>
            <h1 className="introtextlast">are you?</h1>
          </div>
        </div>

        <div className="web">
          <div className="circledivsmall">
          </div>
            <div className="webintrobox">
            <h1 className="webintrotext">Our mission is to make a tech
            imprint for a better world.</h1>
            <p className="webintrotextsmall">Hedy focuses on making successful digitalization journeys
            with forefront technology, high-skilled people and an innovative environment.
            We want sustainable, win-win-win-win business relations where the end-customer,
            the client/partner, Hedy and the world wins on the tech and business solutions
            we are developing.</p>
            <h1 className="webintrotext">We are in it for the long-run,</h1>
            <h1 className="webintrotextlast">are you?</h1>
          </div>
        </div>

      </div>
    )
  }

}

export default Introbox
