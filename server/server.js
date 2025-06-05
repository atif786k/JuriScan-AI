const express = require("express");
const cors = require("cors");
const analyzeRoute = require("./routes/analyzeRoute");
const dotenv = require("dotenv");
dotenv.config();

const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors({ origin: process.env.FRONTEND_URL }));
app.use(express.json());

app.use("/api", analyzeRoute);

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
