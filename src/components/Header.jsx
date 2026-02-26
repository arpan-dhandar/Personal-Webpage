const Header = () => {
 
  const glowLink =
    "relative text-white transition duration-300 hover:scale-105 \
after:content-[''] after:absolute after:left-1/2 after:top-1/2 \
after:-translate-x-1/2 after:-translate-y-1/2 \
after:w-0 after:h-0 after:rounded-full \
after:opacity-0 after:blur-2xl after:transition-all after:duration-500 \
after:bg-[radial-gradient(circle,rgb(40,120,255),rgb(170,60,255))] \
hover:after:w-24 hover:after:h-24 hover:after:opacity-90";
 

return (
    <header className="fixed top-0 left-0 w-full border-b border-[rgb(27,26,28)] bg-black z-50">
      <div className="flex justify-between items-center px-10 py-4">
      
      
      <span className="font-bold text-2xl text-white cursor-pointer">ARD<span className="text-purple-600 text-4xl leading-none">.</span></span>
      <div className="flex justify-between m-5">
        <a href="#" className={`${glowLink} mx-6`}>
          Home
        </a>
        <a href="#" className={`${glowLink} mx-6`}>
          About
        </a>
        <a href="#" className={`${glowLink} mx-6`}>
          Work
        </a>
        <a href="#" className={`${glowLink} mx-6`}>
          Contact
        </a>
      </div>
      
    </div>
    </header>
  );
};

export default Header;
