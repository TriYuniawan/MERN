import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import UserRoute from "./routes/UserRoute.js"

const app = express();
mongoose.connect('mongodb://localhost:27017/fullstack_db', { 
    useNewUrlParser : true,
    useUnifiedTopology : true,
});
// membuat koneksi ke database
const db = mongoose.connection;  
db.on (`error`, (error) => console.log(error)); // ketika terjadi error maka akan di tangkap dan ditampilkan diconsole
db.once(`open`, ()=> console.log ("Database Connected!"))
 
app.use(cors());
app.use(express.json());
app.use(UserRoute);

app.listen(5000, () => console.log("server berjalan..."))

