import React from "react"
import "./style.css"
import Fotnot from "../fotnot"
import ScrollToTopOnMount from "../scrolltotoponmount"



class Academypage extends React.Component {
  render() {
    return (
      <div className="fadeinclass">
        <ScrollToTopOnMount/>



      <div className="mobile">
        <div className="pagemargin">

        <div className="whatwedoheadertext">
          <h1>HEDY LAMARR</h1>
        </div>
        <div className="hedypicturebox" id="hedylamarrpicture">
        <h1 id="hedylamarrquote">“The brains of people are more
        interesting than the looks”</h1>
        <h1 className="hedyquotesmalltext">Hedy Lamarr (1914 – 2000)</h1>
        </div>
        <div className="hedylamarrtext">
          <p>Hedylity Technology is named after Hedy Lamarr,
          the brain behind frequency hopping.
          Her invention came from wanting to think of something to stop Hitler
          from taking over Europe during World War II.</p>
        </div>
        <div className="abouttextthinleft">
          <p>Frequency hopping is the basis for secure Wi-Fi, Bluetooth,
          cell phone, GPS and military technology –
          an invention that forms our whole society today!</p>
        </div>
        <div className="abouttextthinleft">
          <p>Hedy was a famous Hollywood actor and the inspiration behind the
          look of Snow-white and Catwoman, she never got any share of
          her 30 billion dollar invention.</p>
        </div>

        <div className="hedypicturebox" id="hedyhandsvartbeige"/>
        <div className="whatwedosmalltext">
          <p>Just as Hedy, Hedylity Technology wants to
          make a tech imprint for a better world</p>
        </div>
        </div>
      </div>




        <div className="hedypagewebbox">
        <div className="whatwedoheadertext">
          <h1>HEDY LAMARR</h1>
        </div>
        <div className="hedylamarrtext">
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
        </div>
        <div className="hedypicturebox" id="hedylamarrpicture">
        <h1 id="hedylamarrquote">“The brains of people are more
        interesting than the looks”</h1>
        <h1 className="hedyquotesmalltext">Hedy Lamarr (1914 – 2000)</h1>
        </div>

        <div className="hedypicturebox" id="hedyhandsvartbeige"/>
        <div className="whatwedosmalltext">
          <p>Just as Hedy, Hedylity Technology wants to
          make a tech imprint for a better world</p>
        </div>
      </div>

      </div>
    )
  }
}

export default Academypage
