// import { api } from './api';

export const signIn = ({ username, password }) => {
  return new Promise(resolve => {
    resolve({ username, password });
  });
  // return api.post('/', {
  //   username,
  //   password
  // });
};
