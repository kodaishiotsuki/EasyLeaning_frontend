import React from "react";
import Services from "./components/Services/Services";
import TopBanner from "./components/TopBanner/TopBanner";
import TopNavigation from "./components/TopNavgation/TopNavigation";

function App() {
  return (
    <div>
      <TopNavigation />
      <TopBanner />
      <Services />
    </div>
  );
}

export default App;
