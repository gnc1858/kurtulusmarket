import React,{createContext,useContext} from 'react'
import Home from "./pages/Home";
import { BrowserRouter as Router, Route ,Switch} from "react-router-dom";
import styled from 'styled-components'
import {InitialState} from "./context/Context" 
import Checkout from './pages/Checkout';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Admin from './pages/Admin'
import Footer from './components/Footer'

const MainContainer=styled.div`
   width: 100%;
   min-height:100vh;
   margin-bottom:0;
`



const App = () => {
 const loginState=useContext(InitialState).isLoginActive;


  return (
  <>
   <Router>
    <Login/> 
     <MainContainer>
      <Navbar/>
         <Switch>
           <Route exact path="/">

             <Home/>
           </Route>

           <Route exact path="/sepet">
            <Checkout/>
           </Route>

          <Route exact path="/admin">
            <Admin/>
          </Route>


            

          <Route path="*">
            <h1>Oooppps ! yanlış yerlerdesin. Logoya tıklayıp anasayfaya dönebilirsin </h1>
          </Route>
        </Switch>
          

   </MainContainer>
   <Footer/>
  </Router>
   </>
  
  )
};

export default App;