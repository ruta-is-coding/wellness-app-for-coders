import { useState } from "react";
import Burger from "../burger/Burger";
import BurgerMeniu from "../burgerMeniu/BurgerMeniu";

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
      {/* burger */}
      <Burger
        burgerClick={burgerClick}
        updateMenu={updateMenu}
        menuVisibility={menuVisibility}
      />
      {/* meniu */}
      <BurgerMeniu menuVisibility={menuVisibility} />
    </nav>
  );
};

export default Navbar;
