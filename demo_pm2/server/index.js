//pm2 start app.json
const express = require('express');
const app = express();
const cors = require('cors');

app.get('/content',async(req,res)=>{
  res.json({content: 'Content From Server API'});
})

const PORT = process.env.NODE_ENV || 3000;
app.listen(PORT,()=>console.log(`Server is running on port: http://localhost:${PORT}...`))
