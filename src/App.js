// create your App component here
import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    fetch("http://api.open-notify.org/astros.json")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }

  render() {
    return <div>this is App</div>;
  }
}

export default App;
