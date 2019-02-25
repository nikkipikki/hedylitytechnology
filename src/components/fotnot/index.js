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
            <p>hello@hedy.tech</p>
          </a>
            <p>Hedylity Technology / Lästmakargatan 18 / 111 44 Stockholm</p>
          </div>
        </div>
      </div>
    )
  }

}

export default Fotnot
