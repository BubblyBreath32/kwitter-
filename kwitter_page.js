//YOUR FIREBASE LINKS
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

username = localStorage.getItem("loginusername");
room_name = localStorage.getItem("roomaddinput");

function onclick() {
      msgstore = document.getElementById("send_me_the_message").value;
      firebase.database().ref(room_name).push({
            name:username,
            message:msgstore,
            likes:0
      });
}

function logout() {
      localStorage.removeItem("loginusername");
      localStorage.removeItem("roomaddinput");
      window.location.replace("index.html");
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("blank_div").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;

console.log(firebase_message_id);
console.log(message_data);
name = message_data['name'];
message = message_data['message'];
like = message_data['like'];
name_with_tag="<h4> "+ name +"<img class='user_tick' src='tick.png'></h4>";
message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
like_button="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike (this.id)'>";
span_with_tag="<span class='glyphicon glyphicon-thumbs-up'>Like: "+like +"</span></button><hr>";
row = name_with_tag + message_with_tag +like_button + span_with_tag;
document.getElementById("blank_div").innerHTML += row;
//End code
      } });  }); }
getData();

      function updateLike (message_id)
      {
      console.log("clicked on like button - " + message_id); 
      button_id = message_id;
      likes = document.getElementById(button_id).value; 
      updated_likes = Number(likes) + 1;
      console.log(updated_likes);
      firebase.database().ref (room_name).child (message_id).update({ 
      like : updated_likes
      });
      }