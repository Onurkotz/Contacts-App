import { useState, useEffect } from 'react'

import Form from "./Form";
import List from "./List/";

import style from "./style.module.css";

function Contacts() {

  const [contacts, setContacts] = useState([
    {
      fullname: "Yaşar Atlı",
      phone: "5575541486",
    },
    {
      fullname: "Muhterem Kılıç",
      phone: "5871546987",
    },
    {
      fullname: "Tuba Hür",
      phone: "5871234587",
    },
  ]);
  
  useEffect(() => { console.log(contacts) }, [contacts])
  
  return (
    <div>
      <div className={style.wall}>
      <h1><span className={style.spn}>My Contacts</span></h1>
      </div>
      
      <div className="row">
        <div className="col-6">
        <List contacts={contacts} />
        </div>
        <div className="col-6">
        <Form addContact={setContacts} contacts={contacts} />
        </div>
      </div>
      
      
    </div>
  )
}

export default Contacts;
