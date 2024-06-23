import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/home";
import Questions from "../pages/question";
import Result from "../pages/result";
import Instruction from "../pages/instruction";
import { useContext } from "react";
import UserDataContext from "../context/UserDataProvider";
import Share from "../pages/share";

const RouterApp = () => {
  const { userEmail } = useContext(UserDataContext);

  // public routes
  const publicRoutes = [
    { path: "/", element: <Home /> },
    { path: "*", element: <Home /> },
  ];

  const privateRoutes = [
    {
      path: "/instruction",
      element: userEmail ? <Instruction /> : <Navigate to="/" />,
    },
    {
      path: "/questions",
      element: userEmail ? <Questions /> : <Navigate to="/" />,
    },
    { path: "/result", element: userEmail ? <Result /> : <Navigate to="/" /> },
    { path: "/share", element: userEmail ? <Share /> : <Navigate to="/" /> },
  ];

  const routes = [...publicRoutes, ...privateRoutes];

  return (
    <Routes>
      {routes.map((route, index) => (
        <Route path={route.path} element={route.element} key={index} />
      ))}
    </Routes>
  );
};

export default RouterApp;
