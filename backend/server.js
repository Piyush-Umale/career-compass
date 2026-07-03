require("dotenv").config();
const app = require("./src/app");
const connectDB = require("./src/db");

const PORT = process.env.PORT || 5000;
connectDB();

app.listen(PORT , ()=>{
    console.log(`server is running on port ${PORT}`)
});