const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const cors = require('cors')
require('dotenv').config()
const ShortUrl = require('./models/shortUrl')
const shortUrlRoute = require('./routes/shortUrl')



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
// app.get('/shorturl',(req,res)=>{
//     res.send('hello')
// })

// app.post('/shorturl',async (req, res)=>{
//     res.send('hello world')
//    await ShortUrl.create({fullUrl:req.body.fullUrl})
// })

app.use('/',shortUrlRoute)

app.listen(process.env.PORT || 3000,()=>console.log('Server is start'))