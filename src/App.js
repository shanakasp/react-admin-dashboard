import { CssBaseline, ThemeProvider } from "@mui/material";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import AppointmentLogs from "./scenes/appointmentLogs";
import ViewAppointment from "./scenes/appointmentLogs/ViewAppointment";
import Careers from "./scenes/careers";
import CreateNewCareer from "./scenes/careers/CreateNewCareer";
import EditCareer from "./scenes/careers/EditCareer";
import ViewCareer from "./scenes/careers/ViewCareer";
import Dashboard from "./scenes/dashboard";
import Sidebar from "./scenes/global/Sidebar";
import Topbar from "./scenes/global/Topbar";
import Invoices from "./scenes/invoices";
import FormUserView from "./scenes/newReqst/FormUserView";
import FormsUser from "./scenes/newReqst/FormsUser";
import NewServiceRequest from "./scenes/newReqst/NewServiceRequest";
import NewServiceView from "./scenes/newReqst/NewServiceView";
import PaymentLogs from "./scenes/paymentLogs";
import Profile from "./scenes/profile";
import ChangePw from "./scenes/profile/ChangePw";
import EditProfile from "./scenes/profile/EditProfile";
import SubscriptionPackage from "./scenes/subscriptionPackage";
import EditSubscription from "./scenes/subscriptionPackage/EditSubscription";
import ViewSubscription from "./scenes/subscriptionPackage/ViewSubscription";
import Team from "./scenes/team";
import AddNewOrganization from "./scenes/team/AddNewOrganization";
import CreateNewUser from "./scenes/team/CreateNewUser";
import EditOrganization from "./scenes/team/EditOrganization";
import EditUser from "./scenes/team/EditUser";
import ViewOrganization from "./scenes/team/ViewOrganization";
import ViewUser from "./scenes/team/ViewUser";
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
              <Route
                path="/subscription/viewsubcription/:id"
                element={<ViewSubscription></ViewSubscription>}
              />
              <Route
                path="/subscription/editsubcription/:id"
                element={<EditSubscription></EditSubscription>}
              />
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
              <Route
                path="/appointment/edit/:id"
                element={<ViewAppointment />}
              />
              <Route
                path="/formsuser"
                element={<FormsUser></FormsUser>}
              ></Route>
              <Route path="/formsuser/view/:id" element={<FormUserView />} />
              <Route
                path="/newserviceuser"
                element={<NewServiceRequest></NewServiceRequest>}
              ></Route>
              <Route
                path="/newserviceuser/view/:id"
                element={<NewServiceView />}
              />
              <Route path="/careers" element={<Careers></Careers>}></Route>
              <Route
                path="/careers/newcareer"
                element={<CreateNewCareer></CreateNewCareer>}
              ></Route>
              <Route path="/careers/viewcareer/:id" element={<ViewCareer />} />
              <Route path="/careers/editcareer/:id" element={<EditCareer />} />
              <Route
                path="/paymentlogs"
                element={<PaymentLogs></PaymentLogs>}
              ></Route>
              <Route path="/profile" element={<Profile></Profile>}></Route>
              <Route
                path="/profile/changepassword"
                element={<ChangePw></ChangePw>}
              ></Route>
              <Route
                path="/profile/editprofile"
                element={<EditProfile></EditProfile>}
              ></Route>
              <Route
                path="/user/viewuser/:id"
                element={<ViewUser></ViewUser>}
              ></Route>
              <Route
                path="/user/vieworg/:id"
                element={<ViewOrganization></ViewOrganization>}
              ></Route>
              <Route
                path="/user/edituser/:id"
                element={<EditUser></EditUser>}
              ></Route>
              <Route
                path="/user/editorg/:id"
                element={<EditOrganization></EditOrganization>}
              ></Route>
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
