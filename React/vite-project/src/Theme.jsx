import React from 'react'
import { createContext , useState } from 'react';

export const th = createContext();

const Theme = ({prop}) => {
const [theme , setTheme] = useState("light");

  return (
    <th.Provider value={{theme,setTheme}}>{prop}</th.Provider>
  )
}

export default Theme