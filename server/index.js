const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userRoute = require("./Routes/userRoute");
const petRoute = require("./Routes/petRoute");
const appointmentRoute = require("./Routes/appointmentRoute");


require("dotenv").config();
const app = express();
const path = require('path');

app.use(express.static(path.resolve(__dirname, 'client')));
app.use(express.json({limit: "30mb"}));
app.use(express.urlencoded({limit: "30mb"}));
app.use(cors());


app.use("/api/users", userRoute);
app.use("/api/pets", petRoute);
app.use("/api/appointment", appointmentRoute);


app.get("/", (req, res) => {
    res.send("App is running.");
});

const port = process.env.PORT || 5000;
const mongodb_conn = process.env.MONGODBCONN;

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
});


mongoose.connect(mongodb_conn).then(()=> console.log("DB Connected Successfully.")).catch((error)=> console.log("Connection failed", error))