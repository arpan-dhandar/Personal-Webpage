import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Work from "./components/Work";
import Contact from "./components/Contact";

const App = () => {
  return (
    // min-h-screen allows the page to grow with content
    // overflow-x-hidden prevents unwanted side-scrolling
    <div className="bg-black min-h-screen w-full overflow-x-hidden">
      <Header />
      <Home />
      <About />
      <Work />
      <Contact />
    </div>
  );
};

export default App;