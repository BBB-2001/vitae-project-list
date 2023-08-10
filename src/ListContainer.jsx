import React, { useEffect } from "react";
import List from "./List";
import "./ListContainer";
const ListContainer = ({ userList, setUserList }) => {
  const removeList = (id) => {
    const updatedUserList = userList.filter((item) => item.id !== id);
    setUserList(updatedUserList);
    localStorage.setItem("userList", JSON.stringify(updatedUserList));
    return;
  };

  return (
    <div className="container">
      {userList?.length > 0 ? (
        userList.map((item) => (
          <List
            key={item.id}
            firstName={item.firstName}
            lastName={item.lastName}
            age={item.age}
            removeList={() => removeList(item.id)}
          />
        ))
      ) : (
        <h3>No Item Present</h3>
      )}
    </div>
  );
};

export default ListContainer;
