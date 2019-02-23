import React from "react"
import { BrowserRouter, Route, Link } from "react-router-dom"
import Loadingpage from "./loadingpage"
import Servicespage from "./servicespage"

//start array
const names = [
  {first: "Hello", last: "World"},
  {first: "Nicole", last: "Pehar"}
]
//end array

class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <div>
          <Route
            exact
            path="/"
            component={Loadingpage} />
            <Route
              path="/servicespage"
              component={Servicespage} />
        </div>
      </BrowserRouter>

    )
  }

}

export default App
