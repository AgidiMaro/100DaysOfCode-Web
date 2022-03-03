import "./App.css";
import { persons } from "./data.js";
import React, { useState } from "react";

function App() {
  const [people, setPerson] = useState(persons);

  const remove = (id) => {
    let newPeople = people.filter((person) => person.id !== id);
    setPerson(newPeople);
  };

  return (
    <div className="container">
      <h3>{people.length} birthdays left today</h3>
      {people.map((person) => {
        return (
          <section key={person.id}>
            <img src={person.image} alt="" className="image" />

            <div className="details">
              <h4>{person.name}</h4>
              <p>{person.age} </p>
            </div>
            <button className="done" onClick={() => remove(person.id)}>
              Done
            </button>
          </section>
        );
      })}

      <button className="btn" onClick={() => setPerson([])}>
        Clear All
      </button>
    </div>
  );
}

export default App;
