import React, { useState } from "react";

const UserRow = ({ user, onUpdateUser, onDeleteUser }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [deleting, setDeleting] = useState(false);

  const [name, setName] = useState(user.name);
  const [age, setAge] = useState(user.age);
  const [role, setRole] = useState(user.role);
  const [status, setStatus] = useState(user.status);

const handleDone = () => {
  const updatedUser = {
    ...user,
    name: name,
    age: age,
    role: role,
    status: status,
  };

  onUpdateUser(updatedUser);

  setIsEditing(false);
};
  const handleDelete = () => {
    const confirmDelete = window.confirm(
      `Are you sure you want to delete ${user.name}?`,
    );

    if (confirmDelete) {
      onDeleteUser(user._id);
    }
  };

  return (
    <tr className={isEditing ? "editing-row" : ""}>
      {/* Name */}
      <td>
        <div className="user-info">
          <div className="avatar">{name.charAt(0).toUpperCase()}</div>

          {isEditing ? (
            <input
              className="edit-input name-input"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          ) : (
            <span>{user.name}</span>
          )}
        </div>
      </td>

      {/* Age */}
      <td>
        {isEditing ? (
          <input
            className="edit-input age-input"
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        ) : (
          user.age
        )}
      </td>

      {/* Status */}
      <td>
        {isEditing ? (
          <select
            className="edit-select"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
        ) : (
          <span
            className={
              user.status === "Active" ? "status active" : "status inactive"
            }
          >
            <span className="status-dot"></span>
            {user.status}
          </span>
        )}
      </td>

      {/* Role */}
      <td>
        {isEditing ? (
          <input
            className="edit-input role-input"
            type="text"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          />
        ) : (
          user.role
        )}
      </td>

      {/* Actions */}
      <td>
        <div className="action-buttons">
          {isEditing ? (
            <button className="done-btn" onClick={handleDone}>
              Done
            </button>
          ) : (
            <button className="edit-btn" onClick={() => setIsEditing(true)}>
              Edit
            </button>
          )}

          <button className="delete-btn" onClick={handleDelete}>
            Delete
          </button>
        </div>
      </td>
    </tr>
  );
};

export default UserRow;
