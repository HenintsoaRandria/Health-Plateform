import React from "react";
import AgendaComponent from "./AgendaComponent";
import SidebarProf from "./SidebarProf";

export default function AgendaContainer(){
    return(
        <>
            <SidebarProf/>
            <AgendaComponent/>
        </>
    );
}