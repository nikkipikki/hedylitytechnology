import React from "react"
import "./style.css"

class Header extends React.Component {

  render() {
    return (
      <div>
        <div className="mobile">
        </div>
        <div class="container">

   <div class="content">
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

  <div class="waves">

   <div class="wave a"></div>
   <div class="wave b"></div>
   <div class="wave c"></div>
</div>
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
