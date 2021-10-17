import React,{useContext,useState,useEffect} from 'react'
import styled  from "styled-components"
import {categories} from "../data.js"
import CategoryItems from "./CategoryItem"
import {InitialState} from "../context/Context"
import {items} from "../data"



const MainContainer=styled.div`
display:flex;
flex-direction:column;
background-color:${props=>(props.theme==="light"?  "rgba(239, 240, 240, 0.74)":"rgba(116, 122, 137, 0.91)")};
width:100vw;
min-height:100vh;
`

const Container=styled.div`
display:flex;
width:100vw;
min-height:100vh;
@media only screen and (max-width:1000px){
   flex-direction:column;
}


`

//🐞 

//🐞 






  

//🐞 
const CategoryContainer=styled.div`

 display:flex;
 flex-direction:column;
 margin:12px;
 min-width:300px;
 @media only screen and (max-width:1000px){
   flex-direction:row;
   justify-content:center;
   align-items:center;
   flex-wrap:wrap;
}

`
const Item =styled.h2`
 font-weight:bold;
 font-size:28px;
 cursor:pointer;
 margin-bottom:8px;
 padding:6px;
 border:2px solid #f5b540;
 border-radius:8px;
 transition:all 1.6s ease;
 &:hover{
     background-color:#1996bf;
 }

 @media only screen and (max-width:768px){
   margin-left:10px;
   font-size:24px
}
 @media only screen and (max-width:480px){
 font-size:20px
}
`

//🐞 

const ItemContainer=styled.div`
width:100%;

display:flex;
justify-content:space-evenly;
flex-wrap:wrap;


`


const Categories = () => {

const [currentCategory,setCurrentCategory]=useState("all");const [currentItems,setCurrentItems]=useState(items);
let theme=useContext(InitialState).theme;



useEffect(() =>{
   
    if(currentCategory==="all") return;

    else {
        setCurrentItems(()=>items.filter((item)=>item.category===currentCategory))

        
    }
 
    
},[currentCategory])



function handleClick(category){
  setCurrentCategory(()=>category);
 
}




 return (
    <MainContainer theme={theme}>
      <Container >
       <CategoryContainer>
        {categories.map((category)=>(
            <Item onClick={()=>handleClick(category)}>{category}</Item>
        ))}
  
    </CategoryContainer>

   
   <ItemContainer>
      {
         <CategoryItems items={currentItems}/>
      }
   </ItemContainer>
    
     
  </Container>

  </MainContainer>
 )
 
}

export default Categories
