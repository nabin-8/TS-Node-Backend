import express from "express";
import mongoose from "mongoose";
import router from "./routes/Employee.route";

const app = express();
app.use(express.json());

const MONGO_URL = "mongodb://127.0.0.1:27017";
mongoose.connect(MONGO_URL, {
    dbName: "ts-node-backend"
}).then(() => {
    console.log("Database connected");
}).catch((error) => { console.error(error); });


app.use("/", router);


app.listen(4000, () => {
    console.log(`Server is running on http://localhost:4000`);
})