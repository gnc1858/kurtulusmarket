import React from 'react'
import styled from "styled-components"
import {categories} from "../data.js"
import CategoryItem from "./CategoryItem"



const Container=styled.div`
display:flex;
width:100vw;
height:100vh;
`
const Categories = () => {
 return (
  <Container >
      {categories.map((item)=>(
           <CategoryItem item={item}/> 
      ))

      }
  </Container>
 )
}

export default Categories
