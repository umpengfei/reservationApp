import React, { Component } from "react";
import axios from "axios";

class WorkingHours extends Component {
  constructor(props) {
    super(props);
    {
      /* store the fetched woking hour object into this state*/
    }
    this.state = {
      name: "",
      workingHours: {}
    };
  }

  componentDidUpdate(prevProps) {
    {
      /* in component lifecycle, componentDidUpdate will handle the update of
      the props and state of the component*/
    }
    if (prevProps.name !== this.props.name) {
      {
        /* attach the doctor's name into the url*/
      }
      const url = `/api/workingHours/${this.props.name}`;
      console.log(url);
      {
        /* get the woking hours of this doctor*/
      }
      axios
        .get(url)
        .then(res => {
          this.setState({ workingHours: res.data, name: this.props.name });
          console.log(this.state.workingHours);
        })
        .catch(err => alert(err));
    }
  }

  render() {
    {
      /* use the map() funciton of react to iterate the WorkingHours object and render them*/
    }
    const workingHours = Object.entries(this.state.workingHours).map(
      ([key, value]) => <div key={key.toString()}>{key + " : " + value}</div>
    );
    {
      /* the makeReservation button will only render when there exists a doctor*/
    }
    let makeReservation = <br />;
    if (this.state.name !== "") {
      let whoseWorkingHour =
        "Above is Dr " + this.state.name + "'s working hours";
      makeReservation = (
        <div>
          <p>{whoseWorkingHour}</p>
          {/* click on the Make Reservation button will redirect to the route to 
            render Reservation component*/}
          <a
            className="waves-effect waves-light btn-small"
            href={`/doctors/${this.props.name}`}
          >
            Make Reserevation<i className="material-icons right">send</i>
          </a>
        </div>
      );
    }
    return (
      <div>
        {workingHours}
        {makeReservation}
      </div>
    );
  }
}

export default WorkingHours;
