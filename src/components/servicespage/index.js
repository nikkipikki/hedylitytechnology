import React from "react"
import "./style.css"
import Contactbutton from "../contactbutton"
import ScrollToTopOnMount from "../scrolltotoponmount"



class Servicespage extends React.Component {
  render() {
    return (
      <div className="fadeinclass">
      <ScrollToTopOnMount/>



      <div className="mobile">
        <div className="pagemargin">
        <div className="whatwedoheadertext">
          <h1>SERVICES</h1>
        </div>
        <div className="whatwedosmalltextcenter">
          <p>Consultancy services within programming and management</p>
        </div>
        <div className="abouttextthinleft">
          <p>With forefront technology skills and strategic minds
          Hedy supports small, mid-sized and large companies in
          their aspiration to make a successful digitalization
          journey and build a profitable business.</p>
        </div>
        <div className="whatwedoheadertext">
          <h1>ROLES WE HAVE TAKEN</h1>
        </div>
        <div className="roleswehavetakentext">
          <p>Quality Assurance, <mark className="pink">Tech architect, Agile coach,</mark> Tech educator, Brand developer,
          <mark className="pink">Growth hacker,</mark> Backend developer,
          Kotlin developer, <mark className="pink">Board member,</mark>
          Java developer, Business advisor,
          <mark className="pink">Android developer,</mark>  Graphical designer,
          Tech lead, Investment manager, <mark className="pink">Frontend developer,</mark>
          UX/UI developer, <mark className="pink">CEO,</mark>  Digital strategist,
          Managing Director,<mark className="pink"> Product owner,</mark> <mark className="pink">Project lead,</mark>
          Concept developer, Sales leader <mark className="pink">and many more.</mark></p>
        </div>
        <div className="whatwedoheadertext">
          <h1>WHAT WE DO</h1>
        </div>
        <div className="whatwedosmalltext">
          <p>Accelerate businesses with skills and solutions
          for a profitable digitalization journey</p>
        </div>
        <div className="whatwedoheadertext">
          <h1>TYPE OF SERVICES</h1>
        </div>
        <div className="abouttextthinleft">
          <ul>
            <li>Inhouse projects delivered by a Hedy team</li>
            <li>Consultancy service at client, where Hedy talent
            leads the work or is part of a team</li>
            <li>Take the role as tech and/or business partner</li>
          </ul>
        </div>
        <div className="whatwedoheadertext">
          <h1>TYPE OF CLIENT</h1>
        </div>
        <div className="abouttextthinleft">
          <ul>
            <li>Wants to take their product or business to “the next level”</li>
            <li>Has digitalization on the agenda</li>
            <li>Needs support with specific competencies to develop its product</li>
            <li>Wants a long-term tech partner to complement its development team</li>
            <li>Is facing globalization, expansion or other change management challenges</li>
          </ul>
        </div>
        <div className="whatwedoheadertext">
          <h1>PRICE MODEL</h1>
        </div>
        <div className="whatwedosmalltext">
          <p>Depends on the assignments length, scope and need.
          We have booth fixed pricing and hourly rate</p>
        </div>
        </div>
      </div>



      <div className="web">
      <div className="pagemarginweb">

      <div className="areasheader">
        <h1>SERVICES</h1>
      </div>
      <div className="subheader">
        <p>Consultancy services within programming and management</p>
      </div>
      <div className="textthin">
        <p>With forefront technology skills and strategic minds
        Hedy supports small, mid-sized and large companies in
        their aspiration to make a successful digitalization
        journey and build a profitable business.</p>
      </div>
      <div className="whatwedoheadertext">
        <h1>ROLES WE HAVE TAKEN</h1>
      </div>
      <div className="roleswehavetakentextweb">
        <p>Quality Assurance, <mark className="pink">Tech architect, Agile coach,</mark> Tech educator, Brand developer,
        <mark className="pink">Growth hacker,</mark> Backend developer,
        Kotlin developer, <mark className="pink">Board member,</mark>
        Java developer, Business advisor,
        <mark className="pink">Android developer,</mark>  Graphical designer,
        Tech lead, Investment manager, <mark className="pink">Frontend developer,</mark>
        UX/UI developer, <mark className="pink">CEO,</mark>  Digital strategist,
        Managing Director,<mark className="pink"> Product owner,</mark> <mark className="pink">Project lead,</mark>
        Concept developer, Sales leader <mark className="pink">and many more.</mark></p>
      </div>
      <div className="whatwedoheadertext">
        <h1>WHAT WE DO</h1>
      </div>
      <div className="subheader">
        <p>Accelerate businesses with skills and solutions
        for a profitable digitalization journey</p>
      </div>

      <div className="areaspresentingdiv">
        <div className="typediv2">
        <div className="typetext">
          <h1>TYPE OF SERVICES</h1>
        </div>
        <div className="typethintext">
          <ul>
            <li>Inhouse projects delivered by a Hedy team</li>
            <li>Consultancy service at client, where Hedy talent
            leads the work or is part of a team</li>
            <li>Take the role as tech and/or business partner</li>
          </ul>
        </div>
      </div>
      <div className="typediv2">
      <div className="typetext">
        <h1>TYPE OF CLIENT</h1>
      </div>
      <div className="typethintext">
        <ul>
          <li>Wants to take their product or business to “the next level”</li>
          <li>Has digitalization on the agenda</li>
          <li>Needs support with specific competencies to develop its product</li>
          <li>Wants a long-term tech partner to complement its development team</li>
          <li>Is facing globalization, expansion or other change management challenges</li>
        </ul>
      </div>
      </div>
      <div className="whatwedoheadertext">
        <h1>PRICE MODEL</h1>
      </div>
      <div className="subheader">
        <p>Depends on the assignments length, scope and need.
        We have booth fixed pricing and hourly rate</p>
      </div>
      </div>
    </div>
      </div>



        <Contactbutton/>

      </div>
    )
  }
}

export default Servicespage
