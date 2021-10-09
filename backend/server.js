import express from 'express'

import dotenv from 'dotenv'
import connectDB from './db/connect.js'

import {notFound,errorHandler} from './middleware/errorMiddleware.js'



import userRoutes from './routes/userRoutes.js'




dotenv.config({path:'./.env'})

connectDB()

const app=express()
app.use(express.json())

app.get('/',(req,res)=>{
 res.send('API is running..')
})



app.use('/api/users',userRoutes)



app.use(notFound)

app.use(errorHandler)

const PORT=process.env.PORT || 5000 
app.listen(PORT, console.log(`api is running in ${process.env.NODE_ENV} mode on port ${PORT}..`))
