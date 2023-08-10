import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./Navbar";
import Home from "./Home";
import ListContainer from "./ListContainer";

import { v4 as uuidv4 } from "uuid";

import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [userList, setUserList] = useState([]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: value,
    }));
  };

  const handleSubmit = (event, firstName, lastName, age) => {
    event.preventDefault();

    const newUser = {
      id: uuidv4(),
      firstName: firstName,
      lastName: lastName,
      age: age,
    };

    setUserList((prevUserList) => [...prevUserList, newUser]);

    localStorage.setItem("userList", JSON.stringify([...userList, newUser]));
  };

  useEffect(() => {
    const storedUserList = localStorage.getItem("userList");
    if (storedUserList) {
      setUserList(JSON.parse(storedUserList));
    }
  }, []);

  return (
    <Router>
      <Navbar count={userList.length} />
      <Switch>
        <Route exact path="/">
          <Home handleSubmit={handleSubmit} />
        </Route>
        <Route path="/list">
          <ListContainer userList={userList} setUserList={setUserList} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
