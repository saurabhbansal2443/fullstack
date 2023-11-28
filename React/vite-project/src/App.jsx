import Navbar from "./Navbar";
import Home from "./Home";
import Projects from "./Projects";
import About from "./About";
import ContactMe from "./ContactMe";
import { Route, Routes } from "react-router-dom";


function App() {

  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/"element={ <Home></Home> }></Route>
        <Route path="/about"  element={ <About></About> }></Route>
        <Route path="/project" element={<Projects></Projects> } ></Route>
        <Route path="/contact" element={<ContactMe></ContactMe> }></Route>
      </Routes>
    </>
  );
}

export default App;
