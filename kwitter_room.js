

var firebaseConfig = {
      apiKey: "AIzaSyAEp0lB8fHpBclTbsOunmH2aRDNuHv1Jes",
      authDomain: "kwitter-f5499.firebaseapp.com",
      databaseURL: "https://kwitter-f5499-default-rtdb.firebaseio.com",
      projectId: "kwitter-f5499",
      storageBucket: "kwitter-f5499.appspot.com",
      messagingSenderId: "268553191178",
      appId: "1:268553191178:web:2760cd2b2b4579739444f3",
      measurementId: "G-91M6VCFQFS"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
