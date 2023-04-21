// // import React, { useState, useEffect } from "react";
// // import ReactDOM from "react-dom/client";
// // import App from "./App";
// // import LandingPage from "./FirstPage/LandingPage";
// // import "./index.css";
// // import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// // import Preloader from "./FirstPage/Preloader/preloader";
// // ReactDOM.createRoot(document.getElementById("root")).render(
// //   <BrowserRouter>
// //     <React.StrictMode>
// //       <Routes>
// //         <Route path="/" element={<LandingPage />} />
// //         <Route path="/about" element={<App />} />
// //       </Routes>
// //     </React.StrictMode>
// //   </BrowserRouter>
// // );

// // import React, { useState, useEffect } from "react";
// // import ReactDOM from "react-dom/client";
// // import App from "./App";
// // import LandingPage from "./FirstPage/LandingPage";
// // import "./index.css";
// // import {
// //   BrowserRouter,
// //   Routes,
// //   Route,
// //   Link,
// //   useLocation,
// // } from "react-router-dom";
// // import Preloader from "./FirstPage/Preloader/preloader";

// // function AppRoutes() {
// //   const location = useLocation();

// //   return (
// //     <>
// //       {location.pathname !== "/" && location.pathname !== "/about" && (
// //         <Preloader />
// //       )}
// //       <Routes>
// //         <Route path="/" element={<LandingPage />} />
// //         <Route path="/about" element={<App />} />
// //       </Routes>
// //     </>
// //   );
// // }

// // ReactDOM.createRoot(document.getElementById("root")).render(
// //   <BrowserRouter>
// //     <React.StrictMode>
// //       <AppRoutes />
// //     </React.StrictMode>
// //   </BrowserRouter>
// // );



// // import React, { useState, useEffect } from "react";
// // import ReactDOM from "react-dom/client";
// // import App from "./App";
// // import LandingPage from "./FirstPage/LandingPage";
// // import "./index.css";
// // import {
// //   BrowserRouter,
// //   Routes,
// //   Route,
// //   Link,
// //   useLocation,
// // } from "react-router-dom";
// // import Preloader from "./FirstPage/Preloader/preloader";

// // function AppContainer() {
// //   const [showRoutePreloader, setShowRoutePreloader] = useState(true);
// //   const [showModelPreloader, setShowModelPreloader] = useState(true);
// //   const location = useLocation();

// //   useEffect(() => {
// //     setTimeout(() => {
// //       setShowRoutePreloader(false);
// //     }, 5000);

// //     // Simulate threejs model loading
// //     setTimeout(() => {
// //       setShowModelPreloader(false);
// //     }, 5000);
// //   }, []);

// //   useEffect(() => {
// //     // Reset the model preloader state when navigating to the "/about" route
// //     setShowModelPreloader(location.pathname === "/about");
// //   }, [location.pathname]);

// //   return (
// //     <div>
// //       {showRoutePreloader ? <Preloader /> : null}
// //       {location.pathname === "/about" && showModelPreloader ? (
// //         <Preloader />
// //       ) : null}
// //       <Routes>
// //         <Route path="/" element={<LandingPage />} />
// //         <Route path="/about" element={<App />} />
// //       </Routes>
// //     </div>
// //   );
// // }

// // ReactDOM.createRoot(document.getElementById("root")).render(
// //   <BrowserRouter>
// //     <React.StrictMode>
// //       <AppContainer />
// //     </React.StrictMode>
// //   </BrowserRouter>
// // );


// import React, { useState, useEffect } from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App";
// import LandingPage from "./FirstPage/LandingPage";
// import "./index.css";
// import {
//   BrowserRouter,
//   Routes,
//   Route,
//   Link,
//   useLocation,
// } from "react-router-dom";
// import Preloader from "./FirstPage/Preloader/preloader";

// function AppContainer() {
//   const [showRoutePreloader, setShowRoutePreloader] = useState(true);
//   const location = useLocation();

//   useEffect(() => {
//     setTimeout(() => {
//       setShowRoutePreloader(false);
//     }, 3500);
//   }, []);
//   return (
//     <div>
//       {showRoutePreloader ? <Preloader /> : null}
//       <Routes>
//         <Route path="/" element={<LandingPage />} />
//         <Route path="/about" element={<App />} />
//       </Routes>
//     </div>
//   );
// }

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <BrowserRouter>
//     <React.StrictMode>
//       <AppContainer />
//     </React.StrictMode>
//   </BrowserRouter>
// );
// import React, { useState, useEffect } from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App";
// import LandingPage from "./FirstPage/LandingPage";
// import "./index.css";
// import {
//   BrowserRouter,
//   Routes,
//   Route,
//   Link,
//   useLocation,
// } from "react-router-dom";
// import Preloader from "./FirstPage/Preloader/preloader";

// function AppContainer() {
//   const [showRoutePreloader, setShowRoutePreloader] = useState(true);
//   const [showModelPreloader, setShowModelPreloader] = useState(true);
//   const location = useLocation();

//   useEffect(() => {
//     setTimeout(() => {
//       setShowRoutePreloader(false);
//     }, 3500);

//     if (location.pathname === "/about") {
//       // Simulate model loading
//       setTimeout(() => {
//         setShowModelPreloader(false);
//       }, 5000);
//     }
//   }, [location.pathname]);

//   return (
//     <div>
//       {showRoutePreloader ? <Preloader /> : null}
//       {location.pathname === "/about" && showModelPreloader ? (
//         <Preloader />
//       ) : null}
//       <Routes>
//         <Route path="/" element={<LandingPage />} />
//         <Route path="/about" element={<App />} />
//       </Routes>
//     </div>
//   );
// }


import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import LandingPage from "./FirstPage/LandingPage";
import "./index.css";
import './FirstPage/button.css'
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
  Tech,
  Works,
  StarsCanvas,
} from "./components";
function AppContainer() {
  
  const [showRoutePreloader, setShowRoutePreloader] = useState(true);
  const [showModelPreloader, setShowModelPreloader] = useState(true);
  const location = useLocation();
 
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

  return (
    <div>
      {showRoutePreloader ? <Preloader /> : null}
      {location.pathname === "/about" && showModelPreloader ? (
        <Preloader />
      ) : null}
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<Hero />} />
        <Route path="/education" element={<Experience />} />
        <Route path="/technologies" element={<Tech />} />
        <Route path="/projects" element={<Works />} />
        <Route path="/training&certificate" element={<Feedbacks />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

ReactDOM.render(
  <BrowserRouter>
    <AppContainer />
  </BrowserRouter>,
  document.getElementById("root")
);

