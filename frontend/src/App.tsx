import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar/navbar";
import ApplicationRouter from "./routing/ApplicationRouter";

function App() {
  return (
    <ApplicationRouter />
  );
}

export default App;
