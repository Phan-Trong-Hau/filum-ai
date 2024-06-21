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
        {/* <meta
          id="meta-description"
          name="description"
          content="Some description."
        />
        <meta id="og-title" property="og:title" content="Filum Ai Test" />
        <meta
          id="og-image"
          property="og:image"
          content="https://filum-ai.vercel.app/assets/1.png"
        /> */}
        {/* <meta itemprop="name" content="Filum Ai Test" />
        <meta
          itemprop="description"
          content="Kiểm tra cấp độ thực hiện Voice of the Customer của bạn với Filum AI"
        />
        <meta
          itemprop="image"
          content="https://filum-ai.vercel.app/assets/1.png"
        /> */}
        <meta property="og:url" content="https://filum-ai.vercel.app" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Filum Ai Test" />
        <meta
          property="og:description"
          content="Kiểm tra cấp độ thực hiện Voice of the Customer của bạn với Filum AI"
        />
        <meta
          property="og:image"
          content="https://filum-ai.vercel.app/assets/1.png"
        />
        <meta property="og:site_name" content="Filum Ai Test" />
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
