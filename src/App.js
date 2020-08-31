import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: " ",
      username: "",
      allusers: [],
      radioGroup: {
        MEANStack: false,
        MERNStack: true,
        LAMPStack: false,
      },
      checkbox: {
        mangodb: false,
        express: false,
        react: false,
      },
      selectvalue: "",
    };
    this.forHandler = this.forHandler.bind(this);
    this.forUername = this.forUername.bind(this);
    this.ClickHandler = this.ClickHandler.bind(this);
    this.radiHandler = this.radiHandler.bind(this);
    this.checkHandler = this.checkHandler.bind(this);
    this.selectHandler = this.selectHandler.bind(this);
    this.emailHandler = this.emailHandler.bind(this);
  }
  //even handler use for
  forHandler(event) {
    this.setState({
      name: event.target.value,
    });
  }
  forUername(event) {
    this.setState({
      username: event.target.value,
    });
  }
  ClickHandler(event) {
    let currentuser = this.state.allusers;
    currentuser.push(this.state.name);
    currentuser.push(this.state.username);
    currentuser.push(this.state.selectvalue);
    this.setState({
      allusers: currentuser,
      username: "",
      name: "",
      selectvalue: "",
    });
    console.log(currentuser);
  }
  radiHandler(event) {
    console.log(event.target.value);
    let radioGroup = this.state.radioGroup;
    for (var key in radioGroup) {
      radioGroup[key] = false;
    }
    radioGroup[event.target.value] = event.target.checked;

    this.setState({
      radioGroup: radioGroup,
    });
  }
  checkHandler(event) {
    console.log(event.target.value);
    let checkbox = this.state.checkbox;
    for (var key in checkbox) {
      checkbox[key] = false;
    }
    checkbox[event.target.value] = event.target.checkbox;

    this.setState({
      checkbox: checkbox,
    });
  }
  selectHandler(event) {
    console.log(event.target.value);
    this.setState({
      selectvalue: event.target.selectvalue,
    });
  }
  emailHandler(event) {
    console.log(this.refs.subscribeemail.value);
  }
  render() {
    return (
      <div className="App">
        <h1>Form</h1>
        <label>Name:</label>
        {/* in input field we must have name ,value and onchange.name use for initization and value use
for when we add any number or field add in input field and onChange use for adding event handler
use for changing value */}
        <input
          type="text"
          placeholder="enter number"
          name="name"
          value={this.state.name}
          onChange={this.forHandler}
        />
        <br />
        <br />
        <label>Username:</label>
        <input
          type="text"
          name="username"
          value={this.state.username}
          onChange={this.forUername}
        />
        <br />
        DEVELOPER CATEGORY
        <br />
        <label>
          MEANStack:
          <input
            type="radio"
            name="devcatogray"
            value="MEANStack"
            checked={this.state.radioGroup["MEANStack"]}
            onChange={this.radiHandler}
          />
          <br />
          MEANStack:
          <input
            type="radio"
            name="devcatogray"
            value="MERNStack"
            checked={this.state.radioGroup["MERNStack"]}
            onChange={this.radiHandler}
          />
          <br />
          LAMPStack:
          <input
            type="radio"
            name="devcatogray"
            value="LAMPStack"
            checked={this.state.radioGroup["LAMPStack"]}
            onChange={this.radiHandler}
          />
        </label>
        <br />
        Technology CATEGORY
        <br />
        <label>
          React:
          <input
            type="checkbox"
            name="tech"
            value="react"
            checked={this.state.checkbox["react"]}
            onChange={this.checkHandler}
          />
          <br />
          MongoDB:
          <input
            type="checkbox"
            name="tech"
            value="mangodb"
            checked={this.state.checkbox["mangodb"]}
            onChange={this.checkHandler}
          />
          <br />
          Express:
          <input
            type="checkbox"
            name="tech"
            value="express"
            checked={this.state.checkbox["express"]}
            onChange={this.checkHandler}
          />
        </label>
        <br />
        <label>Select for dropdown: </label>
        <br />
        <label>
          Pick your favorite flavor:
          <select value={this.state.selectvalue} onChange={this.selectHandler}>
            <option name={this.selectvalue} value="grapefruit">
              Grapefruit
            </option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>
        <p> {this.state.name}</p>
        <p>{this.state.username}</p>
        <button onClick={this.ClickHandler}>Submit changes</button>
        <p>{this.state.allusers}</p>
        <p>{this.state.selectvalue}</p>
        <br />
        <label>Subscribe Email</label>
        <input type="email" ref="subscribeemail" />
        <button onClick={this.emailHandler}>Subscribe</button>
      </div>
    );
  }
}
export default App;
