import './App.css';
import React, { useEffect, useState } from "react";
import Results from './components/Results';
import Inputs from './components/Inputs';
import Textareas from './components/Textareas';
import Buttons from './components/Buttons';

function App() {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [dateInfo, setDate] = useState("");
  const [phone, setPhone] = useState("");
  const [site, setSite] = useState("");
  const [info, setInfo] = useState("");
  const [stack, setStack] = useState("");
  const [project, setProject] = useState("");

  const [nameDirty, setNameDirty] = useState(false);
  const [lastnameDirty, setLastnameDirty] = useState(false);
  const [dateDirty, setDateDirty] = useState(false);
  const [phoneDirty, setPhoneDirty] = useState(false);
  const [siteDirty, setSiteDirty] = useState(false);
  const [infoDirty, setInfoDirty] = useState(false);
  const [stackDirty, setStackDirty] = useState(false);
  const [projectDirty, setProjectDirty] = useState(false);

  const [nameError, setNameError] = useState("Поле пустое, заполните, пожалуйста");
  const [lastnameError, setLastnameError] = useState("Поле пустое, заполните, пожалуйста");
  const [dateError, setDateError] = useState("Поле пустое, заполните, пожалуйста");
  const [phoneError, setPhoneError] = useState("Поле пустое, заполните, пожалуйста");
  const [siteError, setSiteError] = useState("Поле пустое, заполните, пожалуйста");
  const [infoError, setInfoError] = useState("Поле пустое, заполните, пожалуйста");
  const [stackError, setStackError] = useState("Поле пустое, заполните, пожалуйста");
  const [projectError, setProjectError] = useState("Поле пустое, заполните, пожалуйста");

  const [formValid, setFormValid] = useState(false);
  const [flag, setFlag] = useState(false);
  const [flagColor, setFlagColor] = useState(false);

  const [counterProject, setCounterProject] = useState(273);
  const [counterStack, setCounterStack] = useState(273);
  const [counterInfo, setCounterInfo] = useState(273);

  useEffect(() => {
    if(nameError || lastnameError || dateError || phoneError || siteError || infoError || stackError || projectError){
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [nameError, lastnameError, dateError, phoneError, siteError, infoError, stackError, projectError])


  const nameHandler = (e) => {
    setName(e.target.value);
    const re = /^[A-ZА-Я]/g;
    if (!re.test(String(e.target.value))){
      setNameError("Имя должно начинаться с большой буквы");
      if(!e.target.value){
        setNameError("Поле пустое, заполните пожалуйста");
      }
    } else {
      setNameError("");
    }
  }

  const lastnameHandler = (e) => {
    setLastname(e.target.value);
    const re = /^[A-ZА-Я]/g;
    if (!re.test(String(e.target.value))){
      setLastnameError("Фамилия должна начинаться с большой буквы");
      if(!e.target.value){
        setLastnameError("Поле пустое, заполните пожалуйста");
      }
    } else {
      setLastnameError("");
    }
  }

  const dateHandler = (e) => {
    setDate(e.target.value);
    const re = /^\d{4}\-/;
    const year1 = /^19/;
    const year2 = /^20/;
    if (!re.test(String(e.target.value))){
      setDateError("Год должен состоять из 4х цифр");
      if(!e.target.value){
        setDateError("Поле пустое, заполните пожалуйста");
      }
    } else if(!year1.test(String(e.target.value)) && !year2.test(String(e.target.value))){
      setDateError("Год должен начинаться с 19.. или с 20..");
    } else {
      setDateError("");
    }
  }

  const phoneHandler = (e) => {
    setPhone(e.target.value);
    const re = /^\d+$/g;
    if (!re.test(String(e.target.value))){
      setPhoneError("Номер телефона должен содержать только цифры!");
      if(!e.target.value){
        setPhoneError("Поле пустое, заполните пожалуйста");
      }
    } else if (e.target.value.length > 12 || e.target.value.length < 10) {
      setPhoneError("Номер телефона должен содержать от 10 до 12 цифр");
    } else {
      setPhoneError("");
    }
  }

  const siteHandler = (e) => {
    setSite(e.target.value);
    const re = /^https:\/\/.+/;
    if (!re.test(String(e.target.value))){
      setSiteError("Сайт должен начинаться с https://");
      if(!e.target.value){
        setSiteError("Поле пустое, заполните пожалуйста");
      }
    } else {
      setSiteError("");
    }
  }

  const infoHandler = (e) => {
    setInfo(e.target.value);
    if(!e.target.value){
      setInfoError("Поле пустое, заполните пожалуйста");
    } else {
      setInfoError("");
    }
  }

  const stackHandler = (e) => {
    setStack(e.target.value);
    if(!e.target.value){
      setStackError("Поле пустое, заполните пожалуйста");
    } else {
      setStackError("");
    }
  }

  const projectHandler = (e) => {
    setProject(e.target.value);
    if(!e.target.value){
      setProjectError("Поле пустое, заполните пожалуйста");
    } else {
      setProjectError("");
    }
  }

  const blurHandler = (e) => {
    switch (e.target.name){
      case "name":
        setNameDirty(true);
        break;
      case "lastname":
        setLastnameDirty(true);
        break;
      case "dateInfo":
          setDateDirty(true);
        break;
      case "phone":
        setPhoneDirty(true);
        break;
      case "site":
        setSiteDirty(true);
        break;
      case "info":
          setInfoDirty(true);
        break;
      case "stack":
          setStackDirty(true);
        break;
      case "project":
          setProjectDirty(true);
        break;
    }
    setFlagColor(false);
  }

  const handleShow = (e) => {
    e.preventDefault();
    setFlag(true);
  }

  const handleReset = (e) => {
    setFlagColor(true);
    setName("");
    setLastname("");
    setDate("");
    setPhone("");
    setSite("");
    setInfo("");
    setStack("");
    setProject("");

    setCounterProject(273);
    setCounterStack(273);
    setCounterInfo(273);
  }
  const changeCountProject = (e) => {
    setCounterProject(counterProject);
    if(counterProject > 0){
      setCounterProject(Number(counterProject) - 1);
    } else {
      setCounterProject(counterProject);
    }
  }

  const changeCountStack = (e) => {
    setCounterStack(counterStack);
    if(counterStack > 0){
      setCounterStack(Number(counterStack) - 1);
    } else {
      setCounterStack(counterStack);
    }
  }

  const changeCountInfo = (e) => {
    setCounterInfo(counterInfo);
    if(counterInfo > 0){
      setCounterInfo(Number(counterInfo) - 1);
    } else {
      setCounterInfo(counterInfo);
    }
  }

  if (flag){
    return (
      <Results name={name} lastname={lastname} date={dateInfo} phone={phone} site={site} info={info} stack={stack} project={project}/>
    )
  } else {
  return (
    <div className='container'>
      <div className='wrap'>
      <h2>Создание анкеты</h2>
        <form className='form'>

          {/* {(nameDirty && nameError) && <div className={flagColor ? "commentEmpty" : "comment" }>{nameError}</div>}
          <Inputs  text="Имя:" onChange={e => nameHandler(e)} 
            value={name} onBlur={e => blurHandler(e)} name="name" type="text" placeholder="ваше имя"
          /> */}
          <div className='item'>{(nameDirty && nameError) && <div className={flagColor ? "commentEmpty" : "comment" }>{nameError}</div>}
            <label>Имя:<input onChange={e => nameHandler(e)} value={name} onBlur={e => blurHandler(e)} name="name" 
              type="text" placeholder="ваше имя"/></label></div>


          <div className='item'>{(lastnameDirty && lastnameError) && <div  className={flagColor ? "commentEmpty" : "comment" }>{lastnameError}</div>}
            <label>Фамилия:<input onChange={e => lastnameHandler(e)} value={lastname} onBlur={e => blurHandler(e)} 
              name="lastname" type="text" placeholder="ваша фамилия" /></label></div>


          <div className='item'>{(dateDirty && dateError) && <div className={flagColor ? "commentEmpty" : "comment" }>{dateError}</div>}
            <label>Дата рождения:<input onChange={e => dateHandler(e)} value={dateInfo} onBlur={e => blurHandler(e)} 
              name="dateInfo" type="date"/></label></div>


          <div className='item'>{(phoneDirty && phoneError) && <div className={flagColor ? "commentEmpty" : "comment" }>{phoneError}</div>}
            <label>Телефон:<input onChange={e => phoneHandler(e)} value={phone} onBlur={e => blurHandler(e)} name="phone" 
              type="tel" placeholder="7777-777-77-77"/></label></div>


          <div className='item'>{(siteDirty && siteError) && <div className={flagColor ? "commentEmpty" : "comment" }>{siteError}</div>}
          <label>Сайт:<input onChange={e => siteHandler(e)} value={site} onBlur={e => blurHandler(e)} name="site" 
            type="url" placeholder="https://example.com"/></label></div>


          <div className='item'>{(infoDirty && infoError) && <div className={flagColor ? "commentEmpty" : "comment" }>{infoError}</div>}
            <label>O себе:<textarea onChange={e => infoHandler(e)} onKeyDown={(e) => changeCountInfo(e)}
              value={info} onBlur={e => blurHandler(e)} name="info" rows="7" cols="39" maxlength="273"
              type="text" placeholder="расскажите о себе"/></label>
            <div className='counters'>Осталось символов: {counterInfo}</div></div>


          <div className='item'>{(stackDirty && stackError) && <div className={flagColor ? "commentEmpty" : "comment" }>{stackError}</div>}
            <label>Стек технологий:<textarea onChange={e => stackHandler(e)} onKeyDown={(e) => changeCountStack(e)}
              value={stack} onBlur={e => blurHandler(e)} name="stack" rows="7" cols="39" maxlength="273"
              type="text" placeholder="ваш стек"/></label>
            <div className='counters'>Осталось символов: {counterStack}</div></div>


          <div className='item'>{(projectDirty && projectError) && <div className={flagColor ? "commentEmpty" : "comment" }>{projectError}</div>}
            <label>Описание последнего проекта:<textarea onChange={e => projectHandler(e)} onKeyDown={(e) => changeCountProject(e)}
              value={project} onBlur={e => blurHandler(e)} name="project" rows="7" cols="39" maxlength="273" 
              type="text" placeholder="ваш последний проект"/></label>
            <div className='counters'>Осталось символов: {counterProject}</div></div>


            <div className='buttons'>
              <button disabled={!formValid} onClick={e => handleShow(e)} type="submit">Сохранить</button>
              <button onClick={e => handleReset(e)} type="reset">Отмена</button>
            </div>   
        </form>
      </div>
    </div>
  );
  }
}
export default App;
