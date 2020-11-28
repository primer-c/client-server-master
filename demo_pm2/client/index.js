//pm2 start app.json
const express = require('express');
const axios = require('axios');
const app = express();

const url ='http://localhost:3000/content';
app.get('/',async(req,res)=>{
  axios.get().then((response)=>{
    res.send(response.data.content)
  })
})

const PORT = process.env.NODE_ENV || 8000;
app.listen(PORT,()=>console.log(`Server running on port: http://localhost:${PORT}...`));
