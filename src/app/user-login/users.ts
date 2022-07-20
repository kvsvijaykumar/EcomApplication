export interface User {
    id: string;
    name: string;
    phone: string;
    emailid: string;
    gender: string;
    address: string;
    username: string;
    password: string;
    type: string
  }

export const nullUser : User = {
    id : '',
    name : '',
    phone : '',
    emailid : '',
    gender : '',
    address : '',
    username : '',
    password : '',
    type : ''
};