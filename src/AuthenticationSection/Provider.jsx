import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/Firebase.config';
export const AuthContext=createContext(null);
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

const Provider = ({children}) => {
    const auth=getAuth(app);
    const [user,setUser]=useState('')
    const [loading,setLoading]=useState(false);
  const signUpUser=(email,password)=>{
    setLoading(true);
    return  createUserWithEmailAndPassword(auth,email,password);
  };

const loginUser=(email,password)=>{
    setLoading(true);
    return signInWithEmailAndPassword(auth,email,password);

};

 useEffect (()=>{
    const unsubscribe = onAuthStateChanged(auth,currentUser=>{
        setUser(currentUser);
        console.log('auth state change',currentUser);
        setLoading(false);
    })
    return ()=>{unsubscribe()}
 },[])
const logOUt=()=>{
    return signOut(auth);
}
    const authInfo={
loading,
signUpUser,
loginUser,
logOUt
    }
    return (
        <div>
            <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
        </div>
    );
};

export default Provider;