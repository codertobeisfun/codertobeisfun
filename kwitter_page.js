
const firebaseConfig = {
  apiKey: "AIzaSyCfhxl6LMgxojhFeK_IbN4qEcS_Vu_HJxU",
  authDomain: "chatwebapp-6d648.firebaseapp.com",
  databaseURL: "https://chatwebapp-6d648-default-rtdb.firebaseio.com",
  projectId: "chatwebapp-6d648",
  storageBucket: "chatwebapp-6d648.appspot.com",
  messagingSenderId: "504520303172",
  appId: "1:504520303172:web:e6e9d5d5c2f74912859211"
};

   firebase.initializeApp(firebaseConfig);

user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");

function send(){
    msg=document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0

    });

    document.getElementById("msg").value="";

}


function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();

function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location.replace("index.html");
}
