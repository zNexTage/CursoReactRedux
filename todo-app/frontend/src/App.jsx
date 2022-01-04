
import { BrowserRouter } from "react-router-dom";
import Menu from "./Components/Menu";
import Router from "./Routes";

const App = () => {
  return (
    <BrowserRouter>
      <div className="container">
        <Menu />
        <Router />
      </div>
    </BrowserRouter>

  );
}

export default App;
