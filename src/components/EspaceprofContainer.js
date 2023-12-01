import React from "react";
import SidebarProf from './EspaceProfessionnel/SidebarProf';
import ProfilProf from './EspaceProfessionnel/ProfilProf';
import AgendaContainer from "./EspaceProfessionnel/AgendaContainer";


export default function EspaceprofContainer(){
    return(
        <>
            <SidebarProf/>
            <ProfilProf/>
            <AgendaContainer/>
        </>
    );
}