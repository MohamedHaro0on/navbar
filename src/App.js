import './App.css';
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Header from "./Header";

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Header />
        </Switch>
      </Router>
    </>
  );
}

export default App;