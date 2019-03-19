import React from "react"
import { HashRouter, Route, Link } from "react-router-dom"
import "./style.css"
import Header from "../header"
import Whatwedo from "../whatwedo"
import Wearehedytext from "../wearehedytext"
import Hamburgermenu from "../hamburgermenu"
import Fotnot from "../fotnot"
import Teamintro from "../teamintro"
import Hedylamarrintro from "../hedylamarrintro"



class Loadingpagetwo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isHidden: true,
      isHiddenTwo: true
    }
  }

  myFunction = () => {
    this.setState({
      isHidden: !this.state.isHidden
    })
  }

  myFunctionTwo = () => {
    this.setState({
      isHiddenTwo: !this.state.isHiddenTwo
    })
  }



  render() {
    return (
      <HashRouter>

      <div>
      <div className="headerpic">
      <Header/>



            <div>
              <div className="whatwedotext2">
              <p>Hedy focuses on making successful digitalization journeys
              with forefront technology, high-skilled people and an innovative environment.
              We want sustainable, win-win-win-win business relations where the end-customer,
              the client/partner, Hedy and the world wins on the tech and business solutions
              we are developing.</p>
            </div>
          </div>

                  <div className="whatwedobox2">
                    <h1 className="arcamajora3"> WHAT WE DO </h1>


                  <div className="threeareas2">

                    <div className="onearea2">
                      <Link
                      style={{ textDecoration: "none" }}
                      to="/services">
                    <div className="opacity052">
                    <p className="hedytexttilt2">Hedy</p>
                    <h3>SERVICES</h3>
                      <h6 className="title" id="margintoptrecommafem">
                        <a href="#">
                        We support start-ups, mid- sized and larger
                        companies in their ambition to build a profitable
                        and successful business.
                        </a>
                        </h6>
                    </div>
                      </Link>
                      </div>





                    <div className="onearea2">
                      <Link
                      style={{ textDecoration: "none", color: "black" }}
                      to="/academy">
                        <div className="opacity052">
                        <p className="hedytexttilt2">Hedy</p>
                        <h3>ACADEMY</h3>
                        <h6 className="title" id="margintoptrecommafem">
                        <a href="#">
                        We provide high quality education to
                        close the gap between tech and business,
                        and build the skills we need to face a
                        future where technology will be the main actor.
                        </a>
                        </h6>
                      </div>
                      </Link>
                      </div>



                    <div className="onearea2">
                      <Link
                      style={{ textDecoration: "none", color: "black" }}
                      to="/innovationstudio">
                        <div className="opacity052">
                        <p className="hedytexttilt2">Hedy</p>
                        <h3 id="nomarginbottom">INNOVATION STUDIO</h3>
                        <h6 className="title" id="margintopnollcommafem">
                        <a href="#">
                        We edge up our business model by investing
                        in tech innovations that make a difference
                        and have the ambition to solve at least one
                        of the 17 sustainability goals set by the world’s
                        leaders for 2030.
                        </a>
                        </h6>
                      </div>
                      </Link>
                      </div>

                  </div>
                </div>


                <div className="introdiv2">

                  <div className="missiondiv">
                    <h4 className="title2" id="arcamajora">
                      <a id="colorpink" href="#">Our mission is to make a tech imprint for a better world.</a>
                    </h4>
                  </div>

                  <div className="hedypicturebox2" id="hedyhandsvartbeige"/>

                  <div className="missiondiv">
                    <h4 className="title2" id="arcamajora">
                      <a id="colorpink" href="#">We are in it for the long-run, are you?</a>
                    </h4>
                  </div>

                </div>



                <div>
                    <div className="whatwedotext2">
                      <h1 id="colorpink">We are Honest. We are Effectual.
                      We are Devoted. We are Young & Witty. We are HEDY.</h1>
                    </div>
                </div>

                <div>
                    <div className="whatwedotext2" onClick={this.myFunction}>
                    {!this.state.isHidden && <Teamintro />}
                      {this.state.isHidden && <h1>GET TO KNOW OUR TEAM</h1>}
                    </div>

                </div>

                <div className="introdiv3">
                    <div className="whatwedotext3">
                    <h1 className="arcamajora"> HEDY LAMARR</h1>
                    <h2> Our muse & the woman behind the name</h2>

                    <h5>Hedylity Technology is named after Hedy Lamarr,
                    the brain behind frequency hopping.
                    Her invention came from wanting to think of something to stop Hitler
                    from taking over Europe during World War II.</h5>
                    <h5>Frequency hopping is the basis for secure Wi-Fi, Bluetooth,
                    cell phone, GPS and military technology –
                    an invention that forms our whole society today!</h5>
                    <h5>Hedy was a famous Hollywood actor and the inspiration behind the
                    look of Snow-white and Catwoman, she never got any share of
                    her 30 billion dollar invention.</h5>
                    <h5>Just as Hedy, Hedylity Technology wants to
                    make a tech imprint for a better world</h5>
                    </div>



                </div>
















      </div>
      </div>
      </HashRouter>

    )
  }

}

export default Loadingpagetwo
