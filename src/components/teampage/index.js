import React from "react"
import "./style.css"
import Contactbutton from "../contactbutton"
import Getintouch from "../getintouch"
import Bob from "../bob"
import Emelie from "../emelie"
import Hanna from "../hanna"
import Nicole from "../nicole"
import Oden from "../oden"
import Sarah from "../sarah"

import ScrollToTopOnMount from "../scrolltotoponmount"


class Teampage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isHiddenFirst: true,
      isHiddenSecond: true,
      isHiddenThird: true,
      isHiddenFourth: true,
      isHiddenFifth: true,
      isHiddenSixth: true,
    }
  }

  myFunction1 = () => {
    this.setState({
      isHiddenFirst: !this.state.isHiddenFirst})
    }

  myFunction2 = () => {
    this.setState({
      isHiddenSecond: !this.state.isHiddenSecond})
    }

  myFunction3 = () => {
    this.setState({
      isHiddenThird: !this.state.isHiddenThird})
    }

  myFunction4 = () => {
    this.setState({
      isHiddenFourth: !this.state.isHiddenFourth})
    }

  myFunction5 = () => {
    this.setState({
      isHiddenFifth: !this.state.isHiddenFifth})
    }

  myFunction6 = () => {
    this.setState({
      isHiddenSixth: !this.state.isHiddenSixth})
    }

  render() {
    return (
      <div className="fadeinclass">
        <ScrollToTopOnMount/>
          <div className="headerpic2">

      <div className="mobile">
      <div>

      <div className="areasheader">
        <div className="headertextbox">
          <h1>TEAM PHILOSOPHY</h1>
        <div className="headertextsmall">
          <p>At Hedy we put continuous learning in the
          forefront and share our knowledge to build
          a strong team and be able to take on complex
          challenges and create the future.
          We are gathering talents that are brilliant at what they do,
          role models within their area of expertise and who are
          driven by constantly learning.</p>
        </div>
        </div>
      </div>

    <div className="teamboxweb">

    <div className="teammemberdiv">
      <div className="pictureboxweb" id="bob" onClick={this.myFunction1}>
        {this.state.isHiddenFirst && <h5 className="headernametext" id="arcamajora">BOB DAHLBERG</h5>}
        {!this.state.isHiddenFirst && <Bob />}
      </div>
    </div>

    <div className="teammemberdiv">
      <div className="pictureboxweb" id="emelie" onClick={this.myFunction2}>
        {this.state.isHiddenSecond && <h5 className="headernametext" id="arcamajora">EMELIE MEURK DEMERUD</h5>}
        {!this.state.isHiddenSecond && <Emelie />}
      </div>
    </div>

    <div className="teammemberdiv">
      <div className="pictureboxweb" id="hanna" onClick={this.myFunction3}>
        {this.state.isHiddenThird && <h5 className="headernametext" id="arcamajora">HANNA MOISANDER</h5>}
        {!this.state.isHiddenThird && <Hanna />}
      </div>
    </div>

    <div className="teammemberdiv">
      <div className="pictureboxweb" id="nicole" onClick={this.myFunction4}>
        {this.state.isHiddenFourth && <h5 className="headernametext" id="arcamajora">NICOLE PEHAR</h5>}
        {!this.state.isHiddenFourth && <Nicole />}
      </div>
    </div>

    <div className="teammemberdiv">
      <div className="pictureboxweb" id="oden" onClick={this.myFunction5}>
        {this.state.isHiddenFifth && <h5 className="headernametext" id="arcamajora">ODEN LOBELL</h5>}
        {!this.state.isHiddenFifth && <Oden />}
      </div>
    </div>

    <div className="teammemberdiv">
      <div className="pictureboxweb" id="sara" onClick={this.myFunction6}>
        {this.state.isHiddenSixth && <h5 className="headernametext" id="arcamajora">SARAH OUAKIM</h5>}
        {!this.state.isHiddenSixth && <Sarah />}
      </div>
    </div>

    </div>




      </div>
      </div>




        <div className="web">
        <div>

          <div className="areasheader">
            <div className="headertextbox">
              <h1>TEAM PHILOSOPHY</h1>
            <div className="headertextsmall">
              <p>At Hedy we put continuous learning in the
              forefront and share our knowledge to build
              a strong team and be able to take on complex
              challenges and create the future.
              We are gathering talents that are brilliant at what they do,
              role models within their area of expertise and who are
              driven by constantly learning.</p>
            </div>
            </div>
          </div>

        <div className="teamboxweb">

        <div className="teammemberdiv">
          <div className="pictureboxweb" id="bob" onClick={this.myFunction1}>
            {this.state.isHiddenFirst && <h5 className="headernametext" id="arcamajora">BOB DAHLBERG</h5>}
            {!this.state.isHiddenFirst && <Bob />}
          </div>
        </div>

        <div className="teammemberdiv">
          <div className="pictureboxweb" id="emelie" onClick={this.myFunction2}>
            {this.state.isHiddenSecond && <h5 className="headernametext" id="arcamajora">EMELIE MEURK DEMERUD</h5>}
            {!this.state.isHiddenSecond && <Emelie />}
          </div>
        </div>

        <div className="teammemberdiv">
          <div className="pictureboxweb" id="hanna" onClick={this.myFunction3}>
            {this.state.isHiddenThird && <h5 className="headernametext" id="arcamajora">HANNA MOISANDER</h5>}
            {!this.state.isHiddenThird && <Hanna />}
          </div>
        </div>

        <div className="teammemberdiv">
          <div className="pictureboxweb" id="nicole" onClick={this.myFunction4}>
            {this.state.isHiddenFourth && <h5 className="headernametext" id="arcamajora">NICOLE PEHAR</h5>}
            {!this.state.isHiddenFourth && <Nicole />}
          </div>
        </div>

        <div className="teammemberdiv">
          <div className="pictureboxweb" id="oden" onClick={this.myFunction5}>
            {this.state.isHiddenFifth && <h5 className="headernametext" id="arcamajora">ODEN LOBELL</h5>}
            {!this.state.isHiddenFifth && <Oden />}
          </div>
        </div>

        <div className="teammemberdiv">
          <div className="pictureboxweb" id="sara" onClick={this.myFunction6}>
            {this.state.isHiddenSixth && <h5 className="headernametext" id="arcamajora">SARAH OUAKIM</h5>}
            {!this.state.isHiddenSixth && <Sarah />}
          </div>
        </div>

        </div>

        </div>
        </div>

        <div>
        <div id="flexboxcenter">
          <h2 id="colorwhite">WANT TO JOIN OUR TEAM?</h2>
        </div>
          <Getintouch/>
        </div>
        </div>

    </div>
    )
  }
}

export default Teampage
