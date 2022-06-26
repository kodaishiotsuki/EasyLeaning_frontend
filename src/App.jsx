import React from "react";
import PageTop from "./components/PageTop/PageTop";
import TopNavigation from "./components/TopNavgation/TopNavigation";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      <TopNavigation/>
      <PageTop pageTitle="About Me"/>
      {/* <HomePage /> */}
    </>
  );
}

export default App;
