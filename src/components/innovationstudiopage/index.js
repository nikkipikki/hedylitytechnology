import React from "react"
import "./style.css"
import Hamburgermenu from "../hamburgermenu"
import Contactbutton from "../contactbutton"
import ScrollToTopOnMount from "../scrolltotoponmount"



class Innovationstudiopage extends React.Component {
  render() {
    return (
      <div className="fadeinclass">
        <ScrollToTopOnMount/>

      <div className="mobile">
        <div className="pagemargin">
        <div className="whatwedoheadertext">
          <h1>INNOVATION STUDIO</h1>
        </div>
        <div className="whatwedosmalltextcenter">
          <p>We become your tech and/or business partner in exchange for equity</p>
        </div>
        <div className="abouttextthinleft">
          <p> Our strong belief is that technology is the key to a better world,
          therefore we partner up with, and invest in, tech innovations that
          have the ambition to contribute to solving at least one of the 17 global sustainability goals.</p>
        </div>
        <div className="whatwedoheadertext">
          <h1>WHAT WE DO</h1>
        </div>
        <div className="whatwedosmalltext">
          <p>We accelerate start-ups through becoming a long-term business & tech partner</p>
        </div>
        <div className="whatwedoheadertext">
          <h1>OUR OFFER</h1>
        </div>
        <div className="abouttextthinleft">
          <ul>
            <li>Highly skilled board member</li>
            <li>A well-formed development team based on your needs</li>
            <li>Business competency to execute strategies successfully and to scale up</li>
            <li>An assigned CTO to secure the tech architecture and development</li>
            <li>Lower cost for consultant services</li>
            <li>Opportunity to be part of Hedy’s future facilities – to keep your partner close</li>
          </ul>
        </div>
        <div className="whatwedoheadertext">
          <h1>HOW IT WORKS</h1>
        </div>
        <div className="whatwedosmalltext">
          <p>We start off with a 4-week Tech Imprint Potential (TIP)
          review to scan the business, tech stack and the potential.
          Based on the outcome, we set a roadmap and make a decision on the way forward</p>
        </div>
        </div>
      </div>


        <div className="web">
          <div className="areasheader">
            <h1>INNOVATION STUDIO</h1>
          </div>
          <div className="subheader">
            <p>We become your tech and/or business partner in exchange for equity</p>
          </div>
          <div className="textthin">
            <p> Our strong belief is that technology is the key to a better world,
            therefore we partner up with, and invest in, tech innovations that
            have the ambition to contribute to solving at least one of the 17 global sustainability goals.</p>
          </div>
          <div className="whatwedoheadertext">
            <h1>WHAT WE DO</h1>
          </div>
          <div className="subheader">
            <p>We accelerate start-ups through becoming a long-term business & tech partner</p>
          </div>

        <div className="areaspresentingdiv">
          <div className="typediv1">
          <div className="typetext">
            <h1>OUR OFFER</h1>
          </div>
          <div className="typethintext">
            <ul>
              <li>Highly skilled board member</li>
              <li>A well-formed development team based on your needs</li>
              <li>Business competency to execute strategies successfully and to scale up</li>
              <li>An assigned CTO to secure the tech architecture and development</li>
              <li>Lower cost for consultant services</li>
              <li>Opportunity to be part of Hedy’s future facilities – to keep your partner close</li>
            </ul>
          </div>
          </div>
          <div className="whatwedoheadertext">
            <h1>HOW IT WORKS</h1>
          </div>
          <div className="subheader">
            <p>We start off with a 4-week Tech Imprint Potential (TIP)
            review to scan the business, tech stack and the potential.
            Based on the outcome, we set a roadmap and make a decision on the way forward</p>
          </div>
          </div>
          </div>

        <Contactbutton/>
      </div>

    )
  }
}

export default Innovationstudiopage
