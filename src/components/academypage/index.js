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
  constructor(props) {
    super(props)
    this.state = {
    }
    this.updateLine();
  }
  //updateLine();
  updateLine = () => {
      let data = this.generatePoints();
      let color = '#F1888A'
      TweenLite.ticker.fps(10);
      TweenLite.to(['.line', '.line-glow'], 1.5, {
          attr: {'points': data, 'stroke': color },
          ease: Linear.easeNone,
          onComplete: this.updateLine
      });
  }

  generatePoints = () => {
      let freq = Math.random()*0.03,
          svgSize = {w: 800, h: 300},
          amplitude = Math.random() * 0.25 * svgSize.h,
          segments = [];

      let p = { x: 0, y: 0 };
      for (let i = 0; i < svgSize.w; i++) {
          p.x = i;
          p.y = amplitude * Math.sin(p.x * freq) + svgSize.h / 2;
          segments.push(p.x + ',' + p.y);
      }
      return segments.join(' ');
  }

  render() {
    return (
      <div className="fadeinclass">
        <ScrollToTopOnMount/>

      <div className="mobile">
        <div className="pagemargin">
        <div className="whatwedoheadertext">
          <h1>ACADEMY</h1>
        </div>
        <div className="whatwedosmalltextcenter">
          <p>We close the gap between tech and business</p>
        </div>
        <div className="abouttextthinleft">
          <p>With focus on modern leadership and technology,
          Hedy builds and increases the competencies of people and
          organizations to answer up to the requirements of the future.</p>
        </div>
        <div className="whatwedoheadertext">
          <h1>WHAT WE DO</h1>
        </div>
        <div className="whatwedosmalltext">
          <p>We provide crash courses, intensive education
          programs and seminars online as well as classroom based</p>
        </div>
        <div className="whatwedoheadertext">
          <h1>TYPE OF COURSES</h1>
        </div>
        <div className="abouttextthinleft">
          <ul>
            <li>Crash courses that will help you reach new levels of business and/or tech excellence</li>
            <li>Intensive courses for programming that will introduce talents into the Tech industry</li>
            <li>Specific courses that will take your business and your competence to the next level</li>
            <li>Dedicated programs for continuous learning and/or targeted actions</li>
          </ul>
        </div>
        <div className="whatwedoheadertext">
          <h1>SAMPLE COURSES</h1>
        </div>
        <div className="abouttextthinleft">
          <ul>
            <li>Succeed with Kotlin</li>
            <li>Android development for beginners and advanced coders</li>
            <li>Growth hacking</li>
            <li>Take digitalization and tech trends into the board room</li>
            <li>Learn to code</li>
          </ul>
        </div>
        <Link
          style={{ textDecoration: "none", color: "black" }}
          to="/kotlin">
        <div className="whatwedoheadertext">
          <h1>CURRENT COURSES</h1>
        </div>
        <div className="whatwedosmalltextcenter">
          <p>Succeed with Kotlin</p>
        </div>
          <Tellmemorebutton/>
          </Link>
        <div className="whatwedoheadertext">
          <h1>TARGET GROUP</h1>
        </div>
        <div className="whatwedosmalltext">
          <p>Driven fast learners, developers, board members, management team members,
          people with a passion for tech who want to change industry, entrepreneurs, among others...</p>
        </div>
        </div>
      </div>



      <div className="web">
      <div>

      <div id="academy3">
      <div id="opacitydark">

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 300">
        <defs>
          <filter id="glow-filter">
              <feGaussianBlur in="SourceGraphic" stdDeviation="4" />
          </filter>
        </defs>
        <polyline className="line"></polyline>
        <polyline className="line-glow"></polyline>
      </svg>

        <div className="areasheader">

        <div className="onheaderbox" id="colorwhite">
        <div id="arcamajora">
          <h1 id="nomargin">ACADEMY</h1>
          </div>
          <div id="futuramediumitalic">
            <h6 id="nomargin">We close the gap between tech and business</h6>
          </div>
          </div>
        </div>


        <Link
          style={{ textDecoration: "none", color: "black" }}
          to="/kotlin">
        <div className="displayflexwrap">
        <div className="textbox2" id="backgroundcolorpinkblack">
        <div id="arcamajora">
        <h6 id="nomargin">NEXT COURSE</h6>
        <div id="futurathin">
          <div id="backgroundcolorpinkwhite">
          <h5 id="margintop0comma8vw">Succeed with Kotlin
          </h5>
          <h5 id="margintop0comma8vw">Dates: 24-25 April 2019</h5>
          <h5 id="margintop0comma8vw">Time: 09.00–16.30</h5>
          <h5>Location: Central Stockholm</h5>
          <div>
            <Tellmemorebutton/>
          </div>
        </div>
        </div>
        </div>
        </div>
        </div>
          </Link>

          <div className="justifykotlinlargediv">

          <div className="justifykotlinlargediv2">
          <div className="justifyrightservices" id="futuramediumitalic">
          <div className="textboxservices2" id="backgroundcolordarkbluewhite">
            <h3 id="nomargin">With focus on modern leadership and technology,
            Hedy builds and increases the competencies of people and
            organizations to answer up to the requirements of the future.</h3>
          </div>
          </div>

          <div className="justifyrightkotlin">
          <div className="textboxservices2" id="backgroundcolordarkbluepink">
            <h5 id="nomargin">We provide crash courses, intensive education
            programs and seminars online as well as classroom based.</h5>
          </div>
          </div>
          </div>



          <div className="coursesbox">
          <div className="whatwedoheadertext" id="colorwhite">
          <div id="arcamajora">
            <h4 id="nomargin">CURRENT COURSES</h4>
          </div>
          </div>

          <div className="coursesarea">

          <div className="picturedivcourse">
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
            </div>


                <div className="justifyrightkotlin" id="backgroundcolordarkbluewhite">
                <div className="textboxservices">
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

              <div className="textboxservices" id="backgroundcolorpinkblack">
                <h6 className="textboxheader" id="nomargintoplittlebottom">TARGET GROUP</h6>
                <div>
                <h6 id="nomargin"> Driven fast learners, developers, board members, management team members,
                     people with a passion for tech who want to change industry, entrepreneurs, among others...
                </h6>
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


    )
  }
}

export default Academypage
