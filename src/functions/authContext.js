//FOR OUR SIGN IN AND SIGN UP

import { createContext, 
         useContext, 
         useEffect, 
         useState } from "react";

import { GoogleAuthProvider,
    signInWithPopup,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
 } from 'firebase/auth'

 import { auth } from '../Database/firebase'

const UserContext = createContext()

export const AuthContextProvider = ({children}) =>{

    //create a state for our useEffect
    const [user, setUser] = useState({})

    //pass in the email and password
    const CreateUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    //create a function for sign in
    const logIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    //create a function for google sign in
    const googleSignin = () =>{
        const provider = new GoogleAuthProvider()
        signInWithPopup(auth, provider)

    }

    //create a function for log out
    const logout = () => {
        return signOut(auth)
    }

    //to show the data of the user. Also, to check if the user is authenticated or not
    useEffect(() =>{
            const unsubscribe = onAuthStateChanged(auth, (currentUser) =>{
                // console.log(currentUser)
                setUser(currentUser)
            })
            return () => {
                unsubscribe()
            }
    },[])

    return(
        <UserContext.Provider value={{CreateUser, user, logout, logIn, googleSignin}}>
            {children}
        </UserContext.Provider>
    )
}

//THIS FUNCTION MAKES OUR CONTEXT AVAILABLE IN OUR ALL APPLICATION.
export const UserAuth = () =>{
    return useContext(UserContext)
}