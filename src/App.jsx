
import { createContext, useState } from 'react'
import Btn from './components/Btn'
export const context = createContext(); 
function App() {
  let [theme,setTheme] = useState('black');

  return (
    <>
      <context.Provider value = {{theme,setTheme}}>
        <Btn />
      </context.Provider>
    </>
  )
}

export default App
