import React from "react"
import "./style.css"
import Contactbutton from "../contactbutton"
import Getintouch from "../getintouch"

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

          <div id="innovation3">

          <div className="areasheader">

          <div className="onheaderbox" id="backgroundcoloropacitywhite">
          <div id="arcamajora">
            <h1 id="nomargin">INNOVATION STUDIO</h1>
            </div>
            <div id="futuramediumitalic">
            <h6 id="nomargin">We become your tech and/or business partner in exchange for equity</h6>
          </div>
          </div>
          </div>

      <div className="justifykotlinlargediv">

      <div className="justifyrightkotlin">

      <div className="textboxservices">
      <h4 className="textboxheader" id="nomargin">OUR OFFER</h4>
        <div className="bulletpoints">
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
      </div>


      <div className="justifyrightservices">
      <div className="textboxservices2" id="backgroundcolorblack">
        <h5 id="nomargin">We accelerate start-ups through becoming a long-term business & tech partner.</h5>
        <h5> Our strong belief is that technology is the key to a better world,
        therefore we partner up with, and invest in, tech innovations that
        have the ambition to contribute to solving at least one of the 17 global sustainability goals.</h5>
      </div>
      </div>
    </div>
  </div>
  </div>

            <div id="flexbox">
              <div className="innovationdiv">
              <div id="arcamajora">
                <h2 id="nomargin">HOW IT WORKS</h2>
                <h5 id="futurathin">We start off with a 4-week Tech Imprint Potential (TIP)
                review to scan the business, tech stack and the potential.
                Based on the outcome, we set a roadmap and make a decision on the way forward</h5>
              </div>
              </div>
              <div className="innovationdiv2">
              <div className="innovationpicturebox" id="letsgo"/>
            </div>
          </div>


        <Getintouch/>
      </div>

    )
  }
}

export default Innovationstudiopage
