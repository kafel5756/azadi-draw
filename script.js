// Firebase config
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
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