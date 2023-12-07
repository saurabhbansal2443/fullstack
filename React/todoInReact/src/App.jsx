import React from 'react'
import { useState } from 'react'

const App = () => {
  let [input ,setInput] = useState("");
  let [task,setTask] = useState([]);

  let addTodo = ()=>{

    if(input != ""){
     task= [...task  , input]; 
     setTask(task);
     setInput("");
    }
    //  console.log(task);
  }

  let handleDelete = (key )=>{
      task = task.filter((ele , i )=>{
        return key!=i;
      })

      setTask(task);
  }
  return (
    <div className='h-screen'>
      <div className="bg-black text-white text-center text-7xl " > Todo In React</div>
    <div className="flex justify-center mt-11 h-16 ">
   <input className='border-2 border-orange-300 rounded-xl w-1/3 mx-8 text-3xl px-3 shadow-2xl'value={input} onChange={(e)=>{setInput(e.target.value)}}/>
   <button className='border-2 border-orange-300 w-1/12 rounded-xl text-3xl hover:bg-slate-500 hover:border-0 shadow-2xl' onClick={addTodo}> Add </button>
   </div>
   <div className=' flex justify-center h-3/5 items-center flex-wrap' >
   <ul className="w-96">
    {task.map((taskEle ,idx)=>{
      return <li key={idx}
      className="w-full border-b-4 border-neutral-400 border-opacity-900 py-4 dark:border-opacity-500 flex justify-between shadow-2xl rounded-xl px-3 my-3 text-3xl">
       {taskEle}
      <svg className="w-[36px] h-[36px] text-gray-800 dark:text-black" onClick={()=>handleDelete(idx)} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
      <path d="M17 4h-4V2a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v2H1a1 1 0 0 0 0 2h1v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6h1a1 1 0 1 0 0-2ZM7 2h4v2H7V2Zm1 14a1 1 0 1 1-2 0V8a1 1 0 0 1 2 0v8Zm4 0a1 1 0 0 1-2 0V8a1 1 0 0 1 2 0v8Z"/>
    </svg>
    </li> 
    })}
  {/* */}
  
</ul>
   </div>
  </div>
  )
}

export default App