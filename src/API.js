import axios from 'axios'

const baseURL = "https://api.cryptfolio.ovh/";
// const baseURL = "http://localhost:8080/";

class API {
  static login(email, password) {
    const payload = {
      "username": email,
      "password": password
    }
    return new Promise((resolve, reject) => {
      axios.post(baseURL + 'auth', payload)
        .then((response) => {
          console.log(response);
          if (response.status === 200){
            resolve(response.data);
          }
          else if (response.status === 204){
            reject("Username password do not match")
          }
          else {
            reject("Username does not exists")
          }
        })
        .catch(function (error) {
          reject(error)
        });
    })
  }
  static signup(email, password, firstName, lastName, currency, gRecaptchaResponse) {
    const payload = {
      "username": email,
      "password": password,
      "firstName": firstName,
      "lastName": lastName,
      "favouriteCurrencyId": currency,
      "gRecaptchaResponse": gRecaptchaResponse,
    }
    return new Promise((resolve, reject) => {
      axios.post(baseURL + 'signup', payload)
        .then((response) => {
          if (response.status === 200){
            resolve();
          }
          else if (response.status === 204){
            reject("Username password do not match")
          }
          else {
            reject("Username does not exists")
          }
        })
        .catch(function (error) {
          reject(error)
        });
    })
  }
}

export default API
