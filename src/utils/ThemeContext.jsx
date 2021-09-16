import React,{createContext,useState} from 'react'

export const Theme=createContext('light')
export const UpdateTheme=createContext()

const ThemeContext = ({children}) => {
 const [theme,setTheme]=useState("light");
 
 function toggleTheme(){
    setTheme(()=>(theme==="light"?"dark":"light"))
 
 }
 return (
  <Theme.Provider value ={theme}>
    <UpdateTheme.Provider value ={toggleTheme}>
       {children}
    </UpdateTheme.Provider>
   
  </Theme.Provider>
 )
}

export default ThemeContext
