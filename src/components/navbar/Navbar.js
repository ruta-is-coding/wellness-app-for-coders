import { useState } from "react";

const Navbar = () => {
  const [burgerClick, setBurgerClick] = useState(false);
  const [menuVisibility, setMenuVisibility] = useState("hidden");

  const updateMenu = () => {
    if (!burgerClick) {
      // Set burgerClick to true on the first click
      setBurgerClick(true);
      setMenuVisibility("flex flex-col");
    } else {
      // Toggle burgerClick on subsequent clicks
      setBurgerClick(!burgerClick);
      setMenuVisibility("hidden");
    }
    console.log(menuVisibility);
  };

  return (
    <nav className="flex md:justify-center md:items-center gap-3 flex-col">
      {/* Burgeris */}
      <div
        className="cursor-pointer md:hidden flex justify-end"
        onClick={updateMenu}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            className="text-lime-400"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </div>
      {/* Meniu */}
      <div
        className={`md:flex md:flex-row items-end flex-col lg:gap-7 md:gap-3 ${menuVisibility}`}
      >
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
