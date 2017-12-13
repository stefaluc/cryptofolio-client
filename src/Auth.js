class Auth {
  static token = null;
  static storageKey = 'cryptfolioToken';

  static isAuth() {
    return (this.getToken() !== null)
  }

  static getToken() {
    if (!this.token) {
      this.token = localStorage.getItem(this.storageKey);
    }
    return this.token;
  }

  static setToken(token) {
    this.token = token;
    localStorage.setItem(this.storageKey, token);
  }

  static deleteToken() {
    this.token = null;
    localStorage.removeItem(this.storageKey);
  }
}

export default Auth;
