import React from "react"
import "./style.css"
import Hamburgermenu from "../hamburgermenu"
import ScrollToTopOnMount from "../scrolltotoponmount"


class Teampage extends React.Component {
  render() {
    return (
      <div className="fadeinclass">
        <ScrollToTopOnMount/>
        <div>
          <Hamburgermenu/>
        </div>
        <div className="pagemargin">

        <div className="newpageheading">
          <h1>TEAM PHILOSOPHY</h1>
        </div>
        <div className="newpageintrotext">
          <p>At Hedy we put continuous learning in the
          forefront and share our knowledge to build
          a strong team and be able to take on complex
          challenges and create the future.
          We are gathering talents that are brilliant at what they do,
          role models within their area of expertise and who are
          driven by constantly learning.</p>
        </div>

        <div className="teambox">
          <div className="picturebox" id="bob">
            <h1>BOB DAHLBERG</h1>
            <p>Bob is a hands on technical lead that is passionate
            about quality and to always improve his thinking and his
            perception of a problem. He is wicked at learning, always
            reading about a new paradigm, pattern, language or framework
            to enable him to fully understand the big picture of a complex solution.</p>
          </div>
          <div className="picturebox" id="emelie">
            <h1>EMELIE MEURK DEMERUD</h1>
          </div>
          <div className="picturebox" id="hanna">
            <h1>HANNA MOISANDER</h1>
          </div>
          <div className="picturebox" id="nicole">
            <h1>NICOLE PEHAR</h1>
          </div>
          <div className="picturebox" id="oden">
            <h1>ODEN LOBELL</h1>
          </div>
          <div className="picturebox" id="sara">
            <h1>SARAH OUAKIM</h1>
          </div>
        </div>


        <div className="whatwedosmalltext">
          <p>WANT TO JOIN OUR TEAM?</p>
        </div>
        </div>
      </div>
    )
  }
}

export default Teampage
