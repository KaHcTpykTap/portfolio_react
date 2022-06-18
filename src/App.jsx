import { useContext } from "react";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import SideLeft from "./components/sideLeft/SideLeft";
import SideRight from "./components/sideRight/SideRight";
import Toggle from "./components/toggle/Toggle";
import { ThemeContext } from "./context";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./app.css"
import TestComponent from "./components/testComponent/TestComponent";
import MenuBar from "./components/menuBar/MenuBar";
import ButtonLogin from "./components/buttons/ButtonLogin";

const App = () => {

  const userName = "סויון";

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="app">
      <ButtonLogin name={userName}/>
      {/* <MenuBar/>
      <SideLeft />
      <div className="main">
        <Intro />
        <About />
        <Contact />
      </div>
      <SideRight />
      <TestComponent/> */}
    </div>
  );
};

export default App;