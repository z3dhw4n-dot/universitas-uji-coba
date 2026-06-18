import { initializeApp }
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
getFirestore
}
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

import {
getStorage
}
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-storage.js";

import {
getAuth
}
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {

apiKey:"APIKEY",
authDomain:"PROJECT.firebaseapp.com",
projectId:"PROJECT",
storageBucket:"PROJECT.appspot.com",
messagingSenderId:"123",
appId:"123"

};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);