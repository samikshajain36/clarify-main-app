import React from 'react'
import Sidebar from "../Components/Sidebar/Sidebar";
import AccessBar from "../Components/AccessBar/AccessBar";

const WrapperComp = ({Comp}) => {
    return (
        <>
            <Sidebar />
            <AccessBar />
            <Comp/>
        </>
    )
}

export default WrapperComp