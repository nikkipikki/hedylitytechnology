import React from "react"
import Greeting from "./greeting"
import Loadingpage from "./loadingpage"
import Header from "./header"
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
      <div>
        <Hamburgermenu/>
        <Header/>
        <Loadingpage/>
      </div>
    )
  }

}

export default App
