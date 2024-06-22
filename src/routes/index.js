import { Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import Questions from "../pages/question";
import Result from "../pages/result";
import Instruction from "../pages/intruction";

const RouterApp = () => {
  const routes = [
    { path: "/", element: <Home /> },
    { path: "/instruction", element: <Instruction /> },
    { path: "/questions", element: <Questions /> },
    { path: "/result", element: <Result /> },
    { path: "*", element: <Home /> },
  ];

  return (
    <Routes>
      {routes.map((route, index) => (
        <Route path={route.path} element={route.element} key={index} />
      ))}
    </Routes>
  );
};

export default RouterApp;
