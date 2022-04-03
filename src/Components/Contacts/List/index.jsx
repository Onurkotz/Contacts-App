import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import style from "./style.module.css";
import { destroy } from "../../../Redux/contactSlice/contactSlice";

const dataState = (state) => state.contact.items;

function List() {
  const dataVel = useSelector(dataState);

  const [filteredList, setFilteredList] = useState("");
  const filtered = dataVel.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key]
        .toString()
        .toLowerCase()
        .includes(filteredList.toLocaleLowerCase())
    );
  });

  const dispatch = useDispatch();

  const handleDestroy = (id) => {
    if (window.confirm("Emin misiniz?")) {
      dispatch(destroy(id));
    }
  };

  return (
    <div className={style.firstHalf}>
      <input
        className={style.put}
        placeholder="Search someone"
        value={filteredList}
        onChange={(e) => setFilteredList(e.target.value)}
      />

      <ul className={style.point}>
        {filtered.map((item) => (
          <li
            key={item.id}
            id="list"
            className={style.dec}
            style={{ backgroundColor: "rgb(56, 85, 247)" }}
          >
            <a href="tel:{item.tel}">
              <i className="fas fa-phone"></i>
            </a>
            <span>{item.name}</span>
            <span>{item.tel}</span>
            <button
              className={style.close}
              onClick={() => handleDestroy(item.id)}
            >
              X
            </button>
          </li>
        ))}
      </ul>

      <p>
        <span className={style.total}>Total Contacts: {dataVel.length}</span>
      </p>
    </div>
  );
}

export default List;
