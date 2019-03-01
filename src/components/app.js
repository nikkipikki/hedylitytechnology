import React from "react"
import { HashRouter, Route, Link } from "react-router-dom"
import Loadingpage from "./loadingpage"
import Servicespage from "./servicespage"
import Academypage from "./academypage"
import Innovationstudiopage from "./innovationstudiopage"
import Aboutpage from "./aboutpage"
import Hedypage from "./hedypage"
import Teampage from "./teampage"
import Newhamburger from "./newhamburger"
import Fotnot from "./fotnot"
import Kotlin from "./kotlin"
import Bookingconditions from "./bookingconditions"
import Hamburgermenu from "./hamburgermenu"

//start array
const names = [
  {first: "Hello", last: "World"},
  {first: "Nicole", last: "Pehar"}
]
//end array

class App extends React.Component {

  render() {
    return (
      <HashRouter>
        <div>
        <Hamburgermenu/>
          <Route
            exact
            path="/"
            component={Loadingpage} />
          <Route
            exact
            path="/services"
            component={Servicespage} />
          <Route
            path="/academy"
            component={Academypage} />
          <Route
            path="/innovationstudio"
            component={Innovationstudiopage} />
          <Route
            path="/about"
            component={Aboutpage} />
          <Route
            path="/hedy"
            component={Hedypage} />
          <Route
            path="/team"
            component={Teampage} />
          <Route
            path="/newburger"
            component={Newhamburger} />
          <Route
            path="/kotlin"
            component={Kotlin} />
          <Route
            path="/bookingconditions"
            component={Bookingconditions} />
          <Fotnot/>
        </div>
      </HashRouter>

    )
  }

}

export default App
