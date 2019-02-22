import React from "react"
import Loadingpage from "./loadingpage"

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
        <Loadingpage/>
      </div>
    )
  }

}

export default App
