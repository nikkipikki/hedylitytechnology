import React from "react"
import { TweenLite, Linear } from "gsap"
import "./style.css"
import Contactbutton from "../contactbutton"
import ScrollToTopOnMount from "../scrolltotoponmount"

class Servicespage extends React.Component {

  render() {
    return (
      <div className="fadeinclass">
        <ScrollToTopOnMount/>
        <div className="mobile">

        <div className="pagemarginweb">

        <div className="headertextbox" id="colorwhite">
            <p className="hedytexttiltacademy">Hedy</p>
            <h1>SERVICES</h1>
          <div className="headertextsmall2">
            <p>Consultancy services within programming and management</p>
          </div>
        </div>

      <div className="justifycenter">

        <div className="academyteambox" id="backgroundcolordarkbluepink">
            <div className="academytextthin" id="colorpink">
              <div id="">
                <h5 id="nomarginbottom">
                We accelerate businesses with skills and solutions
                for a profitable digitalization journey.</h5>
                <h5>With forefront technology skills and strategic minds
                Hedy supports small, mid-sized and large companies in
                their aspiration to make a successful digitalization
                journey and build a profitable business.</h5>
              </div>
            </div>
          </div>

            <div className="academyteambox" id="backgroundcolordarkbluepink">

              <div className="academytextthin2" id="colorwhite">
                <h6 className="textboxheader" id="nomargintoplittlebottom">ROLES WE HAVE TAKEN</h6>
                <h6 id="">
                  Quality Assurance, Tech architect,
                  Agile coach, Tech educator, Brand developer,
                  Growth hacker,Backend developer,
                  Kotlin developer, Board member,
                  Java developer, Business advisor,
                  Android developer, Graphical designer,
                  Tech lead, Investment manager, Frontend developer,
                  UX/UI developer, CEO, Digital strategist,
                  Managing Director, Product owner,Project lead,
                  Concept developer, Sales leader and many more.
                </h6>
            </div>


            <div className="academytextthin2" id="colorwhite">
              <h6 className="textboxheader" id="">TYPE OF SERVICES</h6>
            <div id="marginbottom">
              <div className="bulletpoints">
              <ul>
                <li>Inhouse projects delivered by a Hedy team</li>
                <li>Consultancy service at client, where Hedy talent leads the work or is part of a team</li>
                <li>Take the role as tech and/or business partner</li>
              </ul>
              </div>
            </div>
            </div>

        </div>



      </div>
      </div>
      <Contactbutton/>

      </div>




      <div className="web">
      <div>


        <div id="headerpic2">
        <div id="">


        <div className="areasheader">
        <div className="pagemarginweb">

        <div className="headertextbox" id="colorwhite">
        <p className="hedytexttiltacademy">Hedy</p>

          <h1>SERVICES</h1>
        <div className="headertextsmall2">
        <p>Consultancy services within programming and management</p>
        </div>
        </div>


        <div className="justifycenter">

        <div className="academyteambox" id="backgroundcolordarkbluepink">
            <div className="academytextthin" id="colorpink">
            <div id="paddingleftright">
              <h5 id="nomarginbottom">
              We accelerate businesses with skills and solutions
              for a profitable digitalization journey.</h5>
              <h5>With forefront technology skills and strategic minds
              Hedy supports small, mid-sized and large companies in
              their aspiration to make a successful digitalization
              journey and build a profitable business.</h5>
            </div>
            </div>

          </div>

          <div className="academyteambox" id="backgroundcolordarkbluepink">

          <div className="academytextthin2" id="colorwhite">
            <h6 className="textboxheader" id="nomargintoplittlebottom">ROLES WE HAVE TAKEN</h6>
            <h6 id="nomargin"> Quality Assurance, Tech architect,
            Agile coach, Tech educator, Brand developer,
            Growth hacker,Backend developer,
            Kotlin developer, Board member,
            Java developer, Business advisor,
            Android developer, Graphical designer,
            Tech lead, Investment manager, Frontend developer,
            UX/UI developer, CEO, Digital strategist,
            Managing Director, Product owner,Project lead,
            Concept developer, Sales leader and many more.
            </h6>
        </div>


        <div className="academytextthin2" id="colorwhite">
          <h6 className="textboxheader" id="nomargintoplittlebottom">TYPE OF SERVICES</h6>
        <div>
        <div className="bulletpoints">
        <ul>
          <li>Inhouse projects delivered by a Hedy team</li>
          <li>Consultancy service at client, where Hedy talent leads the work or is part of a team</li>
          <li>Take the role as tech and/or business partner</li>
        </ul>
      </div>
      </div>
      </div>

      </div>


        </div>


      </div>
      </div>


      <Contactbutton/>
      </div>

      </div>

    </div>
      </div>
    </div>
    )
  }
}

export default Servicespage
