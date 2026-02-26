import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Work from "./components/Work";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div className="bg-black h-screen w-screen">
      <Header />
      <Home />
      <About />
      <Work />
      {/* <Contact /> */}
    </div>
  );
};

export default App;
