import Navbar from "./Navbar"
import Home from "./Home"
import Projects from "./Projects"
import About from "./About"
import ContactMe from "./ContactMe"
import { Route, Routes } from "react-router-dom"
function App() {
  

  return (
    <>
    
     
     <Routes>
      <Route path="/" element={<>  <Navbar dark={true} ></Navbar> <Home></Home></>}> </Route>
      <Route path="/about" element={<> <Navbar dark={false} ></Navbar> <About></About></>}> </Route>
      <Route path="/project" element={<><Navbar dark={false} ></Navbar>  <Projects></Projects></>}> </Route>
      <Route path="/contact" element={<><Navbar dark={false} ></Navbar> <ContactMe></ContactMe></>}> </Route>
     </Routes>
     
    </>
  )
}

export default App
