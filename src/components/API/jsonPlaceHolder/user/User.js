import React from "react";
import { Link, useHistory } from "react-router-dom";
import "./User.css";
const User = (props) => {
  // console.log(props);
  const history = useHistory()
  const { id, name, username, email } = props.user;
  const handleButton = () => {
    history.push(`/User/${id}`);
  }
  return (
    <div className="col border m-3 p-2 rounded shadow">
      <h3>{name}</h3>
      <h4>{username}</h4>
      <h4>{email}</h4>
      {/* <Link to={`/User/${id}`}>Click me</Link> */}
      {/* <Link to={`/User/${id}`}><button className="btn btn-primary">Details</button></Link> */}
       <button onClick={handleButton} className="btn btn-primary">History</button>
    </div>
  );
};

export default User;
