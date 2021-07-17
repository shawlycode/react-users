import React from "react";

const User = ({ user, index }) => {
  return (
    <div className="user" key={index}>
      <h3 className="user-data">New User Data</h3>
      <hr />
      <h4>Name:{user.name}</h4>
      <p>Email:{user.email}</p>
      <p>Gen:{user.gen}</p>
    </div>
  );
};

export default User;
