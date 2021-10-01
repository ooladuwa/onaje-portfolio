import React from "react";
// import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home.js";
import About from "./components/About.js";
import Resume from "./components/Resume.js";
// import Navbar from "./components/navbar/Navbar.js";
import FooterCTA from "./components/FooterCTA.js";
import Footer from "./components/Footer.js";

function App() {
  const ThemeContext = React.createContext("typed");
  return (
    <main className="box-border text-chinese-black">
      <ThemeContext.Provider value="typed">
        <Router>
          {/* <Navbar /> */}
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={About} />
            <Route path="/resume" exact component={Resume} />
          </Switch>
          <FooterCTA />
          <Footer />
        </Router>
      </ThemeContext.Provider>
    </main>
  );
}

export default App;
