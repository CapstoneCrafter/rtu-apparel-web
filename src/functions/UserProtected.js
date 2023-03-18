//PROTECT THE USER DOMAIN FROM OTHER USERS WHO HAVE NOT ALREADY LOGGED IN
//protect the user from non-user

import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from './authContext'

export const UserProtected = ({children}) => {

    const {currentUser} = useAuth()

    //if there's no user (!user), proceed it to the main pages, or the user is trying to change the domain but not already logged in, go to main pages.

    if(!currentUser){
        return (<Navigate to='/signin'/>)
    }
    return children

};

export default UserProtected




// //PROTECT THE USER DOMAIN FROM OTHER USERS WHO HAVE NOT ALREADY LOGGED IN

// import React from 'react'
// import { Navigate } from 'react-router-dom'
// import { UserAuth } from './authContext'

// export const UserProtected = ({children}) => {

//     const {user} = UserAuth()

//     //if there's no user (!user), proceed it to the main pages, or the user is trying to change the domain but not already logged in, go to main pages.
//     if(!user){
//         return (<Navigate to='/' />)
//     }
//     return children

// };

// export default UserProtected