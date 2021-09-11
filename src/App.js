import './App.css';
import Fade from "react-reveal/Fade";
import {Parallax} from "react-parallax";
import Container from "react-bootstrap/Container";
import Particles from "react-particles-js";
import { particlesOptions } from "./particlesOptions";

import MyNavbar from "./components/Mynavbar";
import MyCorausal from './components/corousal/Mycorausal';
import TitleText from "./components/title/Titletext";
import ScrollDown from "./components/scroll-down/scrolldown";
import AboutMe from "./pages/about/Aboutme";
import background from "./images/background.jpg";
import MySkills from "./pages/skills/Myskills";
import MyContact from "./pages/contact/Mycontact";
import MyFooter from "./components/footer/Myfooter";
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



