import axios from 'axios';

export const verifyTokken = () => {
  const jwt = localStorage.getItem('jwt');
  if (!jwt) {
    return new Promise(() => {
      return 'NOTUSER';
    });
  }
  const tokken = 'Bearer ' + jwt;
  return axios
    .get(`${process.env.REACT_APP_SERVER_ADDRESS}/api/auth/verify`, {
      headers: { Authorization: tokken },
    })
    .then((res) => {
      return res.data.role;
    });
};
