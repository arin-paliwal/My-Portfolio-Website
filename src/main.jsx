import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import LandingPage from "./FirstPage/LandingPage";
import "./index.css";

import "./FirstPage/button.css";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import Preloader from "./FirstPage/Preloader/preloader";
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  NavbarForLP,
  Tech,
  Works,
  StarsCanvas,
  AboutHero,
} from "./components";

function AppContainer() {
  const [showRoutePreloader, setShowRoutePreloader] = useState(true);
  const [showModelPreloader, setShowModelPreloader] = useState(true);
  const location = useLocation();
  const [showScroll, setShowScroll] = useState(false);

  // for scrolling to top
  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 10) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  window.addEventListener("scroll", checkScrollTop);

  useEffect(() => {
    setTimeout(() => {
      setShowRoutePreloader(false);
    }, 3500);

    if (location.pathname === "/about") {
      // Simulate model loading
      setTimeout(() => {
        setShowModelPreloader(false);
      }, 5000);
    }
  }, [location.pathname]);

  useEffect(() => {
    const title = location.pathname.substring(1).replace("-", " ");
    document.title = `Arin Paliwal | ${
      title.charAt(0).toUpperCase() + title.slice(1)
    }`;
  }, [location.pathname]);

  const backgroundColor = location.pathname === "/" ? "transparent" : "#000000";

  return (
    <div style={{ backgroundColor }}>
      {showRoutePreloader ? <Preloader /> : null}
      {location.pathname === "/about" && showModelPreloader ? (
        <Preloader />
      ) : null}
      <div className="py-10">
        {location.pathname === "/" ? <NavbarForLP /> : <Navbar />}
      </div>

      <div className="mt-[40px] overflow-x-hidden ">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutHero />} />
          <Route path="/education" element={<Experience />} />
          <Route path="/skills" element={<Tech />} />
          <Route path="/projects" element={<Works />} />
          <Route path="/trainings" element={<Feedbacks />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

ReactDOM.render(
  <BrowserRouter>
    <AppContainer />
  </BrowserRouter>,
  document.getElementById("root")
);
