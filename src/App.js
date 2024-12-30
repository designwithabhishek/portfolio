import logo from "./logo.svg";
import "./App.css";
import PageLoader from "./components/page-loader/page-loader.component";
import Home from "./components/home/home.component";
import { useEffect, useRef } from "react";
import About from "./components/about/about.component";
import Work from "./components/work/work.component";
import Skills from "./components/skills/skills.component";
import Contact from "./components/contact/contact.component";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZYAgs07fhyoneraF_SGvxXG5dgrwjvUQ",
  authDomain: "portfolio-4e910.firebaseapp.com",
  projectId: "portfolio-4e910",
  storageBucket: "portfolio-4e910.appspot.com",
  messagingSenderId: "240439041483",
  appId: "1:240439041483:web:4c3e5b353b4751d42f6a4e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

function App() {
  const cursorRef = useRef();

  useEffect(() => {
    if (cursorRef.current) {
      document.addEventListener("mousemove", (e) => {
        cursorRef.current.style.left = e.pageX + "px";
        cursorRef.current.style.top = e.pageY + "px";
      });
    }
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
