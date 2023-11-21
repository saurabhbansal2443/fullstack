import {useState} from "react"
function App() {
  let [count ,setCount] = useState(0);

  let inc = ()=>{
    count = count + 1 ;
    setCount(count)
    console.log(count)
  }

  let dec = ()=>{
    count = count - 1 ;
    setCount(count)
    console.log(count)
  }
  return (
   <>
     <h1>{count}</h1>
     <button onClick={inc} > Incremenet</button>
     <br></br>
     <button  onClick={dec}> Decremenet</button>
    </>
  );
}
export default App;
