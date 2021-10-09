

import axios from 'axios'

export const login=async (email,password)=>{
 try{
  
  const {data}= await axios.post('/api/users/login', {email,password},{'Content-Type':'aplication/json'}
   )//post methodunu yeni bir document oluştururken kullanıyorduk ve bunu request.body aracılığıyla yapıyorduk işte burdaki ikinci kısım ({email,password}) request body kısmına yerleştirilen objecttir bu email ve password ise kullanıcının LoginScreen ekranında girdiği password ve emaildir.
  
  localStorage.setItem('userInfo', JSON.stringify(data))
  return data
 }  
 catch(error){

    console.error(error)
    return error.response.status
  

}
}
//

export const logout=()=>{
  localStorage.removeItem('userInfo')
  
  

}