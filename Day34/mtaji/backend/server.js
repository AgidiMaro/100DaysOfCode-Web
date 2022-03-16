const expresss = require("express");
const app = expresss();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const routesUrls = require("./routes/routes");
const cors = require("cors");
const PORT = process.env.PORT || 4000;

dotenv.config();
//connect to the server using credentials in  .env
mongoose.connect(process.env.DATABASE_ACCESS, () =>
  console.log("Database connected")
);

app.use(expresss.json());
app.use(cors());
app.use("/app", routesUrls);
app.listen(PORT, () => console.log("server is up and running"));
