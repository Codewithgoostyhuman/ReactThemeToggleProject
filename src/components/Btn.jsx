import React, { useContext,useRef } from 'react'
import {context} from '../App'
import './Btn.css'

const Btn = () => {
  const {theme,setTheme} = useContext(context);
  const btnRef = useRef();
  const bodyRef = useRef(document.body);
  const newTheme = theme === "black"?"white":"black";
  function changeTheme(){
    
    bodyRef.current.style.backgroundColor = newTheme;
    btnRef.current.style.backgroundColor = theme;
    btnRef.current.style.color = newTheme;
    setTheme(newTheme);
  };
 
  return (
    <div className='toggle-btn-div'>
      <button ref = {btnRef} onClick={changeTheme}>{newTheme}</button>
    </div>
  )
}

export default Btn
