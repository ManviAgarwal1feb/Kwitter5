
 var firebaseConfig = {
  apiKey: "AIzaSyAXpIQm_z7MbgYRTaxwKY4KKTZ_CRovCac",
  authDomain: "kwitter-2c4fb.firebaseapp.com",
  databaseURL: "https://kwitter-2c4fb-default-rtdb.firebaseio.com",
  projectId: "kwitter-2c4fb",
  storageBucket: "kwitter-2c4fb.appspot.com",
  messagingSenderId: "385509001083",
  appId: "1:385509001083:web:42deefdb86df66e7a6dfde"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Codes for displaying the user name
user_name=localStorage.getItem("user_name");
document.getElementById("welcome_user").innerHTML="Welcome "+user_name+"!";
// codes for fun add room
function add_room(){
      room_name=document.getElementById("room_name").value
      firebase.database().ref("/").child(room_name).update({
            purpose:"Add Room Name"
      });
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
   Room_names = childKey;
  //Start code
  console.log("Room Name-"+Room_names);
  row="<div class='room_name'id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div> <hr>";
  document.getElementById("output").innerHTML+=row;
  });});}
getData();


function redirectToRoomName(name){
  console.log(name);
  localStorage.setItem("room_name",name);
  window.location="kwitter_page.html";
}

function logout(){
  window.location="index.html";
  localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
}
