import React from "react";
import { useSelector } from "react-redux";

import style from "./style.module.css";

const dataState = (state) => state.contact.items;

function List() {
  const dataVel = useSelector(dataState);
  console.log(dataVel)

  return (
    <div className={style.firstHalf}>
      <input className={style.put} placeholder="Search someone" />

      <ul className={style.point}>
        {dataVel.map((item) => (
          <li
            key={item.id}
            id="list"
            className={style.dec}
            style={{ backgroundColor: "rgb(56, 85, 247)" }}
          >
            <a href={item.tel}>
              <i className="fas fa-phone"></i>
            </a>
            <span>{item.name}</span>
            <span>{item.tel}</span>
            <button className={style.close}>X</button>
          </li>
        ))}
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
