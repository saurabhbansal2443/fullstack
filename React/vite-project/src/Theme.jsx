import React from 'react'
import { createContext  } from 'react';

export const ThemeContext = createContext();

const Theme = ({children}) => {
    const [theme,setTheme] = React.useState("light");
  return (
    <ThemeContext.Provider value={{theme,setTheme}}>{children}</ThemeContext.Provider>
  )
}

export default Theme