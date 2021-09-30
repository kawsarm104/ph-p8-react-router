import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import User from '../user/User';

const Users = () => {
    const [users, setUsers ] = useState([])

    useEffect(() => {
       fetch('https://jsonplaceholder.typicode.com/users/')
        .then(res => res.json())
           .then(data => {
               setUsers(data)
               console.log("from line 11 in users component",data);
           })
    },[])
    return (
    <>
        { users.length === 0 ?<div className="text-center"> <Spinner  animation="grow" variant="primary" /> </div>: <div className="row text-center ">
            
            {users.map(user => <User key={user.id} user={user}/>)}
        </div>}
       </>
    );
};

export default Users;