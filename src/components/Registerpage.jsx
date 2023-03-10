import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
//Axios permet de passer les données dans le backend, mongoDB
import axios from "axios";

class Registerpage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: "",
      username: "",
      email: "",
      password: "",
    };

    //pass the data as an argument to the function of a class based component. (if we don't have, in the console of F12 will show errors)
    this.changeFullName = this.changeFullName.bind(this);
    this.changeEmail = this.changeEmail.bind(this);
    this.changeUsername = this.changeUsername.bind(this);
    this.changePassword = this.changePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  //permet de changer et le sauvegarde le value du constructor() dans this.state
  //Change the this.state value
  //Take the value of the event and save it
  changeFullName(event) {
    this.setState({
      fullName: event.target.value,
    });
  }
  changeUsername(event) {
    this.setState({
      username: event.target.value,
    });
  }
  changeEmail(event) {
    this.setState({
      email: event.target.value,
    });
  }
  changePassword(event) {
    this.setState({
      password: event.target.value,
    });
  }
  //Il permet de garder the value of all datas
  //The all page refresh
  onSubmit(event) {
    event.preventDefault();

    //Il est enregistré dans registered et ensuite on le met dans le backend
    const registered = {
      fullName: this.state.fullName,
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
    };
    //Send to the server(in this port), and the registered send to this port, and the port will send to mongodb
    axios
      .post("http://127.0.0.1:4000/app/signup ", registered)
      .then((response) => console.log(response.data));

    this.setState({
      fullName: "",
      username: "",
      email: "",
      password: "",
    });
  }

  //Front and take the value
  /*onChange permet de déclancher les méthodes pour faire des actions '' */

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col">
              <img
                src="./adminfront3.gif"
                alt="registerback"
                style={{ width: "70%" }}
              ></img>
            </div>

            <div className="col">
              <div className="form-div"></div>
              <form onSubmit={this.onSubmit}>
                <input
                  type="text"
                  placeholder="Full Name"
                  onChange={this.changeFullName}
                  value={this.state.fullName}
                  style={{ height: "80px" }}
                  className="form-control form-group"
                />
                <br></br>
                <input
                  type="text"
                  placeholder="Username"
                  onChange={this.changeUsername}
                  value={this.state.username}
                  style={{ height: "80px" }}
                  className="form-control form-group"
                />
                <br></br>
                <input
                  type="text"
                  placeholder="Email"
                  value={this.state.email}
                  onChange={this.changeEmail}
                  style={{ height: "80px" }}
                  className="form-control form-group"
                />
                <br></br>
                <input
                  type="password"
                  placeholder="Password"
                  onChange={this.changePassword}
                  value={this.state.password}
                  style={{ height: "80px" }}
                  className="form-control form-group"
                />
                <br></br>
                <input
                  type="submit"
                  style={{ height: "50px" }}
                  className="btn btn-danger btn-block"
                  value="Submit"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Registerpage;
