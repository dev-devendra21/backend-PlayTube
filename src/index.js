// require("dotenv").config(
//     {
//         path: ".env"
//     }
// )

import dotenv from "dotenv"

import connectDB from "./db/index.js";

dotenv.config({ path: "./env" })

import app from "./app.js"




connectDB()
    .then(() => {
        app.on("error", (error) => {
            console.log("app listen error: ", error);
            throw error
        })
        app.listen(process.env.PORT || 8000, () => {
            console.log(`⚙️   Server is running at port : ${process.env.PORT}`);
        })
    })
    .catch((error) => {
        console.log("MONGO db connection failed !!!", error)
    })































// first approach to connect with mongodb
/*
import express from "express"
const app = express()
( async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("errror", (error) => {
            console.log("ERRR: ", error);
            throw error
        })

        app.listen(process.env.PORT, () => {
            console.log(`App is listening on port ${process.env.PORT}`);
        })

    } catch (error) {
        console.error("ERROR: ", error)
        throw err
    }
})()

*/













