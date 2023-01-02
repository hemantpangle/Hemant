const express = require('express')
const app = express()

app.get('/',(req,resp)=>{
    resp.sendFile('public/sdmendm.html',{root : __dirname})
});

app.listen(5555,'0.0.0.0',()=>{
    console.log("server is running")
})