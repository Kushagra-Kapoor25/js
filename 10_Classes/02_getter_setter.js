class User {
  constructor(email, password, age) {
    this.email = email;
    this.password = password;
    this._age = age;
  }

  get password() {
    return this._password.toUpperCase();
  }

  set password(value) {
    this._password = value;
  }
  get age() {
    return;
  }
  set age(value) {
    return;
  }
}

const kushagra = new User("k@gmail.com", "abc", 23);
console.log(kushagra.age);
