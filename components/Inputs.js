import React from "react";
import s from "./Inputs.module.css";


const Inputs = (props) => {
  
    return (
      <div className={s.item}>
        <label>{props.text}
          <input onChange={props.onChange} 
            onBlur={props.onBlur} name={props.name}
            placeholder={props.placeholder} type={props.type}
          /> 
        </label>
      </div>
    )
}
export default Inputs;