import React from "react";
import Home from "./Home";
import { Switch, Route } from "react-router-dom";
import Lesson from "./Lesson";
import Auth from "./Auth";
import ChooseClasses from "./ChooseClasses";

const Routes = () => {
  return (
    <Switch>
      {!localStorage.getItem("password") ? (
        <Route exact path="/" component={Auth} />
      ) : localStorage.getItem("ChooseClass") ? (
        <Route exact path="/" component={Home} />
      ) : (
        <Route exact path="/" component={ChooseClasses} />
      )}

      {/* Lessons */}
      <Route
        exact
        path="/algebra"
        render={() => <Lesson lessName={"Algebra"} />}
      />
      <Route
        exact
        path="/geometry"
        render={() => <Lesson lessName={"Geometry"} />}
      />
      <Route exact path="/kaz" render={() => <Lesson lessName={"Kaz"} />} />
      <Route
        exact
        path="/kazlit"
        render={() => <Lesson lessName={"Kazlit"} />}
      />
      <Route exact path="/rus" render={() => <Lesson lessName={"Rus"} />} />
      <Route
        exact
        path="/ruslit"
        render={() => <Lesson lessName={"Ruslit"} />}
      />
      <Route
        exact
        path="/geography"
        render={() => <Lesson lessName={"Geography"} />}
      />
      <Route
        exact
        path="/physics"
        render={() => <Lesson lessName={"Physics"} />}
      />
      <Route
        exact
        path="/historyk"
        render={() => <Lesson lessName={"Historyk"} />}
      />
      <Route
        exact
        path="/historyb"
        render={() => <Lesson lessName={"Historyb"} />}
      />
      <Route
        exact
        path="/inform"
        render={() => <Lesson lessName={"Inform"} />}
      />
      <Route exact path="/eng" render={() => <Lesson lessName={"Eng"} />} />
      <Route
        exact
        path="/biolog"
        render={() => <Lesson lessName={"Biolog"} />}
      />
      <Route exact path="/chim" render={() => <Lesson lessName={"Chim"} />} />
      <Route
        exact
        path="/samopoz"
        render={() => <Lesson lessName={"Samopoz"} />}
      />
    </Switch>
  );
};

export default Routes;
