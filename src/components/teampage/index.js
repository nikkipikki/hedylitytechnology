import React from "react"
import "./style.css"
import Hamburgermenu from "../hamburgermenu"


class Teampage extends React.Component {
  render() {
    return (
      <div>
        <div>
          <Hamburgermenu/>
        </div>
        <div className="whatwedoheadertext">
          <h1>TEAM PHILOSOPHY</h1>
        </div>
        <div className="whatwedosmalltext">
          <p>At Hedy we put continuous learning in the
          forefront and share our knowledge to build
          a strong team and be able to take on complex
          challenges and create the future.
          We are gathering talents that are brilliant at what they do,
          role models within their area of expertise and who are
          driven by constantly learning.</p>
        </div>
        <div className="whatwedosmalltext">
          <p>BILDER</p>
        </div>
        <div className="whatwedosmalltext">
          <p>WANT TO JOIN OUR TEAM?</p>
        </div>
      </div>
    )
  }
}

export default Teampage
