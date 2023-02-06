import Header from "./components/layout/header";
import "./App.css";
import AboutMe from "./components/aboutMe";
import { useEffect, useState } from "react";
import Loading from "./components/loading/loading";
import Projects from "./components/projects/projects";
import Footer from "./components/layout/footer";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1500);
  }, []);

  return (
    <>
      {loading === false ? (
        <div className="App">
          <Header />
          <AboutMe />
          <Projects />
          <Footer />
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default App;
