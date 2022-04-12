const express = require("express");
require('dotenv').config();

const userRouter = require("./api/users/users.router");

const app = express();
app.use(express.urlencoded({ extended : true }));
app.use(express.json());

app.get("/", (req, res)=> {
    res.status(200).json({
        "message": "Hello Node js"
    });
});

app.use("/user", userRouter);

app.listen(process.env.SERVER_PORT, ()=>{
    console.log("Server is running on port " + process.env.SERVER_PORT);
})