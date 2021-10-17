import React,{useState,useContext,useEffect} from 'react'
import styled from "styled-components"
import ArrowLeftOutlinedIcon from '@material-ui/icons/ArrowLeftOutlined';
import ArrowRightOutlinedIcon from '@material-ui/icons/ArrowRightOutlined';
import {sliderItems} from "../data"
import {InitialState} from "../context/Context"


const Container=styled.div`
width: 100vw;
height: 100vh;
display:flex;
position: relative;
overflow: hidden;
background-color:${props=>(props.theme==="light"?  "rgba(239, 240, 240, 0.74)":"rgba(116, 122, 137, 0.91)")};
`
const Arrow=styled.div`
 width:50px;
 height:50px;
 background-color:rgba(207, 205, 197, 0.53);
 border-radius:50%;
 display:flex;
 justify-content:center;
 align-items:center;
 cursor:pointer;
 position:absolute;
 top:40%;
 
 left:${props=>props.direction==="left" && "10px"};
 right:${props=>props.direction==="right" && "10px"};
 opacity:0.8;
 margin:auto;
 z-index:2;

  @media only screen and (max-width:1000px){
  top:30%;
}

  @media only screen and (max-width:680px){
  top:20%;
}

 @media only screen and (max-width:480px){
  top:15%;
}


`
//🦘 

//🐞 Slide and description

const Wrapper=styled.div`
height:100%;
display:flex;
transition:all 1s ease-in-out;
transform:translateX(${props=>props.slideIndex*-100}vw);


`

const Slide=styled.div`
  display:flex;
  align-items:center;
  width:100vw;
  height:100vh;
  background: ${(props)=>props.bg};
`


const ImageContainer=styled.div`
 flex:1;
 height:100%;
`
const Image=styled.img`
height:70%;
@media only screen and (max-width:1000px){
   height:60%;
   
}

@media only screen and (max-width:840px){
   height:50%;
}
@media only screen and (max-width:680px){
   height:35%;
}
@media only screen and (max-width:480px){
   height:25%;
}
`
//--
const DescContainer=styled.div`
  flex:1;
  padding:30px;
  height:100%;
`

const Title=styled.h1`
font-size:70px;
font-weight:bold;
@media only screen and (max-width:1000px){
   font-size:50px;
}

@media only screen and (max-width:840px){
   font-size:40px;
}
@media only screen and (max-width:680px){
  font-size:32px;
}
@media only screen and (max-width:480px){
   height:26px;
}
  
`
const Desc=styled.p`
  margin-top:50px;
  font-size:28px;
  letter-spacing:1px;
  font-weight:560;
  @media only screen and (max-width:680px){
   font-size:20px;
}

`







const Slides = () => {
 const [slideIndex,setSlideIndex]=useState(0);
 const theme=useContext(InitialState).theme;

 

 useEffect(()=>{
  
   const ınterval=setInterval(()=>{
      handleClick("right")
   },4000)

   return ()=> clearInterval(ınterval);

 })
  

   
  

 

  



 
  

  function handleClick(direct){
    if(direct==="right"){
        slideIndex<2 ? setSlideIndex((slideIndex)=>slideIndex+1):setSlideIndex(0)
    }
    if(direct==="left" ){
        slideIndex>0 ? setSlideIndex((slideIndex)=>slideIndex-1):setSlideIndex(2)
    }
  }

 return (
  <Container theme={theme}>
    <Arrow direction="left" onClick={()=>handleClick("left")}>
      <ArrowLeftOutlinedIcon/>
    </Arrow>

    <Wrapper slideIndex={slideIndex}>
     {sliderItems.map((item)=>(

     <Slide bg={item.bg}>

      <ImageContainer>
         <Image src={item.img}/>
      </ImageContainer>

      <DescContainer>
       <Title>{item.title}</Title>
       <Desc>{item.desc}</Desc>
    
      

      </DescContainer>
     </Slide>

      
     ))
     }
    </Wrapper>
    
    <Arrow direction="right" onClick={()=>handleClick("right")}>
      <ArrowRightOutlinedIcon/>
    </Arrow>

   
  </Container>
 )
}

export default Slides
