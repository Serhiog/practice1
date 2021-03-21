import React from "react";
import Header from "./components/header";
import Section from "./components/section";
import Converter from "./components/converter";
import History from "./components/history";
import Footer from "./components/footer";
import {HashRouter} from "react-router-dom";

const App = () => {
  return (
    <HashRouter>
      <React.Fragment>
        <Header />
        <Section />
        <Converter />
        <History />
        <Footer />
      </React.Fragment>
    </HashRouter>
  );
};

export default App;
