import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Provider } from "react-redux";
import { store, history } from "./Store";

import { Container } from "reactstrap";
import { NavbarComponent } from "./Common/NavBar/NavBar";
import Routers from "./Common/Routers";

function App(props) {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <NavbarComponent />
        <Container>
          <Routers />
        </Container>
      </ConnectedRouter>
    </Provider>
  );
}

export default App;
