import React from "react"
import { Link } from "react-router-dom"
import "./style.css"
import Contactbutton from "../contactbutton"
import ScrollToTopOnMount from "../scrolltotoponmount"
import Tellmemorebutton from "../tellmemorebutton"
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

      <div id="academy">

        <div className="areasheader">

          <h1>ACADEMY</h1>
          <div className="subheader">
            <p>We close the gap between tech and business</p>
          </div>
        </div>
        </div>

        <div className="displayflexwrap">
        <div className="textbox2">
        <h1>NEXT COURSE</h1>
          <p>Succeed with Kotlin</p>
        </div>
        </div>

        <div className="justifyright">
        <div className="textbox">
          <p>With focus on modern leadership and technology,
          Hedy builds and increases the competencies of people and
          organizations to answer up to the requirements of the future.</p>
          <p>We provide crash courses, intensive education
          programs and seminars online as well as classroom based</p>
        </div>
        </div>


        <div className="areaspresentingdiv">
          <div className="typediv2">
          <div className="typetext">
          <h1>TYPE OF COURSES</h1>
        </div>
        <div className="typethintext">
          <ul>
            <li>Crash courses that will help you reach new levels of business and/or tech excellence</li>
            <li>Intensive courses for programming that will introduce talents into the Tech industry</li>
            <li>Specific courses that will take your business and your competence to the next level</li>
            <li>Dedicated programs for continuous learning and/or targeted actions</li>
          </ul>
        </div>
        </div>
      


          <div className="whatwedoheadertext">
            <h1>CURRENT COURSES</h1>
          </div>

          <div className="coursesarea">

          <Link
            style={{ textDecoration: "none", color: "black" }}
            to="/kotlin">

          <div className="coursesdiv">
          <div id="kretskort">
            <div className="coursesbox">
                <div>
                  <p>Succeed with Kotlin</p>
                </div>
                  <Tellmemorebutton/>
              </div>
            </div>
            </div>


        </Link>

        <div className="coursesdiv">
        <div id="kretskort">
          <div className="coursesbox">
              <div>
                <p>Android development for beginners and advanced coders</p>
              </div>
                <Tellmemorebutton/>
            </div>
          </div>
          </div>

          <div className="coursesdiv">
          <div id="kretskort">
            <div className="coursesbox">
                <div>
                  <p>Growth hacking</p>
                </div>
                  <Tellmemorebutton/>
              </div>
            </div>
            </div>

            <div className="coursesdiv">
            <div id="kretskort">
              <div className="coursesbox">
                  <div>
                    <p>Take digitalization and tech trends into the board room</p>
                  </div>
                    <Tellmemorebutton/>
                </div>
              </div>
              </div>

              <div className="coursesdiv">
              <div id="kretskort">
                <div className="coursesbox">
                    <div>
                      <p>Learn to code</p>
                    </div>
                      <Tellmemorebutton/>
                  </div>
                </div>
                </div>

</div>

        <div className="whatwedoheadertext">
          <h1>TARGET GROUP</h1>
        </div>
        <div className="subheader">
          <p>Driven fast learners, developers, board members, management team members,
          people with a passion for tech who want to change industry, entrepreneurs, among others...</p>
        </div>
        </div>
        </div>
</div>
        <Contactbutton/>
      </div>


    )
  }
}

export default Academypage
