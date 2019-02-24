import React from "react"
import "./style.css"
import Hamburgermenu from "../hamburgermenu"


class Academypage extends React.Component {
  render() {
    return (
      <div>
        <div>
          <Hamburgermenu/>
        </div>
        <div className="whatwedoheadertext">
          <h1>HEDY LAMARR</h1>
        </div>
        <div className="whatwedosmalltext">
          <p>Hedylity Technology is named after Hedy Lamarr,
          the brain behind frequency hopping.
          Her invention came from wanting to think of something to stop Hitler
          from taking over Europe during World War II.</p>
        </div>
        <div className="whatwedosmalltext">
          <p>Frequency hopping is the basis for secure Wi-Fi, Bluetooth,
          cell phone, GPS and military technology –
          an invention that forms our whole society today!</p>
        </div>
        <div className="whatwedosmalltext">
          <p>Hedy was a famous Hollywood actor and the inspiration behind the
          look of Snow-white and Catwoman, she never got any share of
          her 30 billion dollar invention.</p>
        </div>
        <div className="whatwedosmalltext">
          <p>Just as Hedy, Hedylity Technology wants to
          make a tech imprint for a better world</p>
        </div>
        <div className="whatwedosmalltext">
          <p>“The brains of people are more interesting than the looks” Hedy Lamarr
          (1914 – 2000)</p>
        </div>
      </div>
    )
  }
}

export default Academypage
