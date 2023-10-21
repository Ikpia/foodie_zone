import express from "express"
import dotenv from "dotenv"
import bodyParser from "body-parser";
import mongoose from "mongoose";
import {adminRoute, vendorRoute} from "./routes"
dotenv.config()

// |------- Connect to mongodb ----------------------|
const MONGODB_URI = process.env.MONGODB_URI
if (MONGODB_URI != undefined) {
mongoose.connect(MONGODB_URI).then(() => console.log("connected successfully to database"))
  .catch((err) => console.log(err))
} else {
  console.log("Mongo uri is undefined")
}
// |--------------------------------------------------|

const app = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
const PORT = process.env.PORT || 3000;


app.use("/admin", adminRoute)
app.use("/vendor", vendorRoute)

app.listen(PORT, (): void => {
  console.log("Server is running on port 3000");
});