import React,{useState,useContext}  from 'react'
import styled from  "styled-components"
import {useHistory} from "react-router-dom"
import {InitialState,UpdateState} from "../context/Context"



const Item=styled.div`
 margin:10px;
 height:400px;
 width:320px;
 display:flex;
 align-items:center;
 justify-content:center;
 padding:8px;
 align-items:center;
 flex-direction:column;
 border:2px solid #1996bf;
 border-radius:8px;
`
const Title=styled.h2`
 font-size:24px;
`

const Image=styled.img`
height:240px;
`

const Price=styled.p`
 font-size:20px;
 padding:5px;
font-weight:bold;
`
const Button=styled.button`
 font-size:20px;
 padding:10px;
 border-radius:10px;
 cursor:pointer;
 font-weight:600;
 background-color:#1996bf;
 transition:all .5s ease-in-out;

 &:hover{
   border-color:#e8a156;
 }
 `


const CategoryItems = ({items})=> {

  const history=useHistory()
  
  const currentItems=useContext(InitialState).ıtemIds
  const update=useContext(UpdateState)
  

  
 

 
 
  

 function handleClick(id){  
  
   const isThere=currentItems.find((productId)=>productId===id)
   
   if(!isThere){
     
     update({
       action:"add",
       id:id
     })
    
  }
  else return
}


function handleDirect(){
  
  const loc=history.location.pathname;
  if(loc==="/"){
   history.push("/sepet")
  }

}


 return (
  (
    items.map((item)=>(

       <Item>
         <Title>{item.title}</Title>
         <Image src={item.img}></Image>
         <Price>{item.price}</Price>
          <Button
            onClick={(e)=>(e.target.innerText==="Sepetim" ? handleDirect(e):handleClick(item.id))}
            
           >{currentItems.includes(item.id) ? "Sepetim":"Sepete Ekle"}</Button>
        
       </Item>
    ))
  )
 
    
 
 )
}

export default CategoryItems
