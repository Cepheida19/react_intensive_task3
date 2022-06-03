import React from "react";
import s from "./Buttons.module.css";


const Buttons = (props) => {
    return (
      <div className={s.buttons}>
          <span><button onClick={props.onClick} type={props.type} 
            disabled={props.disabled}
          >{props.text}</button></span>
        </div>
    )
}
export default Buttons;