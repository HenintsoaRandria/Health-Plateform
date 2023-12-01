import React from "react";
import Sidebar from "./Sidebar"; // Importez votre composant Sidebar ici
import UserProfil from "./UserProfil"; // Importez votre composant UserProfil ici

function InterfaceApresAuthentification() {
  return (
    <div>
      <Sidebar />
      <UserProfil />
      {/* Définissez les routes spécifiques ici si nécessaire */}
    </div>
  );
}

export default InterfaceApresAuthentification;
