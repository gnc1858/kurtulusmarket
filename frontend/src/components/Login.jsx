import React,{useContext,useState} from 'react'
import {useHistory} from "react-router-dom"
import styled from "styled-components"
import {InitialState,UpdateState} from "../context/Context" 
import CloseIcon from '@material-ui/icons/Close';
import {login }from "./../auth/login"
import {UnAuth,UnKnown} from "./../utils/error"




const LoginWrapper=styled.div`
display:flex;
position: fixed;
justify-content: center;
align-items: center;
width:100vw;
height:100vh;
background-color:rgba(139,139,140,0.9);
visibility:${props=>props.isActive ? 'visible' : 'hidden'};
transition:2s ease-in-out 0;
z-index:100;
`

const Form=styled.form`
 width:480px;
 height:420px;
 border:2px solid gray;
 border-radius:8px;
 background-color:black;
 display:flex;
 flex-direction:column;
 color:white;
 padding:25px 20px;

 
`
//🐞 🐞 
const Intro=styled.div`
width:100%;
display:flex;
justify-content:space-between;
margin-bottom:10px;
`
const Title=styled.p`
font-size:24px;
font-weight:600;

`


//🦘 

const Email=styled.div`
display:flex;
flex-direction:column;
width:100%;
padding:10px;
flex:1;
`

const Label=styled.p`
font-size:22px;
margin-bottom:10px;
`
const InputEmail=styled.input`
width:90%;
padding:8px;
color:white;
border-radius:5px;
outline:none;
border:2px solid ;
border-color:rgba(50,53,120,0.6);
background:rgb(50,53,70);
&:focus{
  border-color:#3b86b8;
  box-shadow:0px 0px 15px 0px #68B1F2;
}

`

//🦘 
const Password=styled.div`
display:flex;
flex-direction:column;
flex:1;
padding:10px;


`
const InputPassword=styled.input.attrs(props => ({
 
  type: "password"
}))`
width:90%;
color:white;
padding:8px;
border-radius:5px;
outline:none;
border:2px solid ;
border-color:rgba(50,53,120,0.6);
background:rgb(50,53,70);
&:focus{
  border-color:#3b86b8;
  box-shadow:0px 0px 15px 0px #68B1F2;
}
`

//🦘🦘  
const ButtonContainer=styled.div`
flex:1;
display:flex;

align-items:center;
flex-direction:column;

`

const Button=styled.button`
color:white;
font-size:22px;
width:80%;
background:black;
padding:7px;
outline:none;
border-radius:8px;
background-color:rgb(50,53,70);
;

`










const Login = () => {
 
 const toggle=useContext(UpdateState)
 const Initial=useContext(InitialState)
 const isActive=Initial.isLoginActive
 

 const [email,setEmail]=useState("")
 const [password,setPassword]=useState("")
 const [isDisabled,setIsDisabled]=useState(true)

 const [showError,setShowError]=useState(false)

 

 

 

 const history=useHistory()

 const update=useContext(UpdateState)

 const regex=RegExp("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")

 
 




   
  


 function handleEmailChange(e){

   setEmail(e.target.value);

   if(regex.exec(email) && password.length>0 ){
     setIsDisabled(false)
   }
   else setIsDisabled(true)

   if(showError) setShowError(false)
 }

 function handlePasswordChange(e){
   setPassword(e.target.value);
 
   if(regex.exec(email) && password.length>3){
     
    setIsDisabled(false)
   }
   else setIsDisabled(true)

  if(showError) setShowError(false)
 

 }
 //🐞 

 async function handleSubmit(e){
   e.preventDefault();
   localStorage.clear();

   const response= await login(email, password)

   setEmail("")
   setPassword("")

   if(response===401) {
      setShowError("401")
   }
   else if(response.name!=="admin"){
      setShowError("unknown")
   }
   else if (response.name==="admin"&&response.isAdmin){
      history.push('/admin')
      update("login")
      update("userstate")
      setIsDisabled(true)
   }

 }


 
 return (
  <LoginWrapper isActive={isActive}>
      <Form
      onSubmit={(e)=>handleSubmit(e)}>
        <Intro>
          <Title>Giriş Yap</Title>
          <CloseIcon style={{cursor:"pointer"}} onClick={()=>toggle("login")}/>

        </Intro>

        <Email >
           <Label>Email Adresi</Label>
           <InputEmail 
           onChange={(e)=>handleEmailChange(e)}
           value={email}></InputEmail>
        </Email>

        <Password>
          <Label>Şifre</Label>
          <InputPassword
           onChange={(e)=>handlePasswordChange(e)}
           value={password}></InputPassword> 
   
        </Password>

        {showError==="401" ? <UnAuth/>:showError==="unknown" ? <UnKnown/>:""}

        <ButtonContainer>
         <Button 
         type="submit"
         disabled={isDisabled} >Giriş</Button>

        

        </ButtonContainer>

      </Form>
  </LoginWrapper>
 )
}

export default Login
