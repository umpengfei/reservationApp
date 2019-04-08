// dataBase layer
const dataBase = [
  {
    name: "Saira",
    workingHours: {
      "2019-03-22": "08:20",
      "2019-03-23": "08:20",
      "2019-03-24": "08:20",
      "2019-03-25": "12:20",
      "2019-03-26": "08:20"
    },
    appointments: [
      {
        patientName: "Hayden",
        doctorName: "Saira",
        appointDate: "2019-03-24",
        appointTime: "08:11"
      },
      {
        patientName: "Fannie",
        doctorName: "Saira",
        appointDate: "2019-03-23",
        appointTime: "13:15"
      }
    ]
  },
  {
    name: "Alessandro",
    workingHours: {
      "2019-03-22": "11:20",
      "2019-03-23": "14:20",
      "2019-03-24": "08:16"
    },
    appointments: [
      {
        patientName: "Rhia",
        doctorName: "Alessandro",
        appointDate: "2019-03-24",
        appointTime: "08:11"
      },
      {
        patientName: "Haniya",
        doctorName: "Alessandro",
        appointDate: "2019-03-23",
        appointTime: "15:16"
      }
    ]
  },
  {
    name: "Loren",
    workingHours: {
      "2019-03-22": "11:20",
      "2019-03-23": "14:20",
      "2019-03-24": "08:20",
      "2019-03-24": "08:20"
    },
    appointments: [
      {
        patientName: "Fionnuala",
        doctorName: "Loren",
        appointDate: "2019-03-24",
        appointTime: "08:11"
      },
      {
        patientName: "Addie",
        doctorName: "Loren",
        appointDate: "2019-03-23",
        appointTime: "18:20"
      }
    ]
  },
  {
    name: "Maci",
    workingHours: {
      "2019-03-22": "08:16",
      "2019-03-23": "08:16",
      "2019-03-24": "08:16"
    },
    appointments: [
      {
        patientName: "Jonathan",
        doctorName: "Maci",
        appointDate: "2019-03-24",
        appointTime: "08:11"
      },
      {
        patientName: "Belle",
        doctorName: "Maci",
        appointDate: "2019-03-23",
        appointTime: "13:15"
      }
    ]
  }
];

module.exports = dataBase;
