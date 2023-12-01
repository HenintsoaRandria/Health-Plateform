import React from "react";
import Liste from "./EspaceProfessionnel/Liste";
import SidebarProf from "./EspaceProfessionnel/SidebarProf";

export default function ListeContainer(){
    return(
        <>
            <SidebarProf/>
            <Liste/>
        </>
    );
}