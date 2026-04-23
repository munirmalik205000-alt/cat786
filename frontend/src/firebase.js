// Import Firebase
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyC4h42NYJHBghS8nQN16rdhvAjhkLHNLXA",
  authDomain: "ridabest786.firebaseapp.com",
  databaseURL: "https://ridabest786-default-rtdb.firebaseio.com",
  projectId: "ridabest786",
  storageBucket: "ridabest786.firebasestorage.app",
  messagingSenderId: "805181900398",
  appId: "1:805181900398:web:080260d130d5a899ce087f",
  measurementId: "G-H0K5G0411M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Analytics (optional - error avoid karne ke liye check)
let analytics;
if (typeof window !== "undefined") {
  analytics = getAnalytics(app);
}

// Export app
export default app;
