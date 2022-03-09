var firebaseConfig = {
  apiKey: "AIzaSyAd_MhHWlNd5Dv0DICdo1WS14lTEAcRsZw",
  authDomain: "letschatwebapp-8f35c.firebaseapp.com",
  databaseURL: "https://letschatwebapp-8f35c-default-rtdb.firebaseio.com",
  projectId: "letschatwebapp-8f35c",
  storageBucket: "letschatwebapp-8f35c.appspot.com",
  messagingSenderId: "598567942221",
  appId: "1:598567942221:web:e33c23816b5ade07e2c404"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("Username");
  document.getElementById("welcome_user_name").innerHTML = "Welcome "+user_name+"!";

  function addroom() {
         room_name = document.getElementById("room_name").value;

         firebase.database().ref("/").child(room_name).update({
              purpose: "Adding Room Name"
        });

        localStorage.setItem("Roomname",room_name);
    
        window.location = "kwitter_page.html";
  }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
   Room_names = childKey;
  //Start code
        console.log("room_name - " + Room_names);
        row = "<div class='room_name' id="+Room_names+" onclick='redirectToroomname(this.id)'>#"+Room_names+"</div><hr>";
        document.getElementById("output").innerHTML += row;
  //End code
  });});}
getData();
function redirectToroomname(name){
  console.log(name);
  localStorage.setItem("Roomname",name);
  window.location = "kwitter_page.html";
}
function logout() {
  localStorage.removeItem("Username");
  localStorage.removeItem("Roomname");
  window.location = "index.html";
}