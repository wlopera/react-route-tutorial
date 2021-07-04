import "./App.css";
import Header from "./components/Header";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Profiles from "./pages/Profiles";
import NotFound from "./pages/NotFound";
import Post from "./pages/Post";
import { useState } from "react";

const App = (props) => {
  const [login, setLogin] = useState(false);

  return (
    // <BrowserRouter basename="/tutorial">
    // <BrowserRouter forceRefresh>
    <BrowserRouter>
      <div className="App">
        <Header />

        <button onClick={() => setLogin(!login)}>
          {login ? "Salir" : "Conectarse"}
        </button>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} />

          {/* <Route path="/profile">
            {login ? <Profiles /> : <Redirect to="/" />}
          </Route> */}

          <Route
            path="/profile"
            render={(props) => <Profiles {...props} login={login} />}
          />

          <Route path="/post/:id" component={Post} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
