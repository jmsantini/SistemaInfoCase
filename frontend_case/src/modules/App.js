import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LoginPage from "./login";
import Signup from "./signup";


function App() {

  return (
    <BrowserRouter>
      <Switch>

        <Route exact path="/" >
          <LoginPage />
        </Route>

        <Route exact path="/signup">
          <Signup />
        </Route>

      </Switch>
    </BrowserRouter>
  );
}

export default App;
