import React from "react";
import { Provider } from "react-redux";
import { store, persistor } from "./store/store";
import { PersistGate } from "redux-persist/integration/react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Record from "./functional-components/Dropdwon/index";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Switch>
          <PersistGate persistor={persistor}>
            <Route exact path="/">
              <Record />
            </Route>
          </PersistGate>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
