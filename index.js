const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
app.use (express.json())
app.use(express.urlencoded({ extended:true }));


const port = process.env.PORT || 3000;


app.get("/", (req, res) => {
    res.json("hello world")
})

app.listen(port,()=>{
    console.log("server on ", port);
})