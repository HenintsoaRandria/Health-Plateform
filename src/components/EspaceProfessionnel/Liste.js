import React, { useState, useEffect } from 'react'
import axios from 'axios';


export default function Liste(){

  const [rendezVous, setRendezVous] = useState([]);

  useEffect(() => {
    
    axios.get('http://localhost:8000/api/rendezvous/get')
      .then(response => {
        setRendezVous(response.data);
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des rendez-vous :', error);
      });
  }, []); // Le tableau vide signifie que cela ne s'exécute qu'une seule fois après le montage


  return(
    <div>
        <main id="main" class="main">

<div class="pagetitle">
  <h1>Rendez-vous</h1>
</div>
<section class="section">
<div class="card">
        <div class="card-body">
          <h5 class="card-title"></h5>

          
          <table class="table table-hover">
            <thead>
              <tr>
                <th scope="col">id</th>
                <th scope="col">Nom</th>
                <th scope="col">Prénoms</th>
                <th scope="col">Email</th>
                <th scope="col">Téléphone</th>
                <th scope="col">Heure</th>
                <th scope="col">Date</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
            {rendezVous.map(rendezVousItem => (
                    <tr key={rendezVousItem.id}>
                      <th scope="row">{rendezVousItem.id}</th>
                      <td>{rendezVousItem.name}</td>
                      <td>{rendezVousItem.last_name}</td>
                      <td>{rendezVousItem.email}</td>
                      <td>{rendezVousItem.phone_number}</td>
                      <td>{rendezVousItem.day}</td>
                      <td>{rendezVousItem.heure}</td>
                      <td>
                        <span className={`badge ${rendezVousItem.statusClass}`}>
                          {rendezVousItem.statusLabel}
                        </span>
                      </td>
                    </tr>
                  ))}
                
              <tr>
                <th scope="row">1</th>
                <td>Randria</td>
                <td>Henintsoa</td>
                <td>henintsoarandriaparany@gmail.com</td>
                <td>0344044868</td>
                <td>30-11-2023</td>
                <td>08:00</td>
                <td> 
                  <span class="badge bg-success">Confirmé</span> 
                  
                </td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Rakoto</td>
                <td>Avotra</td>
                <td>avotrarakoto@gmail.com</td>
                <td>0340721380</td>
                <td>25-11-2023</td>
                <td>08:00</td>
                <td><span class="badge bg-success">Confirmé</span></td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Miarana</td>
                <td>Ashley</td>
                <td>ashleymiarana@gmail.com</td>
                <td>0330021216</td>
                <td>22-11-2023</td>
                <td>14:30</td>
                <td><span class="badge bg-warning text-dark">Attente</span></td>
                
              </tr>
              <tr>
                <th scope="row">4</th>
                <td>Ravalo</td>
                <td>Diary</td>
                <td>diaryravalo@gmail.com</td>
                <td>0324362581</td>
                <td>24-11-2023</td>
                <td>10:00</td>
                <td><span class="badge bg-danger">Refusé</span></td>
              </tr>
              <tr>
                <th scope="row">5</th>
                <td>Raza</td>
                <td>Tiana</td>
                <td>tianaraza@gmail.com</td>
                <td>0333478010</td>
                <td>27-11-2023</td>
                <td>09:15</td>
                <td><span class="badge bg-warning text-dark">Attente</span></td>
              </tr>
            </tbody>
          </table>

        </div>
      </div>


</section>

</main>
    </div>
   )

 }