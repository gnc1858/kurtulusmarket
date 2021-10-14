import React,{useContext,useState} from 'react'
import styled from "styled-components"
import {Link,useHistory} from "react-router-dom"

import Badge from '@material-ui/core/Badge';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';

import Brightness2Icon from '@material-ui/icons/Brightness2';

import {UpdateState,InitialState} from "../context/Context"



const Container=styled.div`
 width: 100vw;
 height: 60px;
 background-color:${props=>(props.theme==="light" ? "rgba(239, 240, 240, 0.74)":"rgba(116, 122, 137, 0.91)")};
 border-bottom:2px solid #46484d;
 

`

const Wrapper=styled.div`
 padding:10px 20px;
 display:flex;
 align-items:center;
`








//🦘 

//🐞 
const Left=styled.div`
 flex:1;
 
`
const Logo=styled.h1`
font-weight:600;
color:rgba(35, 103, 124, 1);
font-size:40px;


`

//🦘 

//🐞
const Right=styled.div`
flex:1;
display:flex;
align-items:center;
justify-content:flex-end;

`
const MenuItem=styled.div`
 font-size:20px;
 font-weight:550;
 cursor:pointer;
 margin-left:25px;
 padding:8px;
 border-radius:5px;
 &:hover{
     background-color:rgba(161, 226, 195, 0.5);
 }
`



const Navbar = () => {


 const utils=useContext(InitialState);
 const theme=utils.theme;
 const isUserLoggedIn=utils.isUserLoggedIn;
 const toggle=useContext(UpdateState)
 const basketLength=utils.ıtemIds.length

 const userInfo=JSON.parse(localStorage.getItem('userInfo'))
 const history=useHistory()
 

 

function handleLogin(e){
  
  if(isUserLoggedIn && e.target.textContent==="Çıkış" ){
    
    localStorage.clear("userInfo")
    toggle("userstate")
     history.push("/")
    
   
  }
  else if(userInfo && userInfo.name==="admin"){
  
    history.push("/admin")
    if(!isUserLoggedIn) toggle("userstate");
    console.log("I am here",isUserLoggedIn)

  }
  else  { 
    toggle("login")
  }
}




 return (

  <Container theme={theme}>
    <Wrapper>
     

      <Left>
       <Link to="/">
        <Logo>KurtuluşMarket.</Logo>
       </Link>
       
      </Left>

      <Right>
       <MenuItem onClick={(e)=>handleLogin(e)} >{isUserLoggedIn ? "Çıkış":"Giriş"}</MenuItem>
    
       <MenuItem>
        <Badge badgeContent={basketLength && typeof basketLength==="number" ? basketLength:0} color="primary">
         <Link to="/sepet">
           <ShoppingCartOutlinedIcon />
         </Link>
         
        </Badge>
       </MenuItem>

        <MenuItem>
         
            <Brightness2Icon onClick={()=>toggle("theme")} />
        
        </MenuItem>
      </Right>

    </Wrapper>
  </Container>


 )
}

export default Navbar
