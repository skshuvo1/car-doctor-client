import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";


export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({children}) => {
   
    const [users, setUsers] = useState(null)
    const [loading, setLoading] = useState(true)
    // console.log(users);

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email,password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
        setUsers(currentUser)
        setLoading(false)
    })
    return () => {
return unsubscribe();
    }
  },[])
     

    const authInfo = {
users, 
loading,
createUser,
signIn,
logOut
    }

    return (
        <AuthContext.Provider value={authInfo}>
{children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;