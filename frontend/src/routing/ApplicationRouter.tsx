import React from "react";
import { Grid } from "@material-ui/core";
import { BrowserRouter, Route, Routes, Router, Navigate } from "react-router-dom";

import Navbar from "../components/Navbar/navbar";
import BasicCard from "../components/Card";
import AltCard from "../components/AltCard";

import RequireAuth from "./RequireAuth";
import { UserLogin } from "../components/UserLogin";

function ApplicationRouter() {
    return (
        <>
            <Navbar />
            <Grid container
                style={{ margin: "auto", width: "100vw", height: "max-content",  display: "flex", flexDirection: "row", paddingTop: "70px", background: "#F6F4F6" }}>
                <Routes>
                    {/* Public */}
                    {<Route path="/user-login" element={<UserLogin />}/>}
                    
                    {/* Private */}
                    <Route element={<RequireAuth />}>
                        <Route path="/" element={
                            <Navigate to="/oportunidades" />
                        } />
                        <Route path='/oportunidades' element={<BasicCard />} />
                        <Route path='/vagas' element={<AltCard />} />
                    </Route>
                </Routes>
            </Grid>
        </>
    )
}

export default ApplicationRouter;