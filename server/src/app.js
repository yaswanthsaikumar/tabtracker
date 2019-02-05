console.log('hello')
const express= require('express')
const bodyparser= require('body-parser')
const cors= require('cors')
const morgan= require('morgan')

const app=express()
app.use(morgan('combined'))
app.use(bodyparser.json())
app.use(cors())
app.post("/Register",(req,res) => {
    res.send({
        message:'hello ${req.body.email}! your user was registerd! Have fun'
    })
})

app.listen(process.env.PORT || 8081)