import React from "react"
import "./style.css"

class Hamburgermenu extends React.Component {
  render() {
    return (
      <div>
      <div className="menuboarddiv">
        <div className="boxbehindhamburger" id="menuToggle">
          <nav role='navigation'>
            <div id="menuToggle">
              <input type="checkbox" />
              <span></span>
              <span></span>
              <span></span>
              <ul id="menu">
                <p>HOME</p>
                <p>DIARY</p>
                <p>CONTACT</p>
              </ul>
            </div>
          </nav>
          {/* {!this.state.isHidden && <Menudropdown />} */}
        </div>
      </div>
      </div>
    )
  }

}

export default Hamburgermenu
