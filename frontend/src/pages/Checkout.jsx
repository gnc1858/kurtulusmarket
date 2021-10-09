import React,{useContext,useState} from 'react'
import {InitialState,UpdateState} from "../context/Context"
import styled from "styled-components"
import {items} from "../data"
import CheckoutItem from "./CheckoutItem"


const Container=styled.div`
 display:flex;
`

const Items=styled.div`
display:flex;
flex-direction:column;
flex:3;
`

const Summary=styled.div`
flex:1
`

const Total=styled.div``

const Button=styled.button``


function Checkout() {
 const ıtemIds=useContext(InitialState).ıtemIds
 const basket=items.filter(item => ıtemIds.includes(item.id))
 const basketLength=basket.length
  
 return (
   (basketLength <=0 ? <h2 style={{textAlign: 'center',marginTop:"20%"}} >Sepetin Boş Gözüküyor... </h2>: 
  <Container>

   <Items>

    {basket.map((ıtem)=>(
       <CheckoutItem ıtem={ıtem}/>

    ))}
   </Items>


    <Summary>
       <Total>Toplam: {}</Total>
       <Button>Siparişi Tamamla</Button>

    </Summary>
</Container>
   )
 )
}

export default Checkout
