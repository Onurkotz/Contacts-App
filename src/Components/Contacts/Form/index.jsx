import React from "react";

import style from "./style.module.css";

function Form() {
  return (
    <form className={style.secondHalf}>
      <div>
        <input className={style.put} name="fullname" placeholder="Full Name" />
      </div>
      <div>
        <input className={style.put} name="phone" placeholder="Phone Number" />
      </div>
      <div>
        <button className={style.glowonhover}>Add</button>
      </div>
    </form>
  );
}

export default Form;
