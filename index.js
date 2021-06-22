const express = require("express");
const app = express();

let port = process.env.PORT || 8081;






app.listen(port, ()=>{
    console.log(`Server listening on ${port}`);
})