import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addNew } from "../../../Redux/contactSlice/contactSlice";
import style from "./style.module.css";
import { nanoid } from "@reduxjs/toolkit";

function Form() {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [tel, setTel] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(addNew({ id: nanoid(), name, tel }));
    setName("");
    setTel("");
  };

  return (
    <form className={style.secondHalf} onSubmit={handleSubmit}>
      <div>
        <input
          className={style.put}
          name="name"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <input
          className={style.put}
          name="tel"
          placeholder="Phone Number"
          value={tel}
          onChange={(e) => setTel(e.target.value)}
        />
      </div>
      <div>
        <button className={style.glowonhover}>Add</button>
      </div>
    </form>
  );
}

export default Form;
