import axios from 'axios';
import React, { useState } from 'react';
import instance from '../../util/axios-setting';

function AdminUserDB() {
  const token = localStorage.getItem('jwt');
  instance
    .get(`/api/users`, {
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
