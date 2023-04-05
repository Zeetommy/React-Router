import React, { Fragment } from "react";

import Header from "./common/Header";
import CardList from "./home/CardList";
import User from "./user/User";
import { BrowserRouter as Router, Link, Route, Switch,useRouteMatch, useLocation, useParams} from "react-router-dom"
import NotFound from "./common/NotFound"

function App() {
  /*
    TODO: There is no need to add a <Router >, it is in index.js.

    The <CardList /> component should be shown when the user is on the index path.

    The <User /> component should be shown when the user is on the following path:
    /users/:userId

    Display <NotFound /> when appropriate
  */
  return (
    <Fragment>
        <Route>
          <Header />
        </Route>
        <Route path="/users/:userId">
          <User />
        </Route>
        <Route>
          <CardList />
        </Route>
        <Route>
          <NotFound />
        </Route>
    </Fragment>
  );
}

export default App;
