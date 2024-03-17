class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }

  logMeIn() {
    console.log(`${this.username} just logged in.`);
    console.table(this);
  }
}

class Admin extends User {
  constructor(username, email, password, isAdmin) {
    super(username, email, password);
    this.isAdmin = isAdmin;
  }

  logMeIn() {
    super.logMeIn();
    console.log("I am admin");
  }
}

user1 = new User("Kushagra", "kush@gmail.com", "password");
user1.logMeIn();

user2 = new Admin("Someone", "s@gmail.com", "1234", true);
user2.logMeIn();
