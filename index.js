// import express from "express";
// import {fileURLToPath} from "url";
// import {dirname, resolve, join} from "path";

const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(path.resolve(__dirname, "public")));
app.use("/bootstrap", express.static(path.resolve(__dirname, "node_modules/bootstrap/dist")));
app.use("/jquery", express.static(path.resolve(__dirname, "node_modules/jquery/dist")))
app.use('/fontawesome', express.static(path.resolve(__dirname, 'node_modules/@fortawesome/fontawesome-free')));



app.get("/",(req,res)=>{
   res.send("網站首頁");
 
});


app.listen(3000,()=>{
    console.log("伺服器已啟動於http://localhost:3000");
})