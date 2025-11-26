import Navbar from './components/Navbar';
import Firstpage from './components/firstpage';
import Secondpage from './components/secondpage';
import Thirdpage from './components/thirdpage';
import Fourthpage from './components/fourthpage';

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      easing: "ease-in-out", // smooth easing
      once: true, // animate only once
    });
  }, []);

  return (
    <div>
      <Navbar/>
      <Firstpage/>
      <Secondpage/>
      <Thirdpage/>
      <Fourthpage/>
    </div>
  );
}

export default App;
