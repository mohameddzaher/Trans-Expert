const firebaseConfig = {
    apiKey: "AIzaSyCKJdnfFKRVmaI-Ny1S4UC2oIOC6kjw9Lg",
    authDomain: "transexpert-a6477.firebaseapp.com",
    databaseURL: "https://transexpert-a6477-default-rtdb.firebaseio.com",
    projectId: "transexpert-a6477",
    storageBucket: "transexpert-a6477.appspot.com",
    messagingSenderId: "73890271057",
    appId: "1:73890271057:web:833f540e99a7327f3acd70"
};

// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
    e.preventDefault();

    var fname = getElementVal('fname');
    var lname = getElementVal('lname');
    var country = getElementVal('country');
    var msgContent = getElementVal('subject');

    saveMessages(fname, lname, country, msgContent);

    //   enable alert
    document.querySelector(".alert").style.display = "block";

  //   remove the alert
    setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
}, 2500);

 //   reset the form
    document.getElementById("contactForm").reset();
}

const saveMessages = (fname, lname, country, msgContent) => {
    var newContactForm = contactFormDB.push();

    newContactForm.set({
        fname: fname,
        lname: lname,
        country: country,
        msgContent: msgContent,
    })
};


const getElementVal = (id) => {
    return document.getElementById(id).value;
};