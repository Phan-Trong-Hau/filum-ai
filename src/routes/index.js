import { Routes, Route } from "react-router-dom";
import Home from "../pages/home";

const RouterApp = () => {
  const routes = [{ path: "/", element: <Home /> }];

  return (
    <Routes>
      {routes.map((route) => (
        <Route path={route.path} element={route.element} />
      ))}
    </Routes>
  );
};

export default RouterApp;
