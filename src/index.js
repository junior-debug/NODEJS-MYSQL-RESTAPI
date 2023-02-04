import express from "express";
import morgan from "morgan";
import employeesRoutes from "./routes/employees.routes.js";
import indexRoutes from "./routes/index.routes.js";
import { PORT } from "./config.js";

const app = express();
const port = PORT;
app.use(express.json());
app.use(morgan("dev"));
app.use("/api", employeesRoutes);
app.use(indexRoutes);

app.get("/", (req, res) => res.send("Hello World!"));
app.use((req, res, next) => {
  res.status(404).json({
    message: "endpoint not found",
  });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
