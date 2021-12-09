import React from "react";
import {Route , Switch} from "react-router-dom";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import ProjectPage from "./Components/ProjectPage";

const App = () => {
  return(
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/ProjectPage" component={ProjectPage} />
        <Route exact path="/Contact" component={Contact} />
      </Switch>
    </>
  )
};

export default App;