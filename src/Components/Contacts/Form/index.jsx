import { useState, useEffect } from 'react';

const initialForm = { fullname: "", phone: ""}


function Form( {addContact, contacts} ) {

  const [form, setForm] = useState(initialForm);
  
  useEffect( () => {setForm(initialForm);}, [contacts]);

  const onChangeInput = (e) => { setForm({...form, [e.targe.name]: e.target.value})};

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("başarılı")
  
    if (form.fullname === "" || form.phone === ""){
      return false;
    }
  
    addContact([...contacts, form]);
  }

  


  return (
    <form onSubmit={onSubmit}>
    <div>
      <input name="fullname" placeholder='Full Name' value={form.fullname} onChange={onChangeInput} />
    </div>
    <div>
      <input name="phone" placeholder='Phone Number' value={form.phone} onChange={onChangeInput} />
    </div>
    <div className='shape'>
      <button>Add</button>
    </div>
    </form>
  )
}

export default Form;
