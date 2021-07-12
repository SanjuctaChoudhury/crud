import express from "express"
import bodyparser from "body-parser"
const app=express()
import userroutes from './routes/users.js'
const port=process.env.PORT||3000
app.use(bodyparser.json())
app.use("/users",userroutes)
app.get("/",(req,res)=>
{
    res.send("hi")
})
app.listen(port ,()=>
{
    console.log("server running successfully")
})