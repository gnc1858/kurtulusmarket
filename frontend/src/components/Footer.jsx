import React from 'react'
import styled from "styled-components"

const Wrapper=styled.div`
width:100vw;
height:fit-content;
padding:30px;
background-color:rgba(182, 185, 202, 1);
margin-bottom:0;

display:flex;
justify-content:center;
align-items:center;



`

const CopyRight=styled.p`
font-size:22px;
font-weight:500;
`

const Footer = () => {
 return (
  <Wrapper>
    
    <CopyRight>KurtuluşMarket. © 2021</CopyRight>
  </Wrapper>
 )
}

export default Footer
