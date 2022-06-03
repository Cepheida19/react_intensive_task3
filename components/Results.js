import React from "react";
import s from "./Results.module.css";


const Results = (props) => {
    return (
        <div className={s.container}>
        <div className={s.res}>
            <h2>{props.name} {props.lastname}:</h2>
            <div className={s.items}>
              <div><span>Дата рождения:</span> {props.date}</div>
              <div><span>Телефон:</span> {props.phone}</div>
              <div><span>Сайт:</span> {props.site}</div>
              <div><span>О себе:</span> {props.info}</div>
              <div><span>Стек технологий:</span> {props.stack}</div>
              <div><span>Описание последнего проекта:</span> {props.project}</div>
            </div>
        </div>
      </div>
    )
}
export default Results;