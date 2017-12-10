import axios from 'axios'

const baseURL = "http://144.217.89.18:8080/";

class API {
  static login(email, password) {
    var payload = {
      "username": email,
      "password": password
    }
    return new Promise((resolve, reject) => {
      axios.post(baseURL + 'login', payload)
	.then(function (response) {
	  if (response.data.code === 200){
	    resolve();
	  }
	  else if (response.data.code === 204){
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
  static signup(email, password) {
    var payload = {
      "username": email,
      "password": password
    }
    return new Promise((resolve, reject) => {
      axios.post(baseURL + 'signup', payload)
	.then(function (response) {
	  if (response.data.code === 200){
	    resolve();
	  }
	  else if (response.data.code === 204){
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
