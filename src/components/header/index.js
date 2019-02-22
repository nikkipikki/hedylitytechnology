import React from "react"
import "./style.css"
import Hamburgermenu from "../hamburgermenu"

class Header extends React.Component {
  render() {
    return (
      <div>
        <div className="menuboarddiv">
          <Hamburgermenu/>
        </div>
          <div className="header">
            <h1>HEDYLITY TECHNOLOGY</h1>
          </div>
      </div>
    )
  }

}

export default Header
