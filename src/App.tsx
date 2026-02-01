import Projects from './components/Projects/Projects'
import AboutMe from './components/AboutMe/AboutMe'
import ContactMe from "./components/ContactMe/ContactMe";
import Navbar from './components/Navbar/Navbar'
import Intro from './components/Intro/Intro'
import Experience from "./components/Experience/Experience";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <div className="w-full">
      <Navbar />
      <Intro />
      <AboutMe />
      <Projects />
      <Experience />
      <ContactMe />
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar
        theme="light"
        toastStyle={{
          backgroundColor: "#FFF9F2",
          color: "#3b2a23",
          border: "1px solid #d6c6b8",
        }}
      />
    </div>
  );
};

export default App;
