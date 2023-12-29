const firebaseConfig = {
    apiKey: "AIzaSyCJjAwa8Y1kY9LVhiG7XQDZef748jQUwy4",
    authDomain: "pharmacy-management-syst-88b15.firebaseapp.com",
    databaseURL: "https://pharmacy-management-syst-88b15-default-rtdb.firebaseio.com",
    projectId: "pharmacy-management-syst-88b15",
    storageBucket: "pharmacy-management-syst-88b15.appspot.com",
    messagingSenderId: "805666519177",
    appId: "1:805666519177:web:709e4a01406cb03c1a6e58",
    measurementId: "G-P2NLQW0ZWV"
  };
  firebase.initializeApp(firebaseConfig);
  var contactFormDB = firebase.database().ref("pharmacy-management-syst");

document.getElementById("pharmacy").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var username = getElementVal("username");
  var password = getElementVal("password");

  saveMessages(username, password);


  //   reset the form
  document.getElementById("pharmacy").reset();
}

const saveMessages = (username, password) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    username: username,
    password: password,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};