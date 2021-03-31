import React, {Component} from "react";

class Form extends Component {
  initialState = {
    firstName: "",
    lastName: "",
  };
  state = this.initialState;
  sumbitForm = () => {
    this.props.handleSubmit(this.state);
    this.setState(this.initialState);
  };

  handleChange = (event) => {
    const {name, value} = event.target;

    this.setState({
      [name]: value,
    });
  };

  render() {
    const {firstName, lastName} = this.state;

    return (
      <form>
        <label htmlFor="firstName">First Name</label>
        <input type="text" name="firstName" id="firstName" value={firstName} onChange={this.handleChange} />
        <label htmlFor="lastName">Last Name</label>
        <input type="text" name="lasttName" id="lastName" value={lastName} onChange={this.handleChange} />
      </form>
    );
  }
}

export default Form;
