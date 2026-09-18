import React, { useState } from "react";
import "./App.css";
import UserTable from "./components/UserTable";
import FilterButtons from "./components/FilterButtons";
import Header from "./components/Header";
import AddUser from "./components/AddUser";
import { useEffect } from "react";

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const [status, setStatus] = useState("all");
  const filteredStatus =
    status === "all"
      ? users
      : users.filter((user) => user.status.toLowerCase() === status);

  const deleteUser = async (userId) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/users/${userId}`,
        {
          method: "DELETE",
        },
      );

      if (!response.ok) {
        throw new Error("Failed to delete user");
      }

      // Remove deleted user from React state
      setUsers((prevUsers) => prevUsers.filter((user) => user._id !== userId));
    } catch (error) {
      console.log(error);
    }
  };

  const updateUser = async (updatedUser) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/users/${updatedUser._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedUser),
        },
      );

      if (!response.ok) {
        throw new Error("Failed to update user");
      }

      const data = await response.json();

      setUsers((prevUsers) =>
        prevUsers.map((user) => (user._id === data._id ? data : user)),
      );
    } catch (error) {
      console.log(error);
    }
  };

  const [showAddUser, setShowAddUser] = useState(false);

  return (
    <div className="page">
      <div className="table-container">
        <Header users={users} setShowAddUser={setShowAddUser} />

        <FilterButtons status={status} setStatus={setStatus} />

        {filteredStatus.length > 0 ? (
          <UserTable
            users={filteredStatus}
            onUpdateUser={updateUser}
            onDeleteUser={deleteUser}
          />
        ) : (
          <p>No users found.</p>
        )}

        {showAddUser && (
          <AddUser
            users={users}
            setUsers={setUsers}
            setShowAddUser={setShowAddUser}
          />
        )}
      </div>
    </div>
  );
};

export default App;
