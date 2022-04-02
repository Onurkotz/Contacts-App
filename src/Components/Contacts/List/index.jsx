import React from "react";
import { useSelector } from "react-redux";

import style from "./style.module.css";

function List() {
  return (
    <div className={style.firstHalf}>
      <input className={style.put} placeholder="Search someone" />

      <ul className={style.point}>
        <li
          id="list"
          className={style.dec}
          style={{ backgroundColor: "rgb(56, 85, 247)" }}
        >
          <a href="tel:543">
            <i className="fas fa-phone"></i>
          </a>
          <span>Onur Koç</span>
          <span>5432985139</span>
          <button id="closer" className={style.close}>
            X
          </button>
        </li>
      </ul>

      <p>
        <span className={style.total}>Total Contacts: 1</span>
      </p>
    </div>
  );
}

export default List;

/*   

{filtred.map( (contacts, i) => (  
          <li id='list' key={i} className={style.dec} style={ {backgroundColor: "rgb(56, 85, 247)"} }>
            <a href='tel:{contacts.phone}'><i className="fas fa-phone"></i></a>
            <span>{contacts.fullname}</span>
            <span>{contacts.phone}</span>
            <button id='closer' onClick={remove} className={style.close}>X</button>
           
          </li>
        ))}

*/
