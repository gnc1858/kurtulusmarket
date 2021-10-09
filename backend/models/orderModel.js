import mongoose from 'mongoose'


const orderSchema= mongoose.Schema({
 clientId:String,

 orderItems:[
      {
       id:{type:String, required:true},
       qty:{type:Number, required:true},
  
     }
    ]

 },

 {
timestamps:true,
}
 
 )


const Order=mongoose.model('Order',orderSchema)
export default Order;