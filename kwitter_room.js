
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyCMc-B3r_0nim4M2hsnjcdmV0J1fty7sFE",
      authDomain: "kwitter-7dc89.firebaseapp.com",
      databaseURL: "https://kwitter-7dc89-default-rtdb.firebaseio.com",
      projectId: "kwitter-7dc89",
      storageBucket: "kwitter-7dc89.appspot.com",
      messagingSenderId: "380239463825",
      appId: "1:380239463825:web:1b48b52ba771cf17a8c630"
    };
    
    firebase.initializeApp(firebaseConfig);

welcomelabel = localStorage.getItem("loginusername");
document.getElementById("welcomelabelnamealsolabel").innerHTML = welcomelabel;

function addroom() {
      Room_names = document.getElementById("roomaddinput").value;
      firebase.database().ref("/").child(Room_names).update({
            purpose : "addrooms"
      });
      localStorage.setItem("roomaddinput",Room_names);
      window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("roomdiv").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
row = "<div class = 'room_name' id ="+Room_names+" onclick ='RedirectToRoomName(this.id)'>" +Room_names + "</div>";
document.getElementById("roomdiv").innerHTML += row;
      //End code
      });});}
getData();

function RedirectToRoomName(name) {
      localStorage.setItem("roomaddinput",name);
      window.location = "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("loginusername");
      window.location = "index.html";
}

