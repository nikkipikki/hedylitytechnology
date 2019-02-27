import React from "react"
import "./style.css"


class Newhamburger extends React.Component {
  render() {
    return (
      <div>
        <div class="overlay">
          <label for="toggle"></label>
        </div>

        <input type="checkbox" id="toggle" name="toggle"/>
        <div class="verticalNav">
          <a href="/">NEWS</a>
          <a href="/">ABOUT</a>
          <a href="/">BLOG</a>
          <a href="/">CONTACT</a>
        </div>
      </div>
    )
  }
}

export default Newhamburger
