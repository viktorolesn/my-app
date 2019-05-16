import axios from 'axios';
import {getToken, setToken, signOut} from '../services/storage'

const API_URL = 'https://ski-rent-api.herokuapp.com/api'
//let myToken = "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1NTc5MjU3OTIsInN1YiI6NTZ9.0fu4hzBsKKO9P56GVAfi9RgNFqWkwLFXYZZkgSPbByc";

const signHeaders = {
  headers: {
      "Content-Type": "application/json",
      "Cookie": ""
  }
}

const headers = () => {
  const myToken = getToken();
  const Headers = {
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${myToken}`,
      "Cookie": ""
    }
  }
  return Headers
}

// const Headers = {
//   headers: {
//     "Content-Type": "application/json",
//     "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1NTc5MjY1MDAsInN1YiI6NTd9.i7XkUXMXOUX07dr45TsrdGaz0D-u7JB_L6PB0BgNh0U",
//     "Cookie": ""
//   }
// }

export async function Get(endpoint){
  let data;
  try{
    console.log('headers', headers())
      if (getToken())
        data = await axios.get(`${API_URL}${endpoint}`, headers());
      else
        data = await axios.get(`${API_URL}${endpoint}`);

      return data.data
  } catch (err){
      return []
  }
}

export async function Post(endpoint, data){
  try{
      const msg= await axios.post(`${API_URL}${endpoint}`, data, headers());
      return msg.data
    } catch(error) {
        console.log(error)
    }
}

export async function Patch(endpoint, name){
try{
    var data = {
      user: {
        name: name
      }
  }

  const msg= await axios.patch(`${API_URL}${endpoint}`, data, headers());
  return msg.data
  } catch(error) {
      console.log(error)
  }
}

export async function Delete(endpoint, id){
  try{
      var data = {
        item: {
          id: id,  
        }
    }

      const msg= await axios.delete(`${API_URL}${endpoint}${id}`, data, headers());
      return msg.data
    } catch(error) {
        console.log(error)
    }
}


export async function signUp(endpoint, email, password){
  try{
    var data = {
        user: {
            email: email,
            password: password
        }

    }
    const token = await axios.post(`${API_URL}${endpoint}`, data, signHeaders)
    console.log("EMAIL-PASSWORD", data)
    return token.data
    } catch(error) {
      console.log("SIGN UP", error)
      return 0;
    }
}

export async function logIn(endpoint, email, password){
  try{
    var data = {
        auth: {
            // "my3_personal_email@gmail.com", "123456789"
            email: email,
            password: password
        }
    }
    const token = await axios.post(`${API_URL}${endpoint}`, data, signHeaders)
    return token.data
    } catch(error) {
        console.log("LOG IN ERROR",error)
    }
}

