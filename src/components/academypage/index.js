import React from "react"
import { Link } from "react-router-dom"
import { TweenLite, Linear } from "gsap"

import "./style.css"
import Contactbutton from "../contactbutton"
import ScrollToTopOnMount from "../scrolltotoponmount"
import Tellmemorebutton from "../tellmemorebutton"
import Comingsoon from "../comingsoon"
import Kotlin from "../kotlin"


class Academypage extends React.Component {
  render() {
    return (


      <div className="fadeinclass">
        <ScrollToTopOnMount/>

      <div className="mobile">
        <div className="">

        <div className="areasheader">
          <div className="headertextbox">
            <h1>ACADEMY</h1>
          <div className="headertextsmall">
            <p>We close the gap between tech and business</p>
            <p>With focus on modern leadership and technology,
            Hedy builds and increases the competencies of people and
            organizations to answer up to the requirements of the future.</p>
            <p>We provide crash courses, intensive education
            programs and seminars online as well as classroom based</p>
          </div>
          </div>
        </div>

        <Link
          style={{ textDecoration: "none", color: "black" }}
          to="/kotlin">
        <div className="displayflexwrap">
        <div className="textbox2" id="colorwhite">
        <div id="arcamajora" >
        <h6 id="nomargin">NEXT COURSE</h6>
        <div id="futurathin">
          <div id="colorpink">
          <h5 id="margintop0comma8vw">Succeed with Kotlin
          </h5>
          <h5 id="margintop0comma8vw">Dates: 24-25 April 2019</h5>
          <h5 id="margintop0comma8vw">Time: 09.00–16.30</h5>
          <h6 id="margintop0comma8vw">Location: Central Stockholm</h6>
          <div>
            <Tellmemorebutton/>
          </div>
        </div>
        </div>
        </div>
        </div>
        </div>
          </Link>

        <div className="teamboxweb">

        <h1 id="colorwhite">CURRENT COURSES</h1>


        <div className="picturedivcourse" id="growdiv">
        <div id="kotlin2">
        <div className="coursesdiv">
          <div className="margin">
                <p>Succeed with Kotlin</p>
                </div>
                </div>
              <Link
                style={{ textDecoration: "none", color: "black" }}
                to="/kotlin">
                <div>
                  <Tellmemorebutton/>
                </div>
                </Link>
          </div>
          </div>

          <div className="picturedivcourse">
            <div id="academy">
            <div className="coursesdiv">
            <div className="margin2">
              <p>Android development for beginners and advanced coders</p>
              </div>
              </div>
            <div>
              <Comingsoon/>
            </div>
            </div>
        </div>

        <div className="picturedivcourse">
          <div id="academy">
        <div className="coursesdiv">
        <div className="margin">
                <p>Growth hacking</p>
                </div>
                </div>
              <div>
              <Comingsoon/>
              </div>
            </div>
          </div>

          <div className="picturedivcourse">
            <div id="academy">
          <div className="coursesdiv">
          <div className="margin2">
                  <p>Take digitalization and tech trends into the board room</p>
                  </div>
                  </div>
                <div>
                <Comingsoon/>
                </div>
              </div>
            </div>



          <div className="picturedivcourse">
            <div id="academy">
              <div className="coursesdiv">
              <div className="margin">
                    <p>Learn to code</p>
                    </div>
                    </div>
                  <div>
                  <Comingsoon/>
                </div>
                </div>
              </div>
        </div>

        <div className="academyteambox" id="backgroundcolordarkbluepink">

        <div className="academytextthin2" id="colorwhite">
          <h6 className="textboxheader" id="">TYPE OF COURSES</h6>
        <div className="bulletpoints">
        <ul>
          <li>Crash courses that will help you reach new levels of business and/or tech excellence</li>
          <li>Intensive courses for programming that will introduce talents into the Tech industry</li>
          <li>Specific courses that will take your business and your competence to the next level</li>
          <li>Dedicated programs for continuous learning and/or targeted actions</li>
        </ul>
      </div>
      </div>


      <div className="academytextthin2" id="colorwhite">
        <h6 className="textboxheader" id="">TARGET GROUP</h6>
      <div>
      <h6 id="nomargin"> Driven fast learners, developers, board members, management team members,
           people with a passion for tech who want to change industry, entrepreneurs, among others...
      </h6>
      </div>
      </div>
    </div>

        </div>
      </div>





      <div className="web">
      <div>

      <div id="academy3">
      <div id="opacitydark">

      <div className="areasheader">
      <div className="pagemarginweb">


        <div className="headertextbox">
        <p className="hedytexttiltacademy">Hedy</p>

          <h1>ACADEMY</h1>
        <div className="headertextsmall2">
          <p>We close the gap between tech and business</p>
        </div>
        </div>
      </div>

      <Link
        style={{ textDecoration: "none", color: "black" }}
        to="/kotlin">
      <div className="displayflexwrap">
      <div className="textbox2" id="backgroundcolordarkbluepink">
      <div id="arcamajora">
      <h6 id="nomargin">NEXT COURSE</h6>
      <div id="futurathin">
        <div id="backgroundcolordarkbluepink">
        <h5 id="margintop0comma8vw">Succeed with Kotlin
        </h5>
        <h5 id="margintop0comma8vw">Dates: 24-25 April 2019</h5>
        <h5 id="margintop0comma8vw">Time: 09.00–16.30</h5>
        <h6>Location: Central Stockholm</h6>
        <div>
          <Tellmemorebutton/>
        </div>
      </div>
      </div>
      </div>
      </div>
      </div>
        </Link>

      <div className="justifycenter">

      <div className="academyteambox" id="backgroundcolordarkbluepink">
        <div className="academytextthin" id="colorwhite">
          <h5 id="nomarginbottom">With focus on modern leadership and technology,
          Hedy builds and increases the competencies of people and
          organizations to answer up to the requirements of the future.</h5>
          <h5 id="nomargintop">We provide crash courses, intensive education
          programs and seminars online as well as classroom based.</h5>
        </div>
        <div id="colorpink">
          <h1 id="nomargin">CURRENT COURSES</h1>
        </div>
        </div>

      <div className="teamboxweb">

      <div className="picturedivcourse" id="growdiv">
      <div id="kotlin2">
      <div className="coursesdiv">
        <div className="margin">
              <p>Succeed with Kotlin</p>
              </div>
              </div>
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to="/kotlin">
              <div>
                <Tellmemorebutton/>
              </div>
              </Link>
        </div>
        </div>

        <div className="picturedivcourse">
          <div id="academy">
          <div className="coursesdiv">
          <div className="margin2">
            <p>Android development for beginners and advanced coders</p>
            </div>
            </div>
          <div>
            <Comingsoon/>
          </div>
          </div>
      </div>

      <div className="picturedivcourse">
        <div id="academy">
      <div className="coursesdiv">
      <div className="margin">
              <p>Growth hacking</p>
              </div>
              </div>
            <div>
            <Comingsoon/>
            </div>
          </div>
        </div>

        <div className="picturedivcourse">
          <div id="academy">
        <div className="coursesdiv">
        <div className="margin2">
                <p>Take digitalization and tech trends into the board room</p>
                </div>
                </div>
              <div>
              <Comingsoon/>
              </div>
            </div>
          </div>



        <div className="picturedivcourse">
          <div id="academy">
            <div className="coursesdiv">
            <div className="margin">
                  <p>Learn to code</p>
                  </div>
                  </div>
                <div>
                <Comingsoon/>
              </div>
              </div>
            </div>

            </div>


                  <div className="academyteambox" id="backgroundcolordarkbluepink">

                  <div className="academytextthin2" id="colorwhite">
                    <h6 className="textboxheader" id="nomargin">TYPE OF COURSES</h6>
                  <div className="bulletpoints">
                  <ul>
                    <li>Crash courses that will help you reach new levels of business and/or tech excellence</li>
                    <li>Intensive courses for programming that will introduce talents into the Tech industry</li>
                    <li>Specific courses that will take your business and your competence to the next level</li>
                    <li>Dedicated programs for continuous learning and/or targeted actions</li>
                  </ul>
                </div>
                </div>


                <div className="academytextthin2" id="colorwhite">
                  <h6 className="textboxheader" id="nomargintoplittlebottom">TARGET GROUP</h6>
                <div>
                <h6 id="nomargin"> Driven fast learners, developers, board members, management team members,
                     people with a passion for tech who want to change industry, entrepreneurs, among others...
                </h6>
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
      </div>


    )
  }
}

export default Academypage
