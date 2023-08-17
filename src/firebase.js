// Import Firebase and its components
import firebase from 'firebase/app';
import 'firebase/firestore';

// Your Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyDF_EhmrS6YxA1G2LXu7iQ0fjEz0vPKqT4',
	authDomain: 'ekwitter-ac443.firebaseapp.com',
	projectId: 'ekwitter-ac443',
	storageBucket: 'ekwitter-ac443.appspot.com',
	messagingSenderId: '366773864180',
	appId: '1:366773864180:web:58ba50404a02ee3f5c40a1',
	measurementId: 'G-YFDPXV04P6',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
export default db;
