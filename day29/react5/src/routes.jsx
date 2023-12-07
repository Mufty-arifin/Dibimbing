import Home from "./pages/Home";
import Login from "./pages/Login";
import NewMenu from "./pages/NewMenu";
import UserDetail from "./pages/UserDetail";
import ProtectedRoutes from "./hoc/ProtectedRoutes";
export const routes = [
  {
    path: "/",
    element: (
      <ProtectedRoutes>
        {" "}
        <Home />{" "}
      </ProtectedRoutes>
    ),
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/new-menu",
    element: (
      <ProtectedRoutes>
        <NewMenu />
      </ProtectedRoutes>
    ),
  },
  {
    path: "/user/:id",
    element: (
      <ProtectedRoutes>
        <UserDetail />
      </ProtectedRoutes>
    ),
  },
];
