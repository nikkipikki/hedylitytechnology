import React from "react"
import { Link } from "react-router-dom"
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

        <div className="areasheader">

        <div className="onheaderbox" id="backgroundcolorblack">
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
          <h5 id="margintop0comma8vw">Succeed with Kotlin</h5>
        </div>
        </div>
        </div>
        </div>
        </div>
          </Link>

          <div className="justifykotlinlargediv">


          <div className="justifyrightservices">
          <div className="textboxservices2" id="backgroundcolorblack">
            <h5 id="nomargin">With focus on modern leadership and technology,
            Hedy builds and increases the competencies of people and
            organizations to answer up to the requirements of the future.</h5>
            <h5>We provide crash courses, intensive education
            programs and seminars online as well as classroom based.</h5>
          </div>
          </div>


          <div className="justifyrightkotlin">
          <div className="textboxservices">
            <h4 className="textboxheader" id="nomargin">TYPE OF COURSES</h4>
            <div className="bulletpoints">
            <ul>
              <li>Crash courses that will help you reach new levels of business and/or tech excellence</li>
              <li>Intensive courses for programming that will introduce talents into the Tech industry</li>
              <li>Specific courses that will take your business and your competence to the next level</li>
              <li>Dedicated programs for continuous learning and/or targeted actions</li>
            </ul>
          </div>
          </div>
          </div>






          <div className="coursesbox" id="backgroundcolorblack">
          <div className="whatwedoheadertext">
            <h1>CURRENT COURSES</h1>
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
</div>

      <div className="div">
        <div className="">
          <h1>TARGET GROUP</h1>
        </div>
        <div className="divsmalltext">
          <p>Driven fast learners, developers, board members, management team members,
          people with a passion for tech who want to change industry, entrepreneurs, among others...</p>
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
