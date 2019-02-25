import React from "react"
import "./style.css"
import Hamburgermenu from "../hamburgermenu"

class Header extends React.Component {
  render() {
    return (
      <div>
        <div>
          <Hamburgermenu/>
        </div>
        <div className="header" id="blackhylogo"/>
        <div className="hedylitytechnologytext">
        <div className="typewriter">
          <h1>HEDYLITY TECHNOLOGY</h1>
          </div>
        <div className="fadeintext">
          <h1 className="callushedytext">But you can call us <mark className="pink">Hedy</mark></h1>
          </div>
        </div>
      </div>
    )
  }

}

export default Header
