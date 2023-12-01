import React, { Component } from 'react';
import axios from 'axios';
import './Sidebar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import avatar2 from '../images/avatar2.jpg';

class Information extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // État pour le formulaire de profil
      name: '',
      last_name: '',
      email: '',
      phone_number: '',
      adresse: '',
    };
  }

  componentDidMount() {
    // Vous pouvez appeler ici la fonction pour charger les données de la personne depuis l'API
    // Utilisez this.props.id pour récupérer l'identifiant de la personne et effectuez une requête API
    this.loadPersonData();
  }

  componentDidUpdate(prevProps) {
    // Si l'ID de la personne change, rechargez les données
    if (prevProps.id !== this.props.id) {
      this.loadPersonData();
    }
  }

  loadPersonData = async () => {
    try {
      // Remplacez 'URL_PERSON_API' par l'URL réelle pour obtenir les données de la personne
      const response = await axios.get(`URL_PERSON_API/${this.props.id}`);
      const personData = response.data; // Assurez-vous que votre API renvoie les données correctement

      this.setState({
        name: personData.name,
        last_name: personData.last_name,
        email: personData.email,
        phone_number: personData.phone_number,
        adresse: personData.adresse,
      });
    } catch (error) {
      console.error('Erreur lors de la récupération des données de la personne:', error);
    }
  };

  render() {
    return (
      <div>
        <main id="main" class="main">
          <div class="pagetitle">
            <h1>Profil</h1>
          </div>
          <section class="section profile">
            <div class="row">
              <div class="col-xl-8">
                <div class="card">
                  <div class="card-body pt-3">
                    <div class="tab-content pt-2">
                      <div class="tab-pane fade show active profile-overview" id="profile-overview">
                        <div class="row">
                          <div class="col-lg-3 col-md-4 label ">Nom</div>
                          <div class="col-lg-9 col-md-8">{this.state.name}</div>
                        </div>
                        <div class="row">
                          <div class="col-lg-3 col-md-4 label ">Prénoms</div>
                          <div class="col-lg-9 col-md-8">{this.state.last_name}</div>
                        </div>
                        <div class="row">
                          <div class="col-lg-3 col-md-4 label">Email</div>
                          <div class="col-lg-9 col-md-8">{this.state.email}</div>
                        </div>
                        <div class="row">
                          <div class="col-lg-3 col-md-4 label">Téléphone</div>
                          <div class="col-lg-9 col-md-8">{this.state.phone_number}</div>
                        </div>
                        <div class="row">
                          <div class="col-lg-3 col-md-4 label">Adresse</div>
                          <div class="col-lg-9 col-md-8">{this.state.adresse}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    );
  }
}

export default Information;
