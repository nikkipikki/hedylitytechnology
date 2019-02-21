import React from "react"

class Greeting extends React.Component {
  render() {
    return (
      <h1>Hello {this.props.firstName} {this.props.lastName}</h1>
    )
  }
}

export default Greeting
