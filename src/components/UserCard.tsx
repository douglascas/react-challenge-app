import React from 'react';

const UserCard = ({ user }) => {
  return (
    <div className="card mb-3 shadow-sm">
      <div className="card-body">
        <h5 className="card-title">{user.name}</h5>
        <p className="card-text">{user.email}</p>
      </div>
    </div>
  );
};

export default UserCard;