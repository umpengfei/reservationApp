import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import DoctorList from "./component/DoctorList";
import Header from "./component/Header";
import WorkingHours from "./component/WorkingHours";
import Reservation from "./component/Reservation";

class App extends Component {
  constructor(props) {
    super(props);
    {
      /* state pool, the change of state of child component will passed to this
    state pool through Lifting State Up, Similarly, this pool will pass down
    the props to child component */
    }
    this.state = {
      name: ""
    };
    this.findWorkingHours = this.findWorkingHours.bind(this);
  }

  findWorkingHours(name) {
    this.setState({ name: name });
  }

  render() {
    console.log(this.state.name);
    return (
      <div className="container" align="center">
        <BrowserRouter>
          <div>
            {/* the header component, always shown on the page */}
            <Header />
            <br />
            {/* doctor list component, shows all the available doctors, shown
            whenever the route is "/doctors"*/}
            <Route
              path="/doctors"
              exact
              render={onFindWorkingHours => (
                <DoctorList onFindWorkingHours={this.findWorkingHours} />
              )}
            />
            <br />
            {/* woking hours component, shows the working hour of a selected
              doctor*/}
            <Route
              path="/doctors"
              render={() => <WorkingHours name={this.state.name} />}
            />
            <br />
            {/* the form to make a reservation, shown when the route is
            "/doctors/:name"*/}
            <Route
              path="/doctors/:name"
              render={() => (
                <Reservation name={window.location.href.slice(30)} />
              )}
            />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
