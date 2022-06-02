import { useContext } from "react";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import SideLeft from "./components/sideLeft/SideLeft";
import SideRight from "./components/sideRight/SideRight";
import Toggle from "./components/toggle/Toggle";
import { ThemeContext } from "./context";
import "./app.css"

const App = () => {

    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;
  return (
    <div className="app">
      <SideLeft />
      <div className="main">
        <Intro/>
        <About/>
        <Contact/>
      </div>
      <SideRight />
    </div>
  );
};

export default App;