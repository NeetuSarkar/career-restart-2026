import React from "react";

const Header = ({ users, setShowAddUser }) => {
  return (
    <div className="header">
      <div>
        <p className="eyebrow">ADMIN PANEL</p>

        <h1>Users</h1>

        <p className="subtitle">Manage and view all registered users</p>
      </div>

      <div className="header-actions">
        <button className="add-user-btn" onClick={() => setShowAddUser(true)}>
          + Add User
        </button>

        <div className="user-count">
          <span>{users.length}</span>
          <small>Total Users</small>
        </div>
      </div>
    </div>
  );
};

export default Header;
