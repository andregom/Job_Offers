import React from "react";
import { Grid } from "@material-ui/core";
import { BrowserRouter, Route, Routes, Router, Navigate } from "react-router-dom";

import Navbar from "../components/Navbar/navbar";
import BasicCard from "../components/Card";
import AltCard from "../components/AltCard";

function ApplicationRouter() {
    return (
        <>
            <Navbar />
            <Grid container
                style={{width: "100vh", height: "100vw",  display: "flex-box", flexDirection: "row" }}>
                <Routes>
                    <Route path="/" element={
                        <Navigate to="/oportunidades" />
                    } />
                    {/*<Route path="/login" component={LoginPage}/>*/}
                    {/* <Route path="/accounts" element={AccountDisplay}/>
                    <Route path="/stocks" element={StocksDisplay}/> */}
                    <Route path='/oportunidades' element={<BasicCard />} />
                    <Route path='/vagas' element={<AltCard />} />
                </Routes>
            </Grid>
        </>
    )
}

export default ApplicationRouter;