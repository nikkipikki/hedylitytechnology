import React from "react"
import { Link } from "react-router-dom"
import "./style.css"

class Hedylamarrintro extends React.Component {
  render() {
    return (
      <div>
      <div className="hedydiv">
      <div className="hedybox1">
      <h1 className="arcamajora"> HEDY LAMARR</h1>
      <h1> Our muse & the woman behind the name</h1>

      <p>Hedylity Technology is named after Hedy Lamarr,
      the brain behind frequency hopping.
      Her invention came from wanting to think of something to stop Hitler
      from taking over Europe during World War II.</p>
      <p>Frequency hopping is the basis for secure Wi-Fi, Bluetooth,
      cell phone, GPS and military technology –
      an invention that forms our whole society today!</p>
      <p>Hedy was a famous Hollywood actor and the inspiration behind the
      look of Snow-white and Catwoman, she never got any share of
      her 30 billion dollar invention.</p>
      <p>Just as Hedy, Hedylity Technology wants to
      make a tech imprint for a better world</p>
      </div>


      <div className="hedybox">
        <div id="hedylamarrpicture">
        <div className="margintop">
        <h1>“The brains of people are more
        interesting than the looks”</h1>
        <p>Hedy Lamarr (1914 – 2000)</p>
        </div>
      </div>

</div>
    </div>
      </div>
    )
  }
}

export default Hedylamarrintro
