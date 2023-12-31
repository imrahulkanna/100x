import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Home from "./pages/Home";
import CreateAccount1 from "./pages/Signup/CreateAccount1";
import CreateAccount2 from "./pages/Signup/CreateAccount2";
import CreateAccount3 from "./pages/Signup/CreateAccount3";
import CreateAccount4 from "./pages/Signup/CreateAccount4";
import Profile from "./pages/Profile/Profile";
import EditProfile from "./pages/Profile/EditProfile";
import ComposeTweet from "./pages/ComposeTweet";
import AuthProvider from "./context/AuthContext";
import TweetProvider from "./context/TweetContext";
import Error from "./pages/Error";
import PrivateRoutes from "./utils/PrivateRoutes";
import SearchBar from "./components/SearchBar";

const router = createBrowserRouter([
  {
    element: <PrivateRoutes />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/edit-profile",
        element: <EditProfile />,
      },
      {
        path: "/compose-tweet",
        element: <ComposeTweet />,
      },
    ],
  },
  {
    path: "/",
    element: <SearchBar />,
  },
  {
    path: "/signup",
    element: <CreateAccount1 />,
  },
  {
    path: "/signup2",
    element: <CreateAccount2 />,
  },
  {
    path: "/signup3",
    element: <CreateAccount3 />,
  },
  {
    path: "/signup4",
    element: <CreateAccount4 />,
  },
  {
    path: "*",
    element: <Error />,
  },
]);

function App() {
  return (
    <AuthProvider>
      <TweetProvider>
        <RouterProvider router={router} />
      </TweetProvider>
    </AuthProvider>
  );
}

export default App;
