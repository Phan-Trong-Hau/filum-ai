import { Routes, Route } from "react-router-dom";
import Home from "../pages/home";

const RouterApp = () => {
  const routes = [{ path: "/", element: <Home /> }];

  return (
    <Routes>
      {routes.map((route, index) => (
        <Route path={route.path} element={route.element} key={index} />
      ))}
    </Routes>
  );
};

export default RouterApp;
