const express = require("express");
const userRoutes = require("./routes/userRoutes");
const priorityRoutes = require("./routes/priorityRoutes");
const taskRoutes = require("./routes/taskRoutes");
const projectRoutes = require("./routes/projectRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes");
const commentRoutes = require("./routes/commentRoutes");

const app = express();
const cors = require("cors");

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    credentials: true,
  })
);

const API_VERSION = "/v1";

app.use(express.json());

app.get(`${API_VERSION}/test`, (req, res) => {
  res.json({ status: "ok" });
});

app.use(`${API_VERSION}/users`, userRoutes);
app.use(`${API_VERSION}/priority`, priorityRoutes);
app.use(`${API_VERSION}/task`, taskRoutes);
app.use(`${API_VERSION}/project`, projectRoutes);
app.use(`${API_VERSION}/dashboard`, dashboardRoutes);
app.use(`${API_VERSION}/comments`, commentRoutes);

module.exports = app;
