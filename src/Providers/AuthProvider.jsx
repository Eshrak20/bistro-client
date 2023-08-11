import { createContext, useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  sendEmailVerification,
  signInWithPopup,
  GoogleAuthProvider,
  updateProfile,
} from "firebase/auth";
import { app } from "../Firebase/firebase.config";
import axios from "axios";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const googleProvider= new GoogleAuthProvider;

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth,email, password);
  };
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };
  const ResetPass = (email) => {
    setLoading(true);
    return sendPasswordResetEmail(auth,email);
  };
  const emailVerification = () => {
    setLoading(true);
    return sendEmailVerification(auth.currentUser);
  };
  const updateUserProfile = (name,photo) => {
    setLoading(true);
    return updateProfile(auth.currentUser, {
      displayName:name, photoURL:photo
    }) 
  };


  // Google 

  const googleSignIn = () =>{
    setLoading(true)
    return signInWithPopup(auth, googleProvider)
};

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);

      //get and set to token
      if (currentUser) 
      {
        axios.post('http://localhost:5000/jwt', {
          email: currentUser.email,
        })
        .then(data => {
          console.log(data.data.token);
          localStorage.setItem('access-token', data.data.token)
          setLoading(false);
        })
       
      }
      else{
        localStorage.removeItem('access-token')
      }
      
      // console.log("current user", currentUser);
    });
    return () => {
      return unSubscribe();
    };
  }, []);
  const authInfo = {
    user,
    loading, // Corrected typo
    createUser,
    signIn,
    logOut,
    ResetPass,
    emailVerification,
    googleSignIn,
    updateUserProfile
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
