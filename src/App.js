import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Error from './MainPages/Error';
import Main from './MainPages/Main';
import Faq from './MainPages/faq';
import Footer from './components/Footer';
import Items from './MainPages/Items';
import Centre from './Pages/cs-help-centre';
import Contact from './Pages/cs-contact-us';
import About from './Pages/abr-about-us';
import Term from './Pages/abr-tos';
import Landing from './MainPages/landing';
import Team from './Pages/abr-team';
import Asked from './Pages/cs-faq';
import SidebarMen from './components/sidebar-men';
import Nav from './components/Nav';
import SidebarWomen from './components/sidebar-women';
import SidebarAcs from './components/sidebar-acs';
import SignIn from './components/SignIn';
import Test from './components/test';

import UserMain from './MainPages/UserMain';
import UserCategoryAccessories from './MainPages/UserCategoryAccs';
import UserCategoryUniform from './MainPages/UserCategoryUniform';
import UserCategoryLace from './MainPages/UserCategoryLace';
import UserCategoryJersey from './MainPages/UserCategoryJersey';
import UserCategoryPatch from './MainPages/UserCategoryPatch';
import UserCategoryPants from './MainPages/UserCategoryPants';

import NavUser from './components/NavUser';
import UserDropdown from './components/UserDropdown';
import UserAccount from './components/UserAccount';
import UserCart from './components/UserCart';
import UserPurchase from './components/UserPurchase';

import SignUp from './components/SignUp';
import { AuthContextProvider, UserAuth } from './functions/authContext';
import {useAuthState} from 'react-firebase-hooks/auth'
import { auth } from './Database/firebase';



function App() {

  const [user] = useAuthState(auth)


  return (
    <div className="App">  

<AuthContextProvider>
    <Router>
    
    {!user ? <Nav/> : <NavUser/>}
    
  
    <Routes>
    

        <Route path='/' element={<Landing/>}/>
        <Route path='main' element={<Main/>}/>
        <Route path='items' element={<Items/>}/>
        <Route path='frequently-asked-questions' element={<Faq/>}/>

        <Route path='help-centre' element={<Centre />} />
        <Route path='help-centre/contact-us' element={<Contact />} />
       
        <Route path='contact-us' element={<Contact />} />

        <Route path='faq' element={<Asked />} />
        <Route path='faq/contact-us' element={<Contact />} />
        

        <Route path='about-us' element={<About />} />
        <Route path='team' element={<Team />} />
        <Route path='term-of-service' element={<Term />} />

        <Route path='men' element={<SidebarMen/>} />
        <Route path='women' element={<SidebarWomen/>} />
        <Route path='accessories' element={<SidebarAcs/>} />

        <Route path='signin' element={<SignIn/>} />
        <Route path='signup' element={ <SignUp/>} />

        <Route path='signin/signup/term-of-service' element={<Term />} />
        <Route path='signup/signin' element={<SignIn/>} />
        <Route path='signin/signup/signin' element={<SignIn/>} />
        <Route path='signin/signup' element={ <SignUp/>} />
        <Route path='accessories/signin' element={<SignIn/>} />
        <Route path='men/signin' element={<SignIn/>} />
        <Route path='women/signin' element={<SignIn/>} />

        <Route path='RTUApparel' element={<UserMain/>} />
        <Route path='account' element={<UserAccount/>} />
        <Route path='RTUApparel/uniform' element={<UserCategoryUniform/>} />
        <Route path='RTUApparel/pants' element={<UserCategoryPants/>} />
        <Route path='RTUApparel/jersey' element={<UserCategoryJersey/>} />
        <Route path='RTUApparel/IDlace' element={<UserCategoryLace/>} />
        <Route path='RTUApparel/patch' element={<UserCategoryPatch/>} />
        <Route path='RTUApparel/accessory' element={<UserCategoryAccessories/>} />
        <Route path='cart' element={<UserCart/>} />
        <Route path='purchase' element={<UserPurchase/>} />

        <Route path='test' element={<Test/>} />
        <Route path='*' element={<Error/>}/>

      </Routes>
     

      <Footer/>

    </Router>
    </AuthContextProvider>

    </div>
  );
}

export default App;
