import React from "react"
import "./style.css"

class Fotnot extends React.Component {
  render() {
    return (
      <div>
        <div className="menuboarddivfotnot">

          <div className="fotnotlogos">

            <a href="https://www.instagram.com/hedy.tech">
              <div className="logobox" id="instagramlogo" />
            </a>
            <a href="https://www.linkedin.com/company/hedy-tech">
              <div className="logobox" id="linkedinlogo" />
            </a>

          </div>

          <div className="fotnotcontact">
            <a href="mailto:hello@hedy.tech" style={{ textDecoration: "none", color: "white" }}>
              <h6>hello@hedy.tech</h6>
            </a>
          </div>
          <div className="fotnotcontact2">
              <h6 id="smallfont">Hedylity Technology / Lästmakargatan 18 / 111 44 Stockholm</h6>
          </div>

        </div>
      </div>
    )
  }

}

export default Fotnot
