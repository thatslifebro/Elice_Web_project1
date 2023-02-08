import axios from 'axios';
import React, { useState } from 'react';

function AdminUserDB() {
  const token = localStorage.getItem('jwt');
  axios
    .get(`${process.env.REACT_APP_SERVER_ADDRESS}/api/users`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => {
      console.log(res.data);
    })
    .catch(() => console.log('error'));

  return (
    <div>
      <h1>hello</h1>
    </div>
  );
}

export default AdminUserDB;
