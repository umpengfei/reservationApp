const checker = require("./checker");
const dataBase = require("./dataBase.js");

module.exports = app => {
  // dataBase layer
  const doctors = dataBase;

  // track all the available doctors
  app.get("/api/doctors", (req, res) => {
    if (!doctors || doctors.length === 0) res.status(404).send("No Doctor");
    res.send(doctors);
  });

  // track a doctor's workingHours
  app.get("/api/workingHours/:name", (req, res) => {
    const doctor = doctors.find(d => d.name === req.params.name);
    if (!doctor) res.status(404).send("Doctor not found");
    res.send(doctor.workingHours);
  });

  //track booked appointments
  app.get("/api/appointments/:name", (req, res) => {
    const doctor = doctors.find(d => d.name === req.params.name);
    if (!doctor) res.status(404).send("Doctor not found");
    res.send(doctor.appointments);
  });

  // create a doctor and the working hours
  app.post("/api/workingHours", (req, res) => {
    //validate the import doctor data
    if (!checker.checkValidDoctor(req.body)) {
      res.status(404).send("Invalid data");
      return;
    }
    // update or create a doctor working hours
    const input = ({ name = "", workingHours = "" } = req.body);
    input.appointments = [];
    // if there is not such doctor, add this doctors
    // if there is already this doctor, update his or her workingHours
    const doctor = doctors.find(d => d.name === input.name);
    if (!doctor) {
      doctors.push(input);
      res.send(input);
    } else {
      doctor.workingHours = input.workingHours;
      res.send(input);
    }
  });

  // book a doctor opening
  app.post("/api/appointments", (req, res) => {
    if (!checker.checkValidAppointments(req.body)) {
      res.status(404).send("Invalid input");
    }
    //create a new appointment
    const input = ({
      patientName = "",
      doctorName = "",
      appointDate = "",
      appointTime = ""
    } = req.body);
    //check whether overlap with an existing appointment
    const doctor = doctors.find(d => d.name === req.body.doctorName);
    if (!doctor) {
      res.status(404).send("Doctor not found");
      return;
    }
    //check whether overlap with an existing appointment
    const appointments = doctor.appointments;
    if (!checker.isWork(input, doctor.workingHours)) {
      res.status(404).send("Doctor not working at this time");
      return;
    }
    if (!checker.isOverLap(input, appointments)) {
      appointments.push(input);
      res.send(input);
    } else {
      res.status(404).send("Not an opening");
    }
  });
};
