import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyBV9iDXeVcT5HaDx8E5xVBCrnaAH_8jHX8",
    authDomain: "unsplash-7161b.firebaseapp.com",
    projectId: "unsplash-7161b",
    storageBucket: "unsplash-7161b.appspot.com",
    messagingSenderId: "283447040617",
    appId: "1:283447040617:web:f955d82d548c76992020f8"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth()

const provider = new GoogleAuthProvider()

export const signUpWithGoogleAccount = async () => {
    return signInWithPopup(auth, provider)
        .then((result) => {
            return result
        })
        .catch((error) => {
            return error
        })
}

export const signOutFromAkkount = () => {
    signOut(auth)
       .then((result) => {
         console.log(result);
       })
       .catch((error) => {
        console.log(error);
       })
}