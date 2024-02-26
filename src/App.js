import { CssBaseline, ThemeProvider } from "@mui/material";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import AppointmentLogs from "./scenes/appointmentLogs";
import ViewAppointment from "./scenes/appointmentLogs/ViewAppointment";
import Dashboard from "./scenes/dashboard";
import Sidebar from "./scenes/global/Sidebar";
import Topbar from "./scenes/global/Topbar";
import Invoices from "./scenes/invoices";
import SubscriptionPackage from "./scenes/subscriptionPackage";
import Team from "./scenes/team";
import AddNewOrganization from "./scenes/team/AddNewOrganization";
import CreateNewUser from "./scenes/team/CreateNewUser";
import { ColorModeContext, useMode } from "./theme";
function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/user" element={<Team />} />
              <Route
                path="/subscription"
                element={<SubscriptionPackage></SubscriptionPackage>}
              />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/appointment" element={<AppointmentLogs />} />
              <Route
                path="/user/createuser"
                element={<CreateNewUser></CreateNewUser>}
              />
              <Route
                path="/user/addneworg"
                element={<AddNewOrganization></AddNewOrganization>}
              />
              <Route
                path="/appointment/view/:id"
                element={<ViewAppointment />}
              />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
