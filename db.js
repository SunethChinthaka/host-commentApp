const mongoose = require('mongoose')
//db connection
mongoose.connect('mongodb://localhost:27017/onlineShoppingCart',{useNewUrlParser:true,useUnifiedTopology:true}, err => {
    if (!err)
        console.log('MongoDB Connection Succeeded')
    else
        console.log('MongoDB Connection Error:' + JSON.stringify(err.undefined, 2))

})