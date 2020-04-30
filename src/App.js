import React from "react";
import Routes from "./pages/routes";

const App = () => {
  return (
    <React.Fragment>
      <div className="linearRun" />
      <div className="container">
        <Routes />
      </div>
    </React.Fragment>
  );
};

export default App;
