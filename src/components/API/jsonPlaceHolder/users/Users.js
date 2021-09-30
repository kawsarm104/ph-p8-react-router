import React, { useEffect, useState } from 'react';
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
        <div className="row text-center ">
            
            {users.map(user => <User key={user.id} user={user}/>)}
        </div>
    );
};

export default Users;