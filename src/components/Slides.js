import React,{useState,useContext,useEffect} from 'react'
import styled from "styled-components"
import ArrowLeftOutlinedIcon from '@material-ui/icons/ArrowLeftOutlined';
import ArrowRightOutlinedIcon from '@material-ui/icons/ArrowRightOutlined';
import {sliderItems} from "../data"
import {Theme} from "../utils/ThemeContext"


const Container=styled.div`
width: 100%;
height: 100vh;
display:flex;
position: relative;
overflow: hidden;
background-color:${props=>(props.theme==="light"?  "rgba(241, 226, 195, 1)":"gray")};
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
 top:0;
 bottom:0;
 left:${props=>props.direction==="left" && "10px"};
 right:${props=>props.direction==="right" && "10px"};
 opacity:0.8;
 margin:auto;
 z-index:2;

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
height:80%;
 
`
//--
const DescContainer=styled.div`
  flex:1;
  padding:50px;
  height:100%;
`

const Title=styled.h1`
font-size:70px;
font-weight:bold;
  
`
const Desc=styled.p`
  margin:50px 0;
  font-size:20px;
  letter-space:2px;

`

const Button=styled.button`
 font-size:20px;
 padding:10px;
 border-radius:10px;
 cursor:pointer;
 font-weight:600;
 background-color:#18a5c4;
 transition:all .5s ease-in-out;

 &:hover{
   border-color:#e8a156;
 }


`


const Slides = () => {
 const [slideIndex,setSlideIndex]=useState(0);
 const [isButtonHovered,setIsButtonHovered]=useState(false);
 const [addSelected,setAddSelected]=useState([]);
 //set local storage for selected items🐞 

 const theme=useContext(Theme);

 


  

    useEffect(()=>{
      if(!isButtonHovered) {

        const interval=setInterval(()=>{
            handleClick("right")
        },5000)
  
        return ()=>clearInterval(interval);

      }
  
    })

  



  function handleClick(direction){
      if(direction==="right"){
          setSlideIndex(slideIndex<2 ? slideIndex+1 : 0)
      
      }
  
    
      if(direction==="left"){
          setSlideIndex(slideIndex>0 ? slideIndex-1 : 2)

    }
  


  }

  //Sepete Ekle -- slide section

  function handleItemClick(id){
    setAddSelected((addSelected)=>[...addSelected,Number(id)])
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
       <Button 
       onMouseOver={()=>setIsButtonHovered(true)} 
       onMouseOut={()=>setIsButtonHovered(false)}
       onClick={()=>handleItemClick(item.id)}
       
       >{addSelected.includes(Number(item.id)) ? "Sepetim":"Sepete Ekle"}</Button>
      

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
