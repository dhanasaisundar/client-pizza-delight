import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDYNZhkF9fzSRSG0vUm_4DRYIxDJ5Cx0Vg",
  authDomain: "pizza-delight-8c634.firebaseapp.com",
  projectId: "pizza-delight-8c634",
  storageBucket: "pizza-delight-8c634.appspot.com",
  messagingSenderId: "509950597851",
  appId: "1:509950597851:web:fad9c7e4f4957858d08afe",
  measurementId: "G-263EXECRMS",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
