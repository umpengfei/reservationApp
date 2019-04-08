import React, { Component } from "react";
import axios from "axios";

class DoctorList extends Component {
  constructor(props) {
    super(props);
    {
      /* store the fetched doctors list into the state*/
    }
    this.state = {
      doctors: []
    };
    this.handleFindWorkingHours = this.handleFindWorkingHours.bind(this);
  }

  componentDidMount() {
    {
      /* use axios to fetch data from back-end*/
    }
    axios
      .get("/api/doctors")
      .then(res => {
        this.setState({ doctors: res.data });
      })
      .catch(err => alert(err));
  }

  handleFindWorkingHours(name) {
    this.props.onFindWorkingHours(name);
  }

  render() {
    {
      /* use the map() funciton of react to iterate the doctor list and render them*/
    }
    const doctors = this.state.doctors.map(doctor => (
      <div key={doctor.name.toString()}>
        {/* click on the doctor's name will pass up the name to the state pool 
        using lifting state up*/}
        <li
          style={{ color: "#009688" }}
          onClick={() => this.handleFindWorkingHours(doctor.name)}
        >
          {doctor.name}
        </li>
      </div>
    ));
    return <div>{doctors}</div>;
  }
}

export default DoctorList;
