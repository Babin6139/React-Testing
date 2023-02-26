import React,{useState} from 'react'
import "./style.css"

function Button({text}) {
    const [showText,setShowText]=useState(false);

    const handleOnClick=()=>{
        setShowText(!showText);
    }
  return (
    <div className="button">
        <button data-testid="Button_Id" onClick={handleOnClick}>
            Click me
        </button>
        {showText&&<div>{text}</div>}
    </div>
  )
}

export default Button