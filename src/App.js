import './App.css';
import Fade from "react-reveal/Fade";
import {Parallax} from "react-parallax";
import Container from "react-bootstrap/Container";
import Particles from "react-particles-js";
import { particlesOptions } from "./particlesOptions";

import MyNavbar from "./components/MyNavbar";
import MyCorausal from './components/Corousal/MyCorausal';
import TitleText from "./components/title/TitleText";
import ScrollDown from "./components/scroll-down/ScrollDown";
import AboutMe from "./pages/about/AboutMe";
import background from "./images/background.jpg";
import MySkills from "./pages/skills/MySkills";
import MyContact from "./pages/contact/MyContact";
import MyFooter from "./components/footer/MyFooter";
import "./App.css";

function App() {
  return (
    <div className="App" style={{ position: "relative" }}>
      <MyNavbar />
      <MyCorausal />
      <TitleText />
     <Particles className="particles particles-box" params={particlesOptions}/>
      <ScrollDown />
      <div>
      <Parallax
          blur={{ min: -30, max: 30 }}
          bgImage={background}
          strength={-200}
        >
          <div>
            <Container className="container-box rounded">
              <Fade duration={500}>
                <AboutMe />
              </Fade>
            </Container>
          </div>
        </Parallax>
      </div>
      <div>
          <div>
            <Container className="container-box rounded">
              <Fade duration={500}>
                <MySkills />
              </Fade>
            </Container>
          </div>
      </div>
      <div>
          <div>
            <Container className="container-box rounded">
              <Fade duration={500}>
                <MyContact />
              </Fade>
            </Container>
          </div>
      </div>
      <hr />
      <MyFooter />
    </div>
  );
}

export default App;



