import React, {useState} from 'react';
import './sidebarProf.css';
import { Link } from 'react-router-dom';
import avatar2 from '../images/avatar2.jpg';
import axios from 'axios';


  const SidebarProf=()=>{
    const [showNotifications, setShowNotifications] = useState(false);

    const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
  };

  //notifications
  const handleConfirmClick = (id) => {
    
    axios.post(`http://localhost:8000/api/rendezvous/accept/{id}`)
      .then(response => {
        console.log(`Notification ${id} confirmée avec succès`);
      })
      .catch(error => {
        console.error('Erreur lors de la confirmation de la notification :', error);
      });
  };

  const handleRefuseClick = (id) => {
    axios.post(`http://localhost:8000/api/rendezvous/decline/{id}`)
      .then(response => {
        console.log(`Notification ${id} refusée avec succès`);
      })
      .catch(error => {
        console.error('Erreur lors du refus de la notification :', error);
      });
  }; //fin notifications

   //deconnexion
  const handleLogout = async () => {
    try {
      
      await axios.post('http://localhost:8000/api/professionnel/logout');
      console.log('Déconnexion réussie');
      window.location.href = '/login';
    } catch (error) {
      console.error('Erreur lors de la déconnexion :', error);
    }
  };


    return(
        <>
        <header id="header" class="header fixed-top d-flex align-items-center">

    <div class="d-flex align-items-center justify-content-between">
      <a href="index.html" class="logo d-flex align-items-center">
        <i className='fas fa-heartbeat'/>
        <span class="d-none d-lg-block">E-TSABO</span>
      </a>
      <i class="bi bi-list toggle-sidebar-btn"></i>
    </div>

    <nav class="header-nav ms-auto">
      <ul class="d-flex align-items-center">

        <li class="nav-item d-block d-lg-none">
          <a class="nav-link nav-icon search-bar-toggle " href="#">
            <i class="bi bi-search"></i>
          </a>
        </li>

        <li class="nav-item dropdown">

          <a class="nav-link nav-icon" href="#" data-bs-toggle="dropdown" onClick={toggleNotifications}>
            <i class="bi bi-bell"></i>
            <span class="badge bg-primary badge-number">4</span>
          </a>

          <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications">
            <li class="dropdown-header">
              You have 4 new notifications
              <a href="#"><span class="badge rounded-pill bg-primary p-2 ms-2">View all</span></a>
            </li>
            <li>
              <hr class="dropdown-divider"></hr>
            </li>

            <li class="notification-item">
              <i class="bi bi-exclamation-circle text-warning"></i>
              <div>
                <h4>Lorem Ipsum</h4>
                <p>Quae dolorem earum veritatis oditseno</p>
                <p>30 min. ago</p>
              </div>
            </li>

            <li>
              <hr class="dropdown-divider"></hr>
            </li>

            <li class="notification-item">
              <i class="bi bi-x-circle text-danger"></i>
              <div>
                <h4>Atque rerum nesciunt</h4>
                <p>Quae dolorem earum veritatis oditseno</p>
                <p>1 hr. ago</p>
              </div>
            </li>

            <li>
              <hr class="dropdown-divider"></hr>
            </li>

            <li class="notification-item">
              <i class="bi bi-check-circle text-success"></i>
              <div>
                <h4>Sit rerum fuga</h4>
                <p>Quae dolorem earum veritatis oditseno</p>
                <p>2 hrs. ago</p>
              </div>
            </li>

            <li>
              <hr class="dropdown-divider"></hr>
            </li>

            <li class="notification-item">
              <i class="bi bi-info-circle text-primary"></i>
              <div>
                <h4>Dicta reprehenderit</h4>
                <p>Quae dolorem earum veritatis oditseno</p>
                <p>4 hrs. ago</p>
                <button className="btn btn-success" onClick={handleConfirmClick}>Confirmer</button>
                <button className="btn btn-danger" onClick={handleRefuseClick}>Refuser</button>
              </div>
            </li>

            <li>
              <hr class="dropdown-divider"></hr>
            </li>
            <li class="dropdown-footer">
              <a href="#">Show all notifications</a>
            </li>

          </ul>

        </li>

        <li class="nav-item dropdown pe-3">

          <a class="nav-link nav-profile d-flex align-items-center pe-0" href="#" data-bs-toggle="dropdown">
            <img src={avatar2} alt="Profile" class="rounded-circle"></img>
            <span class="d-none d-md-block dropdown-toggle ps-2">Hajaina Rémi</span>
          </a>

          <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
            <li class="dropdown-header">
              <h6>Kevin Anderson</h6>
              <span>Web Designer</span>
            </li>
            <li>
              <hr class="dropdown-divider"></hr>
            </li>

            <li>
              <a class="dropdown-item d-flex align-items-center" href="users-profile.html">
                <i class="bi bi-person"></i>
                <span><Link to='/espaceprof'> Mon Profil</Link></span>
              </a>
            </li>
            <li>
              <hr class="dropdown-divider"></hr>
            </li>

            {/* <li>
              <a class="dropdown-item d-flex align-items-center" href="users-profile.html">
                <i class="bi bi-gear"></i>
                <span>Account Settings</span>
              </a>
            </li> */}
            <li>
              <hr class="dropdown-divider"></hr>
            </li>

            {/* <li>
              <a class="dropdown-item d-flex align-items-center" href="pages-faq.html">
                <i class="bi bi-question-circle"></i>
                <span>Need Help?</span>
              </a>
            </li> */}
            <li>
              <hr class="dropdown-divider"></hr>
            </li>

            <li>
              <a class="dropdown-item d-flex align-items-center" href="#" onClick={handleLogout}>
                <i class="bi bi-box-arrow-right"></i>
                <span>Déconnecter</span>
              </a>
            </li>

          </ul>
        </li>

      </ul>
    </nav>

  </header>
  <aside id="sidebar" class="sidebar">
    <ul class="sidebar-nav" id="sidebar-nav">
    <li class="nav-item">
        <a class="nav-link collapsed" href="UserProfil.js">
          <i class="bi bi-person"></i>
          <span><Link to='/espaceprof'>Profil</Link></span>
        </a>
    </li>
    <li class="nav-item">
        <a class="nav-link collapsed" href="UserProfil.js">
          <i class="bi bi-person"></i>
          <span><Link to='/agendaContainer'>Agenda</Link></span>
        </a>
      
    </li>
    <li class="nav-item">
        <a class="nav-link collapsed" href="">
          <i class="ri-file-list-3-fill"></i>
          <span><Link to='/listecontainer'>Liste des rendez-vous</Link></span>
        </a>
    </li>

    </ul>
  </aside>

  </>
    );
}

export default SidebarProf

