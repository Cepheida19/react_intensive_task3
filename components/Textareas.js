import React from "react";
import s from "./Textareas.module.css";


const Textareas = (props) => {
    return (
      <div className={s.item}>
      <label>{props.text}
        <textarea onChange={props.onChange} 
          onBlur={props.onBlur} name={props.name}
          placeholder={props.placeholder} type={props.type}
          rows={props.rows} cols={props.cols} maxlength={props.maxlength}
        /> 
      </label>
    </div>
    )
}
export default Textareas;