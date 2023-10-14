import Navbar from "../navbar/Navbar";
import Logo from "../logo/Logo";

const Header = () => {
  return (
    <header className="shadow-lg md:py-10 py-5 w-full">
      <div className="container flex justify-between lg:gap-9 md:px-1 px-7">
        <div className="flex md:items-center md:flex-row md:gap-0 flex-col gap-5 items-start">
          <Logo />
          <h2>Wellness for coders</h2>
        </div>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
