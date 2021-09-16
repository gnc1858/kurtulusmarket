import React,{useContext,useState} from 'react'
import styled, { keyframes } from "styled-components"
import SearchIcon from '@material-ui/icons/Search';

import Badge from '@material-ui/core/Badge';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';

import Brightness2Icon from '@material-ui/icons/Brightness2';

import {UpdateTheme,Theme} from "../utils/ThemeContext"



const Container=styled.div`
 width: 100%;
 height: 60px;
 background-color:${props=>(props.theme==="light" ? "rgba(241, 226, 195, 1)":"gray")};
 border-bottom:2px solid gray;
 

`

const Wrapper=styled.div`
 padding:10px 20px;
 display:flex;
 align-items:center;
`
//🐞 
const Left=styled.div`
flex:1;
display:flex;
align-items:center;
`

const SearchContainer=styled.div`
 display:flex;
 align-items:center;
 margin-left:15px;
 padding:5px;
`

const zeroToMax=keyframes`
from {
  width:0;
}
to{
  width:100%;
}
`
const Input=styled.input`
  border:1px solid gray;
  background-color:rgba(39, 59, 81, 0.82);
  border-radius: 8px; 
  transition:all .3s ease-in-out;
  font-size:20px;
  color:white;
  display:block;
  visibility: ${props=>props.isVisible ? "visible":"hidden" };
  animation:${zeroToMax} 2.4s ease-in 1;

 


  &:focus{
      
       outline: none;
       border-color:rgba(23, 125, 241, 0.82);
      
       box-shadow: 1px 1px .9px .9px rgba(41, 150, 214, 0.33);
  }
`




//🦘 

//🐞 
const Center=styled.div`
 flex:1;
 text-align:center;
`
const Logo=styled.h1`
font-weight:600;
color:rgba(35, 103, 124, 1);

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
 const [isSearchVisible,setIsSearchVisible]=useState(false)

 const theme=useContext(Theme);
 const toggleTheme=useContext(UpdateTheme)



 function handleSearch(){
  setIsSearchVisible(true)
 }

 return (

  <Container theme={theme}>
    <Wrapper>
      <Left>
       
        <SearchContainer>
           <SearchIcon style={
             {cursor:(isSearchVisible ?"not-allowed":"pointer"),
             opacity:(isSearchVisible? "0.5":"1")}} 
             onClick={handleSearch}
           />
           <Input isVisible={isSearchVisible}/>
        </SearchContainer>
      </Left>

      <Center>
       <Logo>KurtuluşMarket.</Logo>
      </Center>

      <Right>
       <MenuItem >Giriş</MenuItem>
       <MenuItem>Kayıt Ol</MenuItem>
       <MenuItem>
        <Badge badgeContent={4} color="primary">
         <ShoppingCartOutlinedIcon />
        </Badge>
       </MenuItem>

        <MenuItem>
         
            <Brightness2Icon onClick={toggleTheme} />
        
        </MenuItem>
      </Right>

    </Wrapper>
  </Container>


 )
}

export default Navbar
