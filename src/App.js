import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import RouterApp from "./routes";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <RouterApp></RouterApp>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
