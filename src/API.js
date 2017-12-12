import axios from 'axios'

const baseURL = "https://api.cryptfolio.ovh/";
// const baseURL = "http://localhost:8080/";

class API {
  static login(email, password) {
    const payload = {
      "username": email,
      password,
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
    });
  }

  static signup(email, password, firstName, lastName, favouriteCurrencyID, gRecaptchaResponse) {
    const payload = {
      "username": email,
      password,
      firstName,
      lastName,
      favouriteCurrencyID,
      gRecaptchaResponse,
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
        .catch((error) => {
          reject(error)
        });
    });
  }

  static getBalances() {
    const token = localStorage.getItem('cryptfolioToken');

    return new Promise((resolve, reject) => {
      axios.get(baseURL + 'auth/balances?token=' + token)
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  static getTransactions() {
    const token = localStorage.getItem('cryptfolioToken');

    return new Promise((resolve, reject) => {
      axios.get(baseURL + 'auth/transactions?token=' + token)
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  static getCurrencies() {
    const token = localStorage.getItem('cryptfolioToken');

    return new Promise((resolve, reject) => {
      axios.get(baseURL + 'auth/currencies?token=' + token)
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  static insertBalance(cryptocurrencyID, quantity) {
    const payload = {
      cryptocurrencyID,
      quantity,
    }
    const token = localStorage.getItem('cryptfolioToken');

    return new Promise((resolve, reject) => {
      axios.post(baseURL + 'auth/balance?token=' + token, payload)
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  static insertTransaction(balanceID, quantity, price, date) {
    const payload = {
      quantity,
      price,
      date,
    }
    const token = localStorage.getItem('cryptfolioToken');

    return new Promise((resolve, reject) => {
      axios.post(baseURL + 'auth/balance/' + balanceID + '?token=' + token, payload)
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
}

export default API
