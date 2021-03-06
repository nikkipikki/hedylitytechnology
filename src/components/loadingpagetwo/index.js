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
import ScrollToTopOnMount from "../scrolltotoponmount"


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
      <ScrollToTopOnMount/>


      <div className="mobile">
      <div className="">

      <Header/>

      <div className="startdiv" id="colorwhite">


          <div className="startext" id="">
          <h4>Hedy focuses on making successful digitalization journeys
          with forefront technology, high-skilled people and an innovative environment.
          </h4>
        </div>

        </div>

              <div id="whatwedo">
              <div className="whatwedobox4">
                <h1 id="arcamajora"> WHAT WE DO </h1>


              <div className="threeareas2">

                <div className="onearea3">
                  <Link
                  style={{ textDecoration: "none" }}
                  to="/services">
                <div className="opacity0523">
                <p className="hedytexttilt2">Hedy</p>
                <h2 id="nomarginbottom">SERVICES</h2>
                <div id="futurathin">
                  <h5 className="title" id="margintoptrecommafem">
                    <div id="textalignleft">
                    We support start-ups, mid- sized and larger
                    companies in their ambition to build a profitable
                    and successful business.
                    </div>
                    </h5>
                    </div>
                  </div>
                  <div className="button4"><span><h5 id="nomargin">tell me more</h5></span></div>
                  </Link>

                  </div>






                <div className="onearea3">
                  <Link
                  style={{ textDecoration: "none", color: "black" }}
                  to="/academy">
                    <div className="opacity0523">
                    <p className="hedytexttilt2">Hedy</p>
                    <h2 id="nomarginbottom">ACADEMY</h2>
                    <div id="futurathin">
                    <h5 className="title" id="margintoptrecommafem">
                    <div id="textalignleft">
                    We provide high quality education to
                    close the gap between tech and business,
                    and build the skills we need to face a
                    future where technology will be the main actor.
                    </div>
                    </h5>
                    </div>
                  </div>
                  <div className="button4"><span><h5 id="nomargin">tell me more</h5></span></div>
                  </Link>

                  </div>



                <div className="onearea3">
                  <Link
                  style={{ textDecoration: "none", color: "black" }}
                  to="/innovationstudio">
                    <div className="opacity0523">
                    <p className="hedytexttilt3">Hedy</p>
                    <h2 id="nomarginbottom">INNOVATION STUDIO</h2>
                    <div id="futurathin">
                    <h5 className="title" id="margintopnollcommafem">
                    <div id="textalignleft">
                    We edge up our business model by investing
                    in tech innovations that make a difference
                    and have the ambition to solve at least one
                    of the 17 sustainability goals set by the world’s
                    leaders for 2030.
                    </div>
                    </h5>
                    </div>
                  </div>
                  <div className="button4"><span><h5 id="nomargin">tell me more</h5></span></div>
                  </Link>

                  </div>

              </div>
            </div>
            </div>



            <div className="introdiv2" id="">

            <div className="hedypicturebox2" id="hedyhandsvartbeige"/>
              <div className="missiondiv">
                <h4 id="colorwhite">
                  Our mission is to make a tech imprint for a better world.
                </h4>
              </div>
            </div>

              <div id="gettoknow">

                <div className="whatwedotext2" id="colorwhite">
                  <h4 id="">
                    <a>We are in it for the long-run, are you?</a>
                  </h4>
                </div>
              </div>

              <div className="startdiv" id="colorwhite">

                <div className="startext" id="">
                  <h4>We want sustainable, win-win-win-win business relations where the end-customer,
                  the client/partner, Hedy and the world wins on the tech and business solutions
                  we are developing.</h4>
                </div>
              </div>



            <div id="wearehedy">
            <Link
            style={{ textDecoration: "none", color: "black" }}
            to="/about">
                <div className="whatwedotext6" id="opacitydark">
                  <h4 id="colorwhite">We are Honest. We are Effectual. We are Devoted. We are Young & Witty. We are <mark className="pink">HEDY.</mark></h4>
                <div className="button"><span><h5 id="nomargin">want to know more?</h5></span></div>
                </div>
            </Link>
            </div>

            <div id="teampicture">
            <Link
            style={{ textDecoration: "none", color: "black" }}
            to="/team">
              <div className="">
                <div className="whatwedotext5" id="">
                  <div className="button4"><span><h5 id="nomargin">get to know our team</h5></span></div>
                </div>
                </div>
            </Link>
            </div>

            <div id="hedy">
            <Link
            style={{ textDecoration: "none", color: "black" }}
            to="/hedypage">
            <div className="introdiv4" id="opacitydark">
              <div className="whatwedotext3">
                  <h3 className="arcamajora"> HEDY LAMARR</h3>
                  <h4> Our muse & the woman behind the name</h4>
                  <div className="button4"><span><h5 id="nomargin">find out more</h5></span></div>
              </div>
            </div>
            </Link>

            </div>

      </div>
      </div>


      <div className="web">
      <div className="">
      <Header/>

          <div className="startdiv" id="colorwhite">

            <div className="circledivmedium">
            </div>

              <div className="startext" id="">
              <h3>Hedy focuses on making successful digitalization journeys
              with forefront technology, high-skilled people and an innovative environment.
              </h3>
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
                      <div className="button3 btn-3"><span><h6 id="nomargin">tell me more</h6></span></div>
                      </Link>

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
                      <div className="button3 btn-3"><span><h6 id="nomargin">tell me more</h6></span></div>
                      </Link>

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
                      <div className="button3 btn-3"><span><h6 id="nomargin">tell me more</h6></span></div>
                      </Link>

                      </div>

                  </div>
                </div>
                </div>



                <div className="introdiv2" id="">

                <div className="hedypicturebox2" id="hedyhandsvartbeige"/>
                  <div className="missiondiv">
                    <h2 id="colorwhite">
                      Our mission is to make a tech imprint for a better world.
                    </h2>
                  </div>
                </div>

                  <div id="gettoknow">

                    <div className="whatwedotext2" id="colorwhite">
                      <h2 id="">
                        <a>We are in it for the long-run, are you?</a>
                      </h2>
                    </div>
                  </div>

                  <div className="startdiv" id="colorwhite">

                    <div className="circledivmedium">
                    </div>

                      <div className="startext" id="">
                      <h3>
                      We want sustainable, win-win-win-win business relations where the end-customer,
                      the client/partner, Hedy and the world wins on the tech and business solutions
                      we are developing.</h3>
                    </div>

                    </div>



                <div id="wearehedy">
                <Link
                style={{ textDecoration: "none", color: "black" }}
                to="/about">
                    <div className="whatwedotext4" id="colorwhite">
                      <h2>We are Honest. We are Effectual. We are Devoted. We are Young & Witty. We are <mark className="pink">HEDY.</mark></h2>
                    <div className="button btn-3"><span><h5 id="nomargin">want to know more?</h5></span></div>
                    </div>
                </Link>
                </div>

                <div id="teampicture">
                <Link
                style={{ textDecoration: "none", color: "black" }}
                to="/team">
                  <div className="gradient">
                    <div className="whatwedotext5" id="">
                      <div id="backgroundcoloropacitypink" className="button2 btn-3"><span><h5 id="nomargin">get to know our team</h5></span></div>
                    </div>
                    </div>
                </Link>
                </div>

                <div id="hedy">
                <Link
                style={{ textDecoration: "none", color: "black" }}
                to="/hedypage">
                <div className="introdiv3" id="opacity">
                  <div className="whatwedotext3">
                      <h1 className="arcamajora"> HEDY LAMARR</h1>
                      <h2> Our muse & the woman behind the name</h2>
                      <div className="button3 btn-3"><span><h6 id="nomargin">find out more</h6></span></div>
                  </div>
                </div>
                </Link>
                </div>

      </div>
      </div>
      </div>
      </HashRouter>

    )
  }

}

export default Loadingpagetwo
