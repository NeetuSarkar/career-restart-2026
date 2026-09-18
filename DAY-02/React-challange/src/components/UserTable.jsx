import React from "react";
import UserRow from "./UserRow";

const UserTable = ({ users, onUpdateUser, onDeleteUser }) => {
  return (
    <div className="table-wrapper">
      <table className="user-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Role</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
            <UserRow
              key={user._id}
              user={user}
              onUpdateUser={onUpdateUser}
              onDeleteUser={onDeleteUser}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
