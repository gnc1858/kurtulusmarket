import React from 'react'
import styled from "styled-components"

const ErrorMessage=styled.p`
font-size:16px;
color:red;
text-align:center;
margin-top:-20px;
padding:10px;
transition:1s;
`

function UnAuth() {
 return (
  <ErrorMessage>
   Email adresin ve şifren uyuşmuyor...
  </ErrorMessage>
 )
}

function UnKnown(){

   return (
  <ErrorMessage>
     Birşeyler ters gitti paniklenme hemen!!! daha sonra tekrar dene
  </ErrorMessage>
 )
}

export {
 UnAuth,UnKnown
}
