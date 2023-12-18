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

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="signUp" element={<SignUp />}></Route>
        <Route path="signIn" element={<SignIn />}></Route>
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
