import React,{useEffect} from 'react'
import {useHistory} from "react-router-dom";
import styled from "styled-components"



const Container=styled.div`
display:flex;
flex-direction:column;
width:100%;
height:100vh;
align-items:center;
justify-content:center;
`

const CatGif=styled.img`
border-radius:50%;
height:300px;
width:400px;
margin:20px;
`



function Admin() {
  const history = useHistory()
  const userInfo =JSON.parse(localStorage.getItem("userInfo"))

 useEffect(()=>{
   if(!userInfo || !userInfo.name){
      history.push("/")
   }

 },[userInfo,history])
  

  
 return (
  <Container>
    
    
    <h2>Admin Kontrol Paneli</h2>
    <CatGif src="/images/cat.gif" ></CatGif>

    <h3>Sayfa geliştirme aşamasında...</h3>
  
   </Container>
 )
}

export default Admin
