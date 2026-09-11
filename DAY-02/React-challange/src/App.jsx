import React, { useState } from "react";
import "./App.css";

const App = () => {
  const users = [
    {
      name: "Rahul",
      age: 22,
      status: "Active",
    },
    {
      name: "Amit",
      age: 17,
      status: "Inactive",
    },
    {
      name: "John",
      age: 25,
      status: "Active",
    },
    {
      name: "Sam",
      age: 15,
      status: "Active",
    },
    {
      name: "David",
      age: 30,
      status: "Inactive",
    },
  ];

  const [status, setStatus] = useState("all");
  const filteredStatus =
    status === "all"
      ? users
      : users.filter((user) => user.status.toLowerCase() === status);

  return (
    <div className="page">
      <div className="table-container">
        <div className="header">
          <div>
            <p className="eyebrow">ADMIN PANEL</p>
            <h1>Users</h1>
            <p className="subtitle">Manage and view all registered users</p>
          </div>

          <div className="user-count">
            <span>{users.length}</span>
            <small>Total Users</small>
          </div>
        </div>

        <div className="filter-container">
          <button
            className={`filter-btn ${status === "all" ? "selected" : ""}`}
            onClick={() => setStatus("all")}
          >
            All
          </button>

          <button
            className={`filter-btn ${status === "active" ? "selected" : ""}`}
            onClick={() => setStatus("active")}
          >
            Active
          </button>

          <button
            className={`filter-btn ${status === "inactive" ? "selected" : ""}`}
            onClick={() => setStatus("inactive")}
          >
            Inactive
          </button>
        </div>

        <div className="table-wrapper">
          <table className="user-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {filteredStatus.map((user) => (
                <tr key={user.name}>
                  <td>
                    <div className="user-info">
                      <div className="avatar">{user.name.charAt(0)}</div>

                      <span>{user.name}</span>
                    </div>
                  </td>

                  <td>{user.age}</td>

                  <td>
                    <span
                      className={
                        user.status === "Active"
                          ? "status active"
                          : "status inactive"
                      }
                    >
                      <span className="status-dot"></span>
                      {user.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default App;
