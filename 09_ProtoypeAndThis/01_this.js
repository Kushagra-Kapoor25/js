function setUsername(username) {
  this.username = username;
}

function createUser(username, email, password) {
  setUsername.call(this, username);
  this.email = email;
  this.password = password;
}

const user = new createUser("Kushagra", "kushagra@gmail.com", "password");
// console.log(user);

const user1 = {
  name: "Kush",
  greet: function () {
    console.log(this);
    //console.log(this.name);
  },
};

// user1.greet();

const user2 = {
  name: "Kushagra",
  greet: () => {
    console.log(this);
  },
};

// user2.greet();

function dance() {
  console.log(this);
}

const dance1 = () => {
  console.log(this);
};

dance1();
