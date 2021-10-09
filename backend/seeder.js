import mongoose from 'mongoose'
import dotenv from 'dotenv'

import users from './data/users.js'
import User from "./models/userModel.js"
import clientIds from './data/clientIds.js'
import Client from './models/clientModel.js'

import orders from './data/orders.js'
import Order from './models/orderModel.js'
import connectDb from './db/connect.js'

dotenv.config({path:"./../.env"})

connectDb()


const importData=async ()=>{
 try{
  await Order.deleteMany()//mongoDb veritabanından 3 collectıonın tüm documentlerini siliyoruz ki modeli alabilelim
  await User.deleteMany()
  await Client.deleteMany()

 await User.insertMany(users)
 await Client.insertMany(clientIds)
 await Order.insertMany(orders)
  
 console.log('Successfully Created')

  
 }

 catch(error){
  console.error(`${error}`.red.inverse)
  process.exit(1)

 }
}


const destroyData=async ()=>{
 try{
  await Order.deleteMany()//mongoDb veritabanından 3 collectıonın tüm documentlerini siliyoruz ki modeli alabilelim
  await Client.deleteMany()
  await User.deleteMany()

  
  console.log('Data destroyed'.red.inverse)
  process.exit()
 }

 catch(error){
  console.error(`${error}`)
  process.exit(1)

 }
}


if(process.argv[2]==='-d'){
 destroyData()   //terminale node backend/seeder -d yazarsam tüm data veritabanından silinir burdaki argv() methodu terminale yazdığım içeriği indexler yani indexi 2 olan kısımda -d varsa tüm datayı sil yoksa datayı import et.Fakat her defasında terminal kısmına node backend/seeder veya node backend/seeder -d yazmak yerine package.jsonda scripts kısmında bu ikiliyi birer key e atayabilirim(data:import ve data:destroy) böylece her defasında node backend/seeder yazmak yerine npm run data:import yazabilirim işte package.json daki scripts tam olarak bu amaçla kullanılır eğer oraya bakarsan başka kısaltmalar da yaptığımızı görürsün.Şimdi eğer terminale npm run data:import yazıp daha sonra daha önce yüklediğin MongoDB compass a bakarsan
}
else{
 importData()
}