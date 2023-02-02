import { getFirestore } from '@firebase/firestore';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyAe0BfBnN_gJRESrmXjW3P94eyl8jbyIx8',
  authDomain: 'wolfgang-school.firebaseapp.com',
  projectId: 'wolfgang-school',
  storageBucket: 'wolfgang-school.appspot.com',
  messagingSenderId: '289631028309',
  appId: '1:289631028309:web:59b32e92f8e54854d580dc',
  measurementId: 'G-SD7DJVKDZ6',
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
