import axios from 'axios';
const API_URL = 'https://ski-rent-api.herokuapp.com/api'
const signHeaders = {
  headers: {
      "Content-Type": "application/json",
      "Cookie": ""
  }
}

export async function Get(endpoint){
  try{
      const data = await axios.get(`${API_URL}${endpoint}`);
      return data.data
  } catch (err){
      return []
  }
}

export async function GetAll(endpoint){
  const Headers = {
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1NTc4NDU4NTQsInN1YiI6NDR9.3jPBhF3cPqPDCyXPSxpD4bu4Kai9m56L3yRTVulmcpk",
      "Cookie": ""
    }
}

  try{
      const data = await axios.get(`${API_URL}${endpoint}`);
      return data.data
  } catch (err){
      return []
  }
}

export async function Post(endpoint, name, daily_price_cents){
    const Headers = {
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1NTc4NDU4NTQsInN1YiI6NDR9.3jPBhF3cPqPDCyXPSxpD4bu4Kai9m56L3yRTVulmcpk",
        "Cookie": ""
      }
  }

  try{
      var data = {
        item: {
          name: name,
          daily_price_cents: daily_price_cents
        }
    }

      const msg= await axios.post(`${API_URL}${endpoint}`, data, Headers);
      return msg.data
    } catch(error) {
        console.log(error)
    }
}

export async function Patch(endpoint, name, city_id){
  const Headers = {
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1NTc4NDU4NTQsInN1YiI6NDR9.3jPBhF3cPqPDCyXPSxpD4bu4Kai9m56L3yRTVulmcpk",
      "Cookie": ""
    }
}

try{
    var data = {
      user: {
        name: name,
        city_id: city_id
      }
  }

  const msg= await axios.patch(`${API_URL}${endpoint}`, data, Headers);
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
    console.log(token.data)
    return token.data
    } catch(error) {

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
    console.log(token.data)
    return token.data
    } catch(error) {
        console.log(error)
    }
}

