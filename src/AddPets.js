import React, { useState } from "react";

function AddPet({ onAddPet }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const newPet = { name, description };
    fetch("https://api.npoint.io/c8558d68d7e62fac90c9/pets/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPet),
    })
      .then((response) => response.json())
      .then((data) => {
        onAddPet(data);
        setName("");
        setDescription("");
      });
  }

  return (
    <form id="addform" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
       <input
        type="link"
        placeholder="insert image link"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <button type="submit">Add Pet</button>
    </form>
  );
}

export default AddPet;
