import { useState } from 'react'

function List({contacts}) {

  const [filterText, setFilterText] = useState("");

  const filtred = contacts.filter(
    (item) => {
      return Object.keys(item).some(
        (key) => item[key].toString().toLowerCase().includes(filterText.toLowerCase())
      )
    }
  )
  
  return (
    <div>
      <input placeholder='Search someone' value={filterText} onChange= { (e) => setFilterText(e.target.value)}  />

      <ul>
        
        {filtred.map( (contacts, i) => (
          <li key={i}>
            <span>{contacts.fullname}</span>
            <span>{contacts.phone}</span>
          </li>
        ))}
        
      </ul>

      <p>Total Contacts: {filtred.length}</p>
    </div>
  )
}

export default List;
