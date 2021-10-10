import React,{useContext,useState} from 'react'
import styled from "styled-components"
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import {InitialState,UpdateState} from "../context/Context"
import {items} from "../data"


const Wrapper=styled.li`


 padding:20px;
 display:flex;


`
const Item=styled.div`
display:flex;
flex:1;

`

const Image=styled.img`
height:120px;
width:180px;
margin-left:10px;
margin-right:10px;
flex:1;
`



const InfoContainer=styled.div`
height:120px;
display:flex;
justify-content:center;
align-items:center;
flex:3;

`
const Name=styled.p`
flex:1;
display:flex;
align-items:center;
justify-content:center;
`
const Price=styled.p`
flex:1;
display:flex;
align-items:center;
justify-content:center;

`

const QtyContainer=styled.div`
display:flex;
align-items:center;
justify-content:center;
flex:1;
`
const ButtonDecrease=styled.p`
font-size:38px;
color:green;
padding:12px;
cursor:pointer;
`

const Qty=styled.p`
 font-size:24px;
 font-weight:bold;
`
const ButtonIncrease=styled.p`
  font-size:38px;
  padding:12px;
  color:green;
  cursor:pointer;
`



const CheckoutItem = ({ıtem}) => {
  
  const update=useContext(UpdateState)

  const [qty,setQty]=useState(1)
 

  function handleClick(action){
    if(action==="increase"){
        setQty((qty)=>qty+=1);
    }
    else if(action==="decrease" && qty>1){
        setQty((qty)=>qty-=1);
    }

    else if(action==="delete"){

      update({action:"remove",id:ıtem.id});
    }
 }


 return (
  <Wrapper>
  
    <Item>
       <Image src={ıtem.img}></Image>
       <InfoContainer>
          <Name>{ıtem.title}</Name>
          <Price>{ıtem.price}</Price>
             
          <QtyContainer>
             <ButtonDecrease onClick={()=>handleClick("decrease")}>-</ButtonDecrease>
             <Qty>{qty}</Qty>
             <ButtonIncrease onClick={()=>handleClick("increase")}>+</ButtonIncrease>
             
          </QtyContainer>

         <DeleteOutlineIcon 
           style={{color:"red",fontSize:"24px",cursor:"pointer"}}
           onClick={()=>handleClick("delete")}

          />
       </InfoContainer>
    </Item>

    
  </Wrapper>
 )
}

export default CheckoutItem
