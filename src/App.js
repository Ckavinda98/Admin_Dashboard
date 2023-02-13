import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Users from "./scenes/Users";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import Contacts from "./scenes/contacts";

import Form from "./scenes/form";
import Line from "./scenes/line";

import FAQ from "./scenes/faq";

import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Calendar from "./scenes/calendar/calendar";
import Dashboard from "../Dashboard/Dashboard";
import Preferences from "../Preferences/Preferences";

import axios from "axios";
// import Userdata from './src/RecentAlerts/Userdata';
import RecentAlerts from "./scenes/RecentAlerts/index";

import Table from "./Table";
import "./App.css";

function App() {
  <></>;
}

return (
  <ColorModeContext.Provider value={colorMode}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="app">
        <Sidebar isSidebar={isSidebar} />
        <main className="content">
          <Topbar setIsSidebar={setIsSidebar} />
          <Routes>
            <Route path="/Login" element={<login />} />
            <Route path="/" element={<Dashboard />} />
            <Route path="/Users" element={<Users />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/RecentAlerts" element={<RecentAlerts />} />
            <Route path="/form" element={<Form />} />
            <Route path="/bar" element={<Bar />} />
            <Route path="/pie" element={<Pie />} />
            <Route path="/line" element={<Line />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/geography" element={<Geography />} />
          </Routes>
        </main>
      </div>
    </ThemeProvider>
  </ColorModeContext.Provider>
);

export default App;
