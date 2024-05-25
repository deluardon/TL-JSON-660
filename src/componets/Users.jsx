

import React, { useEffect, useState } from 'react';

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('blog-api.json')
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <div className='ml-5'>
      <h1 className=''>Users: {users.length}</h1>
      {

      }
    </div>
  );
};

export default Users;

