const express=require('express')
const routes=require('./routes')
const morgan=require('morgan')

const app=express()

const port=3333

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(morgan('dev'))
app.use(routes)

app.listen(port,()=>{
    console.log(`Server online to port ${port}`)
})