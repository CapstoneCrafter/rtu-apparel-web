// authContext for our Sign in / Sign up / forget & reset Password system.

import {createContext,
        useContext,
        useEffect,
        useState,
        } from "react";    

import { auth } from '../Database/firebase'

import { createUserWithEmailAndPassword,
         signInWithEmailAndPassword,
         onAuthStateChanged,
         signOut,
         GoogleAuthProvider,
         signInWithPopup,
         sendPasswordResetEmail,
         confirmPasswordReset,

} from "firebase/auth";

const AuthContext = createContext({
    currentUser: null,
    signUp: () => Promise,
    signIn: () => Promise,
    logOut: () => Promise,
    googleSignIn: () => Promise,
    forgotPassword: () => Promise,
    resetPassword: () => Promise
    
})

export const useAuth = () => useContext(AuthContext)

export default function AuthContextProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(null)

    useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth, user => {
            setCurrentUser(user)
        })
        return() => {
            unsubscribe()
        }
    }, [])

    const signUp = (email, password) => { 
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleSignIn = () => {
        const provider = new GoogleAuthProvider()
        return signInWithPopup(auth, provider)
    }

    const logOut = () => {
        return signOut(auth)
    }

    const forgotPassword = (email) => {
        return sendPasswordResetEmail(auth, email, {
            url: 'http://localhost:3000/signin'
        })

    }

    const resetPassword = (oobCode, newPassword) => {
        return confirmPasswordReset(auth, oobCode, newPassword)
    }


    const value = {
        currentUser,
        signUp, 
        signIn,
        logOut,
        googleSignIn,
        forgotPassword,
        resetPassword,
    }

    return <AuthContext.Provider value={value}>
                 {children}
            </AuthContext.Provider>
}




// import { createContext, 
//          useContext, 
//          useEffect, 
//          useState } from "react";

// import { GoogleAuthProvider,
//     signInWithPopup,
//     createUserWithEmailAndPassword,
//     signInWithEmailAndPassword,
//     signOut,
//     onAuthStateChanged
//  } from 'firebase/auth'

//  import { auth } from '../Database/firebase'

// const UserContext = createContext()

// export const AuthContextProvider = ({children}) =>{

//     //create a state for our useEffect
    
//     const [user, setUser] = useState({})

//     //pass in the email and password
//     //sign up function
//     const CreateUser = (email, password) => {
//         return createUserWithEmailAndPassword(auth, email, password)
//     }

//     //create a function for sign in
//     const logIn = (email, password) => {
//         return signInWithEmailAndPassword(auth, email, password)
//     }

//     //create a function for google sign in
//     const googleSignin = () =>{
//         const provider = new GoogleAuthProvider()
//         signInWithPopup(auth, provider)

//     }

//     //create a function for log out
//     const logout = () => {
//         return signOut(auth)
//     }

//     //to show the data of the user. Also, to check if the user is authenticated or not
//     useEffect(() =>{
//             const unsubscribe = onAuthStateChanged(auth, (currentUser) =>{
//                 // console.log(currentUser)
//                 setUser(currentUser)
//             })
//             return () => {
//                 unsubscribe()
//             }
//     },[])

//     return(
//         <UserContext.Provider value={{CreateUser, user, logout, logIn, googleSignin}}>
//             {children}
//         </UserContext.Provider>
//     )
// }

// //THIS FUNCTION MAKES OUR CONTEXT AVAILABLE IN OUR ALL APPLICATION.
// export const UserAuth = () =>{
//     return useContext(UserContext)
// }