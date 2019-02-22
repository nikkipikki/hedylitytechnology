import React from "react"
import Greeting from "./greeting"
import Loadingpage from "./loadingpage"
import Header from "./header"
import Introbox from "./introbox"

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
        <Header/>
        <Introbox/>
        <Loadingpage/>
      </div>
    )
  }

}

export default App
