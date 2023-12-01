import React from "react";
import Sidebar from './EspacePatient/Sidebar';
import Information from "./Information";

export default function UserConnected(){
    return(
        <>
            <Sidebar/>
            <Information/>
            {/* <Recherche/> */}
        </>
    );
}