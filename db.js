const mongoose = require('mongoose')
//db connection
mongoose.connect('mongodb+srv://admin:admin123@comment-deddt.mongodb.net/test',{useNewUrlParser:true,useUnifiedTopology:true}, err => {
    if (!err)
        console.log('MongoDB Connection Succeeded')
    else
        console.log('MongoDB Connection Error:' + JSON.stringify(err.undefined, 2))

})


//////Local DB/////

// mongodb://localhost:27017/onlineShoppingCart