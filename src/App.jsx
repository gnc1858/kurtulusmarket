import React,{createContext} from 'react'
import Home from "./pages/Home";
import ThemeProvider from "./utils/ThemeContext";


export const ThemeContext=createContext()

const App = () => {
  return (
      <ThemeProvider>
      <Home/>
      </ThemeProvider>
  
  )
};

export default App;