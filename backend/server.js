import express from 'express'

import dotenv from 'dotenv'
import connectDB from './db/connect.js'

import {notFound,errorHandler} from './middleware/errorMiddleware.js'
import path from  "path"



import userRoutes from './routes/userRoutes.js'




let __dirname=path.resolve()

dotenv.config({path:path.resolve(__dirname,".env")})

connectDB()

const app=express()
app.use(express.json())

//serve static assets in productıon

if(process.env.NODE_ENV === 'production'){
   app.use(express.static(path.join(__dirname,'/frontend/build')))

   app.get("*",(req,res)=>{
     res.sendFile(path.resolve(__dirname,'frontend','build','index.html'))
   })
}
else {

 app.get('/',(req,res)=>{
  res.send('API is running..')
 })
}




app.use('/api/users',userRoutes)



app.use(notFound)

app.use(errorHandler)

const PORT=process.env.PORT || 5000 
app.listen(PORT, console.log(`api is running in ${process.env.NODE_ENV} mode on port ${PORT}..`))

