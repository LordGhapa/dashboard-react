import { createContext, useContext, useState } from 'react'

const StateContext = createContext()

const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false
}
export const ContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(true)
  const [isClicked, setIsClicked] = useState(initialState)
  const [screenSize, setScreenSize] = useState(undefined)

  const handleClick = clicked => {
    setIsClicked({
      ...initialState,
      [clicked]: true
    })
  }

  return (
    <StateContext.Provider
      value={{ activeMenu, setActiveMenu, isClicked, handleClick,screenSize, setScreenSize }}
    >
      {children}
    </StateContext.Provider>
  )
}
// eslint-disable-next-line react-refresh/only-export-components
export const useStateContext = () => useContext(StateContext)
