import Navbar from "./Navbar"
import Home from "./Home"
import Projects from "./Projects"
import About from "./About"
import ContactMe from "./ContactMe"
import { Route, Routes } from "react-router-dom"
import { useContext, useState } from "react"
import Theme from "./Theme"
import { th } from "./Theme"

function App() {
  
 

let the = useContext(th);
let {theme,setTheme} = the;

console.log(the , "from apjs");
  return (
    <>
    <Navbar th={{theme,setTheme}} ></Navbar>
     <Routes>
      <Route path="/" element={<>   <Home th={{theme,setTheme}} ></Home></>}> </Route>
      <Route path="/about" element={<>  <About th={{theme,setTheme}} ></About></>}> </Route>
      <Route path="/project" element={<>  <Projects th={{theme,setTheme}} ></Projects></>}> </Route>
      <Route path="/contact" element={<><ContactMe th={{theme,setTheme}} ></ContactMe></>}> </Route>
     </Routes>
     
    </>
  )
}

export default App
