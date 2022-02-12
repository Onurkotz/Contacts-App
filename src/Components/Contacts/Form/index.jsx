import { useState, useEffect } from 'react';

import style from "./style.module.css";

const initialForm = { fullname: "", phone: ""}


function Form( {addContact, contacts} ) {

  const [form, setForm] = useState(initialForm);
  
  useEffect( () => {setForm(initialForm);}, [contacts]);

  const onChangeInput = (e) => { setForm({...form, [e.target.name]: e.target.value})};

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("başarılı")
  
    if (form.fullname === "" || form.phone === ""){
      return false;
    }
  
    addContact([...contacts, form]);
  }



  return (
    <form onSubmit={onSubmit} className={style.secondHalf}>
    <div>
      <input className={style.put} name="fullname" placeholder='Full Name' value={form.fullname} onChange={onChangeInput} />
    </div>
    <div>
      <input className={style.put} name="phone" placeholder='Phone Number' value={form.phone} onChange={onChangeInput} />
    </div>
    <div>
    
      <button className={style.glowonhover}>Add</button>
      
    </div>
    </form>
  )
}

export default Form;
