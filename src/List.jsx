import React from "react";
import "./List.css";
import { BsFillTrash3Fill } from "react-icons/bs"; // GrCloseCircle ikonunu doğru şekilde import edin

const List = ({ firstName, lastName, age, removeList }) => {
  return (
    <div className="list">
      <BsFillTrash3Fill onClick={removeList} className="close" />

      <div className="list-items">
        <p> Ad: {firstName}</p>
        <p> Soyad: {lastName}</p>
        <p> Yaş: {age}</p>
      </div>
    </div>
  );
};

export default List;
