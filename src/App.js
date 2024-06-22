import { BrowserRouter as Router } from "react-router-dom";
import RouterApp from "./routes";

function App() {
  return (
    <div className="App">
      <Router>
        <main>
          <RouterApp></RouterApp>
        </main>
      </Router>
    </div>
  );
}

export default App;
