import React, { useState } from "react";
import "./Home.css";
function Home({ handleSubmit }) {
  const [item, setItem] = useState([]);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [showForm, setShowForm] = useState(false);

  const createForm = () => {
    setShowForm(true);
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();

    handleSubmit(e, firstName, lastName, age);

    setFirstName("");
    setLastName("");
    setAge("");

    setShowForm(false);
  };
  if (showForm) {
    return (
      <div>
        <h1>Ad, Soyad ve Yaş Girişi</h1>
        <form className="form" onSubmit={handleFormSubmit}>
          <div className="name">
            <label>Ad:</label>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>
          <div className="lastname">
            <label>Soyad:</label>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
          <div className="age">
            <label>Yaş:</label>
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              required
            />
          </div>
          <button className="send-button" type="submit">
            Gönder
          </button>
        </form>
      </div>
    );
  } else {
    return (
      <div>
        <button className="form-button" onClick={createForm}>
          Form Oluştur
        </button>
      </div>
    );
  }
}

export default Home;
