import "./App.css";
import "./MediaQuery.css";
import "bootstrap/dist/css/bootstrap.min.css";
import LandingPage from "./Pages/LandingPage";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import SignUp from "./Pages/SignUp";
import SignIn from "./Pages/SignIn";
import Dashboard from "./Pages/Dashboard";
import Transfer from "./Compnents/TransferSidebar";
import Sidebar from "./Compnents/Sidebar";
import Transactions from "./Pages/Transactions";
import Profile from "./Pages/Profile";
import GiversList from "./Compnents/GiversList";
import ReceiverList from "./Compnents/ReceiverList";
import TransferPage from "./Pages/TransferPage";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="signUp" element={<SignUp />}></Route>
        <Route path="/signin" element={<SignIn />}></Route>
        <Route path="signIn" element={<SignIn />}></Route>
        <Route path="/" element={<Sidebar />}>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/" element={<Transfer />}>
            <Route path="/transfer" element={<TransferPage />}></Route>
            <Route path="/givers" element={<GiversList />}></Route>
            <Route path="/receivers" element={<ReceiverList />}></Route>
          </Route>
          <Route path="/transactions" element={<Transactions />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
        </Route>
      </Route>
    )
  );
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
