const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const stockRoutes = require("./routes/stocks");
const connectDB = require("./config/db");
const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();


// Connect to database
connectDB();
app.use("/api/stocks", stockRoutes);

app.listen(8080, () => console.log("Backend running on port 8080"));
