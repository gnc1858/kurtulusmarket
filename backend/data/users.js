import bcrypt from 'bcryptjs'//kullanıcı password larını veri tabanında güvenli bir şekilde tutmak için bu paketi indirdik(npm i bcryptjs),

const users=[
 {
  name:'admin',
  email:'admin@email.com',
  password:bcrypt.hashSync('843eefdb',10),
  isAdmin:true
 }

]

export default users