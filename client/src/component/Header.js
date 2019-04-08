import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div>
        {/* logo line, click it will direct to the main page*/}
        <a style={{ color: "black" }} href="/">
          <h2>ReservationApp</h2>
        </a>
        {/* button to find all the avaliable doctors, click it will direct to
        "/doctors" route and render DoctorList component*/}
        <a className="waves-effect waves-light btn-small" href="/doctors">
          Find All Doctors
        </a>
      </div>
    );
  }
}

export default Header;
