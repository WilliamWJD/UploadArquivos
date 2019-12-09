const routes=require('express').Router()

routes.get('/',(req,res)=>{
    res.json({ok:true})
})

module.exports=routes