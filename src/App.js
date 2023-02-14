import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Users from "./scenes/Users";

import Contacts from "./scenes/contacts";

import Form from "./scenes/form";
import Line from "./scenes/line";

import FAQ from "./scenes/faq";

import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Calendar from "./scenes/calendar/calendar";
// import Dashboard from "../Dashboard/Dashboard";
// import Preferences from "../Preferences/Preferences";

import axios from "axios";
// import Userdata from './src/RecentAlerts/Userdata';
import RecentAlerts from "./scenes/RecentAlerts/index";

import Table from "./Table";
import "./App.css";

function App() {
  const [user, setUser] = useState(false);
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  // if (!user) {
  //   return <Login setUser={setUser} />;
  // }

  return (
    <BrowserRouter>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />

          <div className="app">
            <Sidebar isSidebar={isSidebar} />

            <main className="content">
              <Topbar setIsSidebar={setIsSidebar} />

              <Routes>
                <Route exact path="/Login" element={<Login />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/Users" element={<Users />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/RecentAlerts" element={<RecentAlerts />} />
                <Route path="/form" element={<Form />} />
                {/* <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} /> */}
                <Route path="/line" element={<Line />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/calendar" element={<Calendar />} />
                {/* <Route path="/geography" element={<Geography />} /> */}
              </Routes>
            </main>
          </div>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </BrowserRouter>
  );
}

export default App;
