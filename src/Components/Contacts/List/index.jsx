import { useState } from 'react'

import style from "./style.module.css";

function List({contacts}) {

  const [filterText, setFilterText] = useState("");

  const filtred = contacts.filter(
    (item) => {
      return Object.keys(item).some(
        (key) => item[key].toString().toLowerCase().includes(filterText.toLocaleLowerCase())
      )
    }
  )
  
  return (
    <div className={style.firstHalf}>
      <input className={style.put} placeholder='Search someone' value={filterText} onChange= { (e) => setFilterText(e.target.value)}  />
      

      <ul className={style.point}>
        
        {filtred.map( (contacts, i) => (
          <li key={i} className={style.dec} style={ {backgroundColor: "rgb(56, 85, 247)"} }>
            <span>{contacts.fullname}</span>
            <span>{contacts.phone}</span>
           
          </li>
        ))}
        
      </ul>

    

      <p><span className={style.total}>Total Contacts: {filtred.length}</span></p>
    </div>
  )
}

export default List;
