import Burger from "../burger/Burger";

const Navbar = () => {
  return (
    <nav className="flex md:justify-center md:items-center gap-3 flex-col">
      <Burger />
      <div className="md:flex md:flex-row items-end flex-col lg:gap-7 md:gap-3 hidden">
        <a href="/">Home</a>
        <a href="/workouts">Workouts</a>
        <a href="/nutrition">Nutrition</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
