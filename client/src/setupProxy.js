const proxy = require("http-proxy-middleware");

module.exports = function(app) {
  app.use(proxy("/api/doctors", { target: "http://localhost:5000" }));
  app.use(proxy("/api/workingHours/*", { target: "http://localhost:5000" }));
  app.use(proxy("/api/appointments", { target: "http://localhost:5000" }));
};
