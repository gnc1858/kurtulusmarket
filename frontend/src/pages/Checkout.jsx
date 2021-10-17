import React,{useContext} from 'react'
import {InitialState} from "../context/Context"
import styled from "styled-components"
import {items} from "../data"
import CheckoutItem from "./CheckoutItem"


const Container=styled.div`
 display:flex;
 height:100%;
 min-height:100vh;
 width:100%;
  background:${props=>(props.theme==="light" ? "rgba(239, 240, 240, 0.74)":"rgba(116, 122, 137, 0.91)")};

 @media only screen and (max-width:768px){
  flex-direction:column;
}
`

const Items=styled.div`
display:flex;
flex-direction:column;
flex:3;
`

const Summary=styled.div`
flex:1;
padding:10px;

 @media only screen and (max-width:768px){
   display:flex;
   flex-direction:column;
   justify-content:center;
   align-items:center;
}
`

const Total=styled.div`
font-size:24px;
padding:5px;
font-weight:600;

`

const Button=styled.button`
 padding:10px;
 font-size:20px;
 font-weight:600;
 border:2px solid gray;
 border-radius:6px;
 background-color:rgba(35, 103, 124, 1);
 cursor:pointer;
 &:hover{
    
   border-color:rgba(85, 103, 14, 1);
 }

 @media only screen and (max-width:768px){
    font-size:20px;
    padding:5px;

}


`


function Checkout() {
 const InitialS=useContext(InitialState)
 const ıtemIds=InitialS.ıtemIds
 const theme=InitialS.theme
 

 const basket=items.filter(item => ıtemIds.includes(item.id))

 const basketLength=basket.length
  
 return (
    <Container theme={theme}>

    {basketLength <=0 ? <h2 style={{marginTop:"20%",marginLeft: "35%"}} >Sepetin Boş Gözüküyor... </h2>: 
    <>
   <Items>

    {basket.map((ıtem)=>(
       <div key={ıtem.id}>
       <CheckoutItem ıtem={ıtem}/>
       </div>

    ))}
   </Items>


    <Summary>
       <Total>Toplam: {}</Total>
       <Button>Siparişi Tamamla</Button>

    </Summary>
    </>
    }
</Container>
 )
}

export default Checkout
