const mongoose = require("mongoose");
const exppress = require("express");
const dotenv = require("dotenv");
const cors = require('cors')
const port = process.env.PORT || 5000;
const { defaultError, notFound } = require("./common/errorHandler");
const userRoute = require("./routes/userRoutes");
const tasksRoute = require("./routes/tasksRoute");

const app = exppress();
app.use(exppress.json());
dotenv.config();
app.use(cors());



// database connection with mongose
mongoose
    .connect(process.env.MONGO_CONNECTION_STRING)
    .then(() => console.log("connection successful"))
    .catch((err) => console.log(err));

// route handle
app.use("/user", userRoute);
app.use("/", tasksRoute);

// not found route
app.use(notFound);

// default error
app.use(defaultError);

app.listen(port, () => {
    console.log("listening the  port");
})