import { initializeApp } from "firebase/app";

import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    updateProfile
} from "firebase/auth"

import {
    doc,
    getDoc,
    getFirestore,
    setDoc,
} from "firebase/firestore"

import { toast } from "react-toastify";


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCkHGT5km16HhK2Q0CqFnINXll8TiQia-8",
    authDomain: "eclothing-2b68f.firebaseapp.com",
    projectId: "eclothing-2b68f",
    storageBucket: "eclothing-2b68f.firebasestorage.app",
    messagingSenderId: "425720034366",
    appId: "1:425720034366:web:90de8861bf7ca8cc914d6f"
};

initializeApp(firebaseConfig)

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
    prompt: "select account"
})

export const auth = getAuth()
export const signInWithGooglePopUp = () => signInWithPopup(auth, googleProvider)

export const db = getFirestore()

export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {}) => {
    if (!userAuth) return
    const userDocRef = doc(db, "users", userAuth.uid)

    const userSnapshot = await getDoc(userDocRef)
    if (!userSnapshot.exists()) {
        const { displayName,email } = userAuth;
        const createdAt = new Date()
        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInformation
            })
        } catch (error) {
            console.log("error creating the user", error.message)
            throw error;
        }

        return userDocRef
    }
}

export const createAuthUserWithEmailAndPassword = async ({displayName,email, password}) => {
    if (!email || !password) return
    const userCredential = await createUserWithEmailAndPassword(auth, email, password)
    if(displayName) {
        await updateProfile(userCredential.user,{displayName})
    }
    return userCredential
}

export const signInAuthWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return
    return await signInWithEmailAndPassword(auth, email, password)
}

export const signOutUser = async (resetCart,resetFavorites) => {
    try {
        await signOut(auth)
        toast.success("Logged out successfully")
        resetCart()
        resetFavorites()
    } catch (error) {
        
    }
}

export const onAuthStateChangedListener =  (callback) =>onAuthStateChanged(auth,callback)