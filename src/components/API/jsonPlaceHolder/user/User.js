import React from "react";
import { Link } from "react-router-dom";
import "./User.css";
const User = (props) => {
  // console.log(props);
  const {id, name, username, email } = props.user;
  return (
    <div className="col border m-3 p-2 rounded shadow">
      <h3>{id}-{name}</h3>
      <h4>{username}</h4>
      <h4>{email}</h4>
      <Link to={`/User/${id}`}>Click me</Link>
      {/*  <button className="btn btn-primary">Details</button> */}
    </div>
  );
};

export default User;
