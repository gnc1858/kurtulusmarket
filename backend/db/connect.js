import mongoose from 'mongoose'
import dotenv from 'dotenv'
import colors from 'colors'

dotenv.config({path:"./../../.env"})

const connectDB=async()=>{
 try{
  const connect=await mongoose.connect(process.env.MONGO_URL,{
   useUnifiedTopology:true,
   useNewUrlParser:true,
   

  })
  console.log(`MongoDB connected:${connect.connection.host}`.cyan.underline)

 }
 catch(error){
  console.error(`Error:${error.message}`.red.underline.bold)
  process.exit(1)
  
 }
}
//connectDB()

export default connectDB