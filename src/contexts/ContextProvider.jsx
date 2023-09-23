import { createContext, useContext, useEffect, useState } from 'react'

const StateContext = createContext()

const initialState = {
  chat: false,
  userProfile: false,
  notification: false
}
export const ContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(false)
  const [isClicked, setIsClicked] = useState(initialState)

  const [currentColor, setCurrentColor] = useState('#03C9D7')
  const [currentMode, setCurrentMode] = useState('Light')
  const [themeSettings, setThemeSettings] = useState(false)

  useEffect(() => {
    const tema = localStorage.getItem('themeMode')
    if(tema==="Dark"){
      setCurrentMode(tema)
    }
  }, [])

  const setMode = e => {
    setCurrentMode(e.target.value)
    localStorage.setItem('themeMode', e.target.value)

    // setThemeSettings(false)
  }
  const setColor = color => {
    setCurrentColor(color)
    localStorage.setItem('colorMode', color)
    // setThemeSettings(false)
  }

  const handleClick = clicked => {
    setIsClicked({
      ...initialState,
      [clicked]: true
    })
  }

  return (
    <StateContext.Provider
      value={{
        activeMenu,
        setActiveMenu,
        isClicked,
        handleClick,
        currentColor,
        currentMode,
        setMode,
        setColor,
        themeSettings,
        setThemeSettings
      }}
    >
      {children}
    </StateContext.Provider>
  )
}
// eslint-disable-next-line react-refresh/only-export-components
export const useStateContext = () => useContext(StateContext)
