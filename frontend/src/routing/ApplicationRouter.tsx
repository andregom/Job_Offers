import React from "react";
import { Grid } from "@material-ui/core";
import { BrowserRouter, Route, Routes, Router, Navigate } from "react-router-dom";

import Navbar from "../components/Navbar/navbar";
import BasicCard from "../components/Card";

function ApplicationRouter() {
    return (
        <>
            <Navbar />
            <Grid item xs={12}
                md={10}
                lg={9}
                xl={8}
                style={{ margin: "auto" }}>
                <Routes>
                    <Route path="/" element={
                        <Navigate to="/oportunidades" />
                    } />
                    {/*<Route path="/login" component={LoginPage}/>*/}
                    {/* <Route path="/accounts" element={AccountDisplay}/>
                    <Route path="/stocks" element={StocksDisplay}/> */}
                    <Route path='/oportunidades' element={<BasicCard />} />
                </Routes>
            </Grid>
        </>
    )
}

export default ApplicationRouter;