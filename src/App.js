import React from "react";
import Header from "./components/header";
import Section from "./components/section";
import Converter from "./components/converter";
import History from "./components/history";
import Footer from "./components/footer";

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <Section />
      <Converter />
      <History />
      <Footer />
    </React.Fragment>
  );
};

export default App;
