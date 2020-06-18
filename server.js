require('./db')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const commentRoutes = require('./routes/commentRoute')
const app = express()
const path = require('path')

app.use(bodyParser.json())
app.use(cors({origin:'http://localhost:3000'}))
// app.listen(4000,()=>console.log('Server started at : 4000'))

app.listen(process.env.PORT || 5000, function() {
    console.log("Server started.......");
});

if(process.env.NODE_ENV=='production'){
    app.use(express.static('client/build'));
    app.get('*',(req,res)=>{
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    })
}


app.use('/comments',commentRoutes)