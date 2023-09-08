import axios from 'axios';
import configs from '../config/Config';

//---------Login API------------//
// export async function userLogin(props) {
//   try {
//     let res = await axios.post(`${configs.apiUrl}/user-auth/login`, props);
//     return res;
//   } catch (error) {
//     return error.response;
//   }
// }

//-----------Forgot Password API----------//
export async function userForgotPassword(email) {
  try {
    let res = await axios
      .post(`${configs.apiUrl}/user-auth/forgot-password`, {email})
      .then(response => {
        console.log('res 1 = ', response.data);
        console.log('res 2 = ', response.status);
        console.log('res 3 = ', response.statusText);
        console.log('res 4 = ', response.headers);
        console.log('res 5 = ', response.config);
      })
      .catch(err => {
        console.log(' Main err ', err.response.data);
        console.log(' Main err ', err.response);
      });
    return res.data;
  } catch (error) {
    console.log('error 1', error);
  }
}

//------------------Get Banner API-----------//
export const getBanner = async() => {
  try {
  const res =   await axios
      .get('http://103.127.29.85:3006/api/admin-banner/get-banners')
    return res;
  } catch (error) {
    return error;
  }
}
