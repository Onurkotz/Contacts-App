import React from "react";

import Form from "./Form";
import List from "./List/";

import style from "./style.module.css";

function Contacts() {

  
  return (
    <div>
      <div className={style.wall}>
        <h1>
          <span className={style.spn}>My Contacts</span>
        </h1>
      </div>

      <div className="row">
        <div className="col-6">
          <List />
        </div>
        <div className="col-6">
          <Form />
        </div>
      </div>
    </div>
  );
}

export default Contacts;
