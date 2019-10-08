import React, { Component } from 'react';
import axios from "axios";

export default class Login extends Component {
constructor(props) {
super(props);

this.state = {
  email: "",
  password: "",
  errorText: ""
}

this.handleChange = this.handleChange.bind(this);
this.handleSubmit = this.handleSubmit.bind(this);

}

handleSubmit(event) {
  axios.post("https://api.devcamp.space/sessions",
  {
    client: {
      email: this.state.email,
      password: this.state.password
    }
  },
  { withCredentials: true }
  ).then(response => {
    if (response.data.status === "created") {
      this.props.handleSuccessfulAuth();
    } else {
      this.setState({
        errorText: "wrong email or password"
      });
      this.props.handleUnSuccessfulAuth();
    }
  }).catch(error => {
    this.setState({
      errorText: "An error occured"
    });
    console.log("error", error);
    this.props.handleUnSuccessfulAuth();
  });
  
  event.preventDefault();
}

handleChange(event) {
  this.setState({//takes the updated state and updates the value
    [event.target.name]: event.target.value,
    errorText: ""
  });
}

render() {
return (
<div>
  <h1>login to access your dashboard</h1>

  <div>{this.state.errorText}</div>

  <form onSubmit={this.handleSubmit}>
    <input type="email" name="email" placeholder="Your email" value={this.state.email} onChange={this.handleChange} />
    <input type="password" name="password" placeholder="Your password" value={this.state.password} onChange={this.handleChange}/>
    {/* This takes the new state and passes it to the handler rather than allowing the value to update */}
    <div>
      <button type="submit">login</button>
    </div>
  </form>
</div>
);
}
}
