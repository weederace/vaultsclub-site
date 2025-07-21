import React from "react";
import DesktopApp from "./DesktopApp";
import MobileApp from "./MobileApp";

function App() {
  const isMobile = window.innerWidth <= 768;
  return isMobile ? <MobileApp /> : <DesktopApp />;
}

export default App;
