import React, { useState, useEffect } from "react";
import AddPet from "./AddPet";

function PetCards() {
  const [pets, setPets] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    async function fetchPets() {
      const response = await fetch("https://api.npoint.io/c8558d68d7e62fac90c9/pets/");
      const data = await response.json();
      setPets(data);
    }
    fetchPets();
  }, []);

  function handleAddPet(newPet) {
    setPets([...pets, newPet]);
  }

  function handleDeletePet(id) {
    setPets(pets.filter((pet) => pet.id !== id));
  }

  const filteredPets = pets.filter((pet) =>
    pet.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <AddPet onAddPet={handleAddPet} />
      <input
        type="text"
        placeholder="Search pets by name"
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
      />
      {filteredPets.map((pet) => (
        <div key={pet.id}>
          <h2>{pet.name}</h2>
          <p>{pet.description}</p>
          <button onClick={() => handleDeletePet(pet.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default PetCards;
