 function login() {
loginusernamestore = document.getElementById("loginusername").value;
localStorage.setItem("loginusername",loginusernamestore);
window.location = "kwitter_room.html";
}