import React from 'react';
import './App.css';
import Navbar from './components/menu/Navbar';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Apropos from './components/Apropos';
import Connexion from './components/Connexion';
import Professionnel from './components/Professionnel';
import Patient from './components/Patient';
import Contact from './components/Contact';
import RegisterPatient from './components/ConnexionPatient/RegisterPatient';
import RegisterProfessionnel from './components/ConnexionProfessionnel/RegisterProfessionnel';
// import Sidebar from './components/EspacePatient/Sidebar';
// import UserProfil from './components/EspacePatient/UserProfil';

  
const App=()=> {
return (
      //  <Router>
      //   <Navbar/> 
      //  <Routes>
      //   <Route path='/' element={<Home/>}/>
      //    <Route path='/apropos' element={<Apropos/>}/>
      //    <Route path='/connexion' element={<Connexion/>}/>
      //    <Route path='/professionnel' element={<Professionnel/>}/>
      //    <Route path='/patient' element={<Patient/>}/>
      //    <Route path='/contact' element={<Contact/>}/>
      //    <Route path='/registrationPatient' element={<RegisterPatient/>}/>
      //    <Route path='/registrationProfessionnel' element={<RegisterProfessionnel/>}/> 
      //  </Routes>  
      // </Router> 

      <Router>
       {/* <Sidebar/> */}
       <UserProfil/>
       {/* <Routes> */}
        {/* <Route path='/sidebarPatient' element={<Sidebar/>}/> */}
        {/* <Route path='/userProfil' element={<UserProfil/>}/>
      </Routes> */}
     </Router>
//     </div>
//   );
// }


  );
}

export default App;
