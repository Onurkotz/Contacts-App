import { useState, useEffect } from 'react'

import Form from "./Form";
import List from "./List/";

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
      <h1 style={{color:"blue", textAlign: "center",}}>My Contacts</h1>
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
