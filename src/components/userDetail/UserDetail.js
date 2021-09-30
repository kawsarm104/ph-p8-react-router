import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";

const UserDetail = () => {
  let { userId } = useParams();
  const [user, setUser] = useState({});
  // console.log("from user details",params);
    const history = useHistory()
  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/users/${userId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);
  const { name, username, email, phone, website, company } = user;
  return (
    <div className=" m-3 p-3 border rounded shadow  align-items-start">
      <h3>User Name: {username}</h3>
      <h3>Name:{name}</h3>
      <h3>Email:{email}</h3>
      <h3>Phone:{phone}</h3>
      <h3>Website:{website}</h3>
          <p>company: {company?.name}</p>
          <button onClick={()=>history.push('/users')} className="btn btn-primary">Go back</button>
    </div>
  );
};

export default UserDetail;
