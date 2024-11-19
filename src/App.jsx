import { useEffect, useState } from "react";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";

function Preloader() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-100">
      <div className="h-16 w-16 animate-spin rounded-full border-4 border-blue-500 border-t-transparent"></div>
    </div>
  );
}

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const img = new Image();
    img.src = "./assets/profile-pic.png";
    img.onload = () => {
      setLoading(false);
    };

    const timer = setTimeout(() => setLoading(false), 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && <Preloader />}
      {!loading && (
        <>
          <Header />
          <Home />
          <AboutMe />
          <Portfolio />
          <Contact />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
