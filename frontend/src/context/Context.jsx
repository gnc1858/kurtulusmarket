import React,{createContext,useState} from 'react'
import {getState,saveState} from "../storage/localStorage"

export const InitialState=createContext()
export const UpdateState=createContext()


const StateContext = ({children}) => {
  const currentState=getState()
 
 const [utils,setUtils]=useState(currentState ? currentState :{
    theme:"dark",
    isLoginActive:false,
    ıtemIds:[]
 });
 
 
 function toggleState(util){
   if(util==="theme"){
      
      setUtils((utils)=>({
          ...utils,
          theme:utils.theme==="light" ? "dark":"light",
          
      }))
   }
   else if(util==="login" ){

       setUtils((utils)=>({
          ...utils,
          isLoginActive:!utils.isLoginActive
      }))
   }
 


  //🐞 add-remove-update item--> move below part to OrderContext  
  else if(typeof util==="object" && !Array.isArray(util) && util.action){
      if(util.action==="remove"){
         setUtils((utils)=>({
            ...utils,
               ıtemIds:utils.ıtemIds.filter((id)=>id!==util.id)
         }))
      }

      else if(util.action==="add"){
            setUtils((utils)=>({
            ...utils,
               ıtemIds:[...utils.ıtemIds,util.id]
               
         }))
      }

  }
   
 }
 return (
  <InitialState.Provider value ={utils}>
    <UpdateState.Provider value ={toggleState}>
       {children}
    </UpdateState.Provider>
   
  </InitialState.Provider>
 )
}

export default StateContext
