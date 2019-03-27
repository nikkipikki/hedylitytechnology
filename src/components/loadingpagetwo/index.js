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
import Loadingpage from "../loadingpage"




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

      <div className="mobile">
      <div className="">
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
                      <h3 id="colorpink">We are Honest. We are Effectual.
                      We are Devoted. We are Young & Witty. We are HEDY.</h3>
                    </div>
                </div>

                <div>
                    <div className="whatwedotext2" onClick={this.myFunction}>
                    {!this.state.isHidden && <Teamintro />}
                      {this.state.isHidden && <h3>GET TO KNOW OUR TEAM</h3>}
                    </div>

                </div>

                <div className="introdiv3">
                    <div className="whatwedotext3">
                    <h3 className="arcamajora"> HEDY LAMARR</h3>
                    <h5> Our muse & the woman behind the name</h5>

                    <h6>Hedylity Technology is named after Hedy Lamarr,
                    the brain behind frequency hopping.
                    Her invention came from wanting to think of something to stop Hitler
                    from taking over Europe during World War II.</h6>
                    <h6>Frequency hopping is the basis for secure Wi-Fi, Bluetooth,
                    cell phone, GPS and military technology –
                    an invention that forms our whole society today!</h6>
                    <h6>Hedy was a famous Hollywood actor and the inspiration behind the
                    look of Snow-white and Catwoman, she never got any share of
                    her 30 billion dollar invention.</h6>
                    <h6>Just as Hedy, Hedylity Technology wants to
                    make a tech imprint for a better world</h6>
                    </div>

                </div>
      </div>
      </div>


      <div className="web">
      <div className="">
      <Header/>

          <div className="startdiv" id="">

            <div className="circledivmedium">
            </div>

              <div className="startext" id="">
              <h3>Hedy focuses on making successful digitalization journeys
              with forefront technology, high-skilled people and an innovative environment.
              </h3>
              <h3>
              We want sustainable, win-win-win-win business relations where the end-customer,
              the client/partner, Hedy and the world wins on the tech and business solutions
              we are developing.</h3>
            </div>

            </div>

                  <div id="whatwedo">
                  <div className="whatwedobox2">
                    <h1 id="arcamajora"> WHAT WE DO </h1>


                  <div className="threeareas2">

                    <div className="onearea2">
                      <Link
                      style={{ textDecoration: "none" }}
                      to="/services">
                    <div className="opacity052">
                    <p className="hedytexttilt2">Hedy</p>
                    <h3>SERVICES</h3>
                    <div id="futurathin">
                      <h5 className="title" id="margintoptrecommafem">
                        <a href="#">
                        We support start-ups, mid- sized and larger
                        companies in their ambition to build a profitable
                        and successful business.
                        </a>
                        </h5>
                        </div>
                      </div>
                      </Link>
                      <div className="button3 btn-3"><span><h6 id="nomargin">tell me more</h6></span></div>
                      </div>






                    <div className="onearea2">
                      <Link
                      style={{ textDecoration: "none", color: "black" }}
                      to="/academy">
                        <div className="opacity052">
                        <p className="hedytexttilt2">Hedy</p>
                        <h3>ACADEMY</h3>
                        <div id="futurathin">
                        <h5 className="title" id="margintoptrecommafem">
                        <a href="#">
                        We provide high quality education to
                        close the gap between tech and business,
                        and build the skills we need to face a
                        future where technology will be the main actor.
                        </a>
                        </h5>
                        </div>
                      </div>
                      </Link>
                      <div className="button3 btn-3"><span><h6 id="nomargin">tell me more</h6></span></div>
                      </div>



                    <div className="onearea2">
                      <Link
                      style={{ textDecoration: "none", color: "black" }}
                      to="/innovationstudio">
                        <div className="opacity052">
                        <p className="hedytexttilt2">Hedy</p>
                        <h3 id="nomarginbottom">INNOVATION STUDIO</h3>
                        <div id="futurathin">
                        <h5 className="title" id="margintopnollcommafem">
                        <a href="#">
                        We edge up our business model by investing
                        in tech innovations that make a difference
                        and have the ambition to solve at least one
                        of the 17 sustainability goals set by the world’s
                        leaders for 2030.
                        </a>
                        </h5>
                        </div>
                      </div>
                      </Link>
                      <div className="button3 btn-3"><span><h6 id="nomargin">tell me more</h6></span></div>
                      </div>

                  </div>
                </div>
                </div>



                <div className="introdiv2" id="backgroundcolorwhiteblack">

                <div className="hedypicturebox2" id="hedyhandsvartbeige"/>
                  <div className="missiondiv">
                    <h2 id="">
                      Our mission is to make a tech imprint for a better world.
                    </h2>
                  </div>
                </div>

                  <div id="gettoknow">

                    <div className="whatwedotext2" id="colorwhite">
                    <div className="circledivsmall">
                    </div>
                      <h1 id="futurathin">
                        <a>We are in it for the long-run, are you?</a>
                      </h1>
                    </div>
                  </div>

                  <div id="teampicture">
                    <div className="gradient">
                      <div className="whatwedotext5" id="arcamajora">
                        <div className="button2 btn-3"><span><h4 id="nomargin">GET TO KNOW OUR TEAM</h4></span></div>
                      </div>
                      </div>
                  </div>

                <div id="wearehedy">
                    <div className="whatwedotext4" id="colorwhite">
                      <h2>We are Honest. We are Effectual. We are Devoted. We are Young & Witty. We are <mark className="pink">HEDY.</mark></h2>
                    <div className="button btn-3"><span><h6 id="nomargin">get to know us</h6></span></div>
                    </div>
                </div>


                <div className="introdiv3">

                  <div className="whatwedotext3">
                    <h1 className="arcamajora"> HEDY LAMARR</h1>
                    <h2> Our muse & the woman behind the name</h2>
                  </div>

                  <div className="whatwedotext3" id="hedylamarrpicture">
                  </div>

                  <div className="whatwedotext3">
                    <h6>Hedylity Technology is named after Hedy Lamarr,
                    the brain behind frequency hopping.
                    Her invention came from wanting to think of something to stop Hitler
                    from taking over Europe during World War II.</h6>
                    <h6>Frequency hopping is the basis for secure Wi-Fi, Bluetooth,
                    cell phone, GPS and military technology –
                    an invention that forms our whole society today!</h6>
                  </div>

                  <div className="whatwedotext3">
                    <h6>Hedy was a famous Hollywood actor and the inspiration behind the
                    look of Snow-white and Catwoman, she never got any share of
                    her 30 billion dollar invention.</h6>
                    <h6>Just as Hedy, Hedylity Technology wants to
                    make a tech imprint for a better world</h6>
                  </div>

                </div>

      </div>
      </div>
      </div>
      </HashRouter>

    )
  }

}

export default Loadingpagetwo
