// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyABDV5bf-K0qdI8PLvHoCMeD1o1wcxJhps",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "azadi-lucky-draw",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "1:832763959998:android:3a13f508322c1e37909cef"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

function login() {
  const email = prompt("Enter your email:");
  const password = prompt("Enter your password:");
  auth.signInWithEmailAndPassword(email, password)
    .then(user => {
      alert("Logged in successfully!");
      // Redirect to dashboard.html in final version
    })
    .catch(error => {
      alert("Error: " + error.message);
    });
}
