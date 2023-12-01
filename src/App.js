import React from 'react';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Navbar from './components/menu/Navbar';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import {Navigate} from 'react-router-dom'; 
// import InterfaceApresAuthentification from './components/EspacePatient/InterfaceApresAuthentification'; 
import Home from './components/home/Home';
import Apropos from './components/Apropos';
import Connexion from './components/Connexion';
import Professionnel from './components/Professionnel';
import Patient from './components/Patient';
import Contact from './components/contact/Contact';
import RegisterPatient from './components/ConnexionPatient/RegisterPatient';
import RegisterProfessionnel from './components/ConnexionProfessionnel/RegisterProfessionnel';

import Sidebar from './components/EspacePatient/Sidebar';
import UserProfil from './components/EspacePatient/UserProfil';
import SidebarProf from './components/EspaceProfessionnel/SidebarProf';
import ProfilProf from './components/EspaceProfessionnel/ProfilProf';
import Liste from './components/EspaceProfessionnel/Liste';
// import Recherche from './components/EspacePatient/Recherche';
import UserConnected from './components/UserConnected';
import EspaceprofContainer from './components/EspaceprofContainer';
import ListeContainer from './components/ListeContainer';
import DateContainer from './components/Search';
import Rendezvous from './components/EspacePatient/Rendezvous';
import Search from './components/Search';
import Resultat from './components/Resultat';
import AgendaComponent from './components/EspaceProfessionnel/AgendaComponent';
import AgendaContainer from './components/EspaceProfessionnel/AgendaContainer';
import Information from './components/EspacePatient/Information';



  
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
        <Navbar/>
        <Routes> 
          <Route path='/sidebarPatient' element={<Sidebar/>}/>
          <Route path='/userProfil' element={<UserProfil/>}/>
          <Route path='/sidebarProf' element={<SidebarProf/>}/>
          <Route path='/profilprof' element={<ProfilProf/>}/>
          
          
          {/* <Route path='/recherche' element={<Recherche/>}/> */}

{
          <Route path='/userConnected' element={<UserConnected/>}/>} 
           {<Route path='/espaceprof' element={<EspaceprofContainer/>}/>}
           {<Route path='/liste' element={<Liste/>}/>}
          {<Route path='/listecontainer' element={<ListeContainer/>}/>} 
          {<Route path='/search' element={<Search/>}/>}
          {<Route path='/resultat' element={<Resultat/>}/>}
          {<Route path='/agendaProf' element={<AgendaComponent/>}/>}
          {<Route path='/agendaContainer' element={<AgendaContainer/>}/>}
          {<Route path='/information' element={<Information/>}/>}

      

          <Route path='/' element={<Home/>}/>
          <Route path='/apropos' element={<Apropos/>}/>
          <Route path='/connexion' element={<Connexion/>}/>
          <Route path='/professionnel' element={<Professionnel/>}/>
          <Route path='/patient' element={<Patient/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/registrationPatient' element={<RegisterPatient/>}/>
          <Route path='/registrationProfessionnel' element={<RegisterProfessionnel/>}/>
        </Routes>
      </Router>
//     </div> 
//   );
// }
     

  );
}

export default App;
