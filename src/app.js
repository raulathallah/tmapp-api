const express = require("express");
const userRoutes = require("./routes/userRoutes");
const priorityRoutes = require("./routes/priorityRoutes");
const taskRoutes = require("./routes/taskRoutes");
const projectRoutes = require("./routes/projectRoutes");

const app = express();

const API_VERSION = "/v1";

app.use(express.json());

app.get(`${API_VERSION}/test`, (req, res) => {
  res.json({ status: "ok" });
});

app.use(`${API_VERSION}/users`, userRoutes);
app.use(`${API_VERSION}/priority`, priorityRoutes);
app.use(`${API_VERSION}/task`, taskRoutes);
app.use(`${API_VERSION}/project`, projectRoutes);

module.exports = app;
