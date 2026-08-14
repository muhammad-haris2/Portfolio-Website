import { Navbar } from "./components/Navbar/Navbar";
import { Hero } from "./components/Hero/Hero";
import { About } from "./components/About/About";
import { Skills } from "./components/Skills/Skills";
import { Projects } from "./components/Projects/Projects";
import { Architecture } from "./components/Architecture/Architecture";
import { Journey } from "./components/Journey/Journey";
import { Education } from "./components/Education/Education";
import { GitHubSection } from "./components/GitHub/GitHubSection";
import { Contact } from "./components/Contact/Contact";
import { Footer } from "./components/Footer/Footer";
import { Background } from "./components/Background/Background";

function App() {
  return (
    <>
      <Background />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Architecture />
        <Journey />
        <Education />
        <GitHubSection />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
