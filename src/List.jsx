import React from "react";

function List() {
  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: value,
    }));
  };
  const loadStoredData = () => {
    const storedFirstName = localStorage.getItem("firstName");
    const storedLastName = localStorage.getItem("lastName");
    const storedAge = localStorage.getItem("age");

    setFirstName(storedFirstName || ""); // Eğer kayıt yoksa boş string ata
    setLastName(storedLastName || "");
    setAge(storedAge || "");
  };
  return <div>List</div>;
}

export default List;
