import React, { useState } from "react";

const AddUser = ({ users, setUsers, setShowAddUser }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [role, setRole] = useState("");

  async function createUser() {
    const response = await fetch("http://localhost:5000/api/users",{
      method:"POST",
      headers:{
        "Content-Type":"application/json",
      },
      body: JSON.stringify({
        name,
        age:Number(age),
        role,
        status:"Active"
      })
    })

    const newUser = await response.json();

    
    setUsers([...users, newUser]);

    setName("");
    setAge("");
    setRole("");

    setShowAddUser(false);
  }

  return (
   <div className="modal-overlay">
    <div className="add-user-modal">
      <h1>ADD USER</h1>

      <p>Name:</p>

      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <p>Age:</p>

      <input
        type="number"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />

      <p>Role:</p>

      <input
        type="text"
        value={role}
        onChange={(e) => setRole(e.target.value)}
      />

      <button onClick={createUser}>ADD USER</button>

      <button onClick={() => setShowAddUser(false)}>Cancel</button>
    </div>
    </div>
  );
};

export default AddUser;
