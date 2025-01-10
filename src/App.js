import React from "react";
import LogoContainer from "./1. Header/logoContainer";
import NavBar from "./1. Header/navBar";
import OtherProjects from "./3. Other Projects/otherProjects";

import "./App.css";

function App() {
  return (
    <div className="container-fluid main-container ps-5 pe-5">
      <LogoContainer />
      <NavBar />
      <OtherProjects />
    </div>
  );
}

export default App;
