import React from 'react'

const App = () => {
  return (
    <div className='h-screen'>
    <div className="flex justify-center mt-11 h-16">
   <input className='border-2 border-blue-900 rounded-xl w-1/3 mx-8 text-3xl px-3'/>
   <button className='border-2 border-red-700 w-1/12 rounded-xl text-3xl hover:bg-slate-500'> Add </button>
   </div>
   <div className=' flex justify-center h-3/5 items-center' >
   <ul class="w-96">
  <li
    class="w-full border-b-2 border-neutral-400 border-opacity-900 py-4 dark:border-opacity-50 flex justify-between shadow-2xl rounded-xl px-3">
    An item
    <svg class="w-[36px] h-[36px] text-gray-800 dark:text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
    <path d="M17 4h-4V2a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v2H1a1 1 0 0 0 0 2h1v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6h1a1 1 0 1 0 0-2ZM7 2h4v2H7V2Zm1 14a1 1 0 1 1-2 0V8a1 1 0 0 1 2 0v8Zm4 0a1 1 0 0 1-2 0V8a1 1 0 0 1 2 0v8Z"/>
  </svg>
  </li>
  
</ul>
   </div>
  </div>
  )
}

export default App