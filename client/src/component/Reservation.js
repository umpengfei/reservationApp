import React, { Component } from "react";
import axios from "axios";

class Reservation extends Component {
  constructor(props) {
    super(props);
    {
      /* store the submitted data into the state*/
    }
    this.state = {
      name: "",
      date: "",
      time: ""
    };
  }

  onChange = e => {
    {
      /* show the input value in the text line simultaneously*/
    }
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const appointment = {
      patientName: this.state.name,
      doctorName: this.props.name,
      appointDate: this.state.date,
      appointTime: this.state.time
    };
    {
      /* post the appointment to the back-end*/
    }
    axios
      .post("/api/appointments", appointment)
      .then(res => {
        alert("Successfully reserved!");
      })
      .catch(err => alert(err));
  };

  render() {
    {
      /* the reservation form*/
    }
    return (
      <div>
        <form onSubmit={this.onSubmit} style={{ margin: "20px" }}>
          <h4>{"Reservation for Doctor " + this.props.name}</h4>
          <br />
          <div>
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.onChange}
            />
          </div>
          <div>
            <label>Date("YYYY-MM-DD")</label>
            <input
              type="text"
              name="date"
              value={this.state.date}
              onChange={this.onChange}
            />
          </div>
          <div>
            <label>Time("00:00")</label>
            <input
              type="text"
              name="time"
              value={this.state.time}
              onChange={this.onChange}
            />
          </div>
          <br />
          <button className="btn waves-effect waves-light" type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default Reservation;
