import React, { useState } from 'react';


const App = () => {
  let [quantity, setQuantity] = useState(0);
  let [inCurrency, setInCurrency] = useState("USD");
  let [outCurrency, setOutCurrency] = useState("INR");
  let [output , setOutput] = useState(0);
 
let handleClick = ()=>{
   console.log( quantity)
   console.log(inCurrency)
   console.log(outCurrency)
}
  
  return (
    <>
      <div className="mainContainer h-screen bg-black flex justify-center items-center">
        <div className="box h-1/4 w-2/4 bg-white flex justify-evenly flex-col items-center">
          <div className="inputContainer  flex justify-between w-4/5 ">
            <label id="quantity" > From </label>
            <input type="number" className='border-2 rounded border-black' value={quantity}  onChange={(e)=>{setQuantity(e.target.value)}} />
            <select className='border-2 rounded border-black' onChange={(e)=>setInCurrency(e.target.value)}>
              <option  value="USD"> USD </option>
              <option value="INR"> INR </option>
              <option value="AED"> AED </option>
            </select>
            <span>--  To </span>

            <select className='border-2 rounded border-black' onChange={(e)=>setOutCurrency(e.target.value)}>
            <option value="INR"> INR </option>
            <option  value="USD"> USD </option>
              <option value="AED"> AED </option>
            </select>
            <button className='border-2 rounded border-black' onClick={handleClick}> Convert </button>
          </div>
          <div className="output border-2 rounded border-black h-1/5 mt-11 w-1/4 flex justify-center items-center">
           <h1>{output}</h1> 
          </div>
        </div>
      </div>
    </>
  )
}

export default App