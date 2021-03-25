import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Header";

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Header />
          <main>
            <Route path="/" />
            <Route path="/aboutUs" />
            <Route path="/projects" />
            <Route path="/contactUs" />
            <Route path="/aboutUs" />
            <Route path="/profile" />
          </main>
        </Switch>
      </Router>
    </>
  );
}

export default App;
