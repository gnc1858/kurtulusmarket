import mongoose from 'mongoose'


const clientIdSchema=mongoose.Schema({
 ids:[String]
},
)


const Ids=mongoose.model('Ids',clientIdSchema)
export default Ids ;