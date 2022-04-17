import { createContext, useState } from "react";

const Context = createContext()

function ContextProvider({ children }) {
  const [ role, setRole ] = useState(2)

  const value = { role, setRole }

  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  )
}

export { Context, ContextProvider }