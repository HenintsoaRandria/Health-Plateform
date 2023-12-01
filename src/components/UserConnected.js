import React from "react";
import Sidebar from './EspacePatient/Sidebar';
import UserProfil from './EspacePatient/UserProfil';
import Rendezvous from './EspacePatient/Rendezvous';
import Recherche from "./EspacePatient/Recherche";

export default function UserConnected(){
    return(
        <>
            <Sidebar/>
            <UserProfil/>
            {/* <Recherche/> */}
        </>
    );
}