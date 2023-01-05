const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const cors = require('cors')
require('dotenv').config()
const shortUrlRoute = require('./routes/shortUrl')

const PORT = process.env.PORT || 3000



const app = express()

//connect db
mongoose.connect(process.env.DATABASE,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>console.log('Database is connect'))
.catch((err)=>console.log(err))


//middleware
app.use(express.json())
app.use(cors())
app.use(morgan('dev'))

//route
app.get('/',(req,res)=>{
    res.send('this is my server for short url exam')
})


app.use('/',shortUrlRoute)



//Connect to the database before listening
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log("listening for requests");
    })
})