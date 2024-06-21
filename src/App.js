import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import RouterApp from "./routes";
import { Helmet } from "react-helmet";

function App() {
  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <title>My Title</title>
        <meta
          id="meta-description"
          name="description"
          content="Some description."
        />
        <meta id="og-title" property="og:title" content="Filum Ai Test" />
        <meta
          id="og-image"
          property="og:image"
          content="https://filum-ai.vercel.app/assets/1.png"
        />
      </Helmet>
      <Router>
        <Header />
        <RouterApp></RouterApp>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
