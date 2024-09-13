import { useState, useEffect } from "react";
import "./App.css";
import "./Header.css";
import "./Footer.css";

import Header from "./Header";
import Footer from "./Footer";
import HomePage from "./HomePage";
import Cards from "./Cards";
import Panels from "./Panels";
import Library from "./Library";
import SkipLink from "./SkipLink";

function App() {
  const [currentPage, setCurrentPage] = useState("");
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [showNavbar, setShowNavbar] = useState(true);
  const [showMobileNav, setShowMobileNav] = useState(false);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    function setPageToCurrentURL() {
      setCurrentPage(document.location.hash || "#/");
    }
    setPageToCurrentURL(); //initial page load

    console.log("adding popstate listener");

    window.addEventListener("popstate", setPageToCurrentURL);

    return () => {
      console.log("cleanup");
      window.removeEventListener("popstate", setPageToCurrentURL);
    };
  }, []);

  useEffect(() => {
    if (windowWidth < 768) {
      setShowNavbar(false);
      setShowMobileNav(true);
    } else {
      setShowNavbar(true);
      setShowMobileNav(false);
    }
  }, [windowWidth]);

  return (
    <>
      <SkipLink />
      <Header setCurrentPage={setCurrentPage} />

      <main>
        {currentPage === "#/" && <HomePage />}
        {currentPage === "#/cards" && <Cards />}
        {currentPage === "#/panels" && <Panels />}
        {currentPage === "#/library" && <Library />}
      </main>

      <Footer />
    </>
  );
}

export default App;
