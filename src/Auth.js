class Auth {
  static logged = false;
  static token = null;

  static isAuth() {
    return (this.token !== null)
    //return true
  }

  static getToken() {
    return this.token;
  }

  static setToken(token) {
    this.token = token;
    this.logged = true;

    localStorage.setItem('cryptfolioToken', token);
  }
}

export default Auth;
