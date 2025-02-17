import { createContext } from "react"

export const AppContext = createContext();

const ContextProvider = ({ children }) => {
  const phone = "5514515"
  const name = "Rokon"
  return (
    <AppContext.Provider value={{ phone, name }}>
      {children}
    </AppContext.Provider>
  )
}

export default ContextProvider