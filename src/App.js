import "./App.css";
import PageLoader from "./components/page-loader/page-loader.component";
import Home from "./components/home/home.component";
import { useEffect, useRef } from "react";
import About from "./components/about/about.component";
import Work from "./components/work/work.component";
import Skills from "./components/skills/skills.component";
import Contact from "./components/contact/contact.component";


function App() {
  const cursorRef = useRef();

  useEffect(() => {
    const handler = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = e.pageX + "px";
        cursorRef.current.style.top = e.pageY + "px";
      }
    };
    document.addEventListener("mousemove", handler);
    return () => document.removeEventListener("mousemove", handler);
  }, []);

  return (
    <>
      <PageLoader title="Design with Abhishek">
        <Home />
        <About />
        <Work />
        <Skills />
        <Contact />
      </PageLoader>
      <div className="cursor" ref={cursorRef}></div>
    </>
  );
}

export default App;
