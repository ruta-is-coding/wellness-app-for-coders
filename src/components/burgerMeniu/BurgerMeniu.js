import { Link } from "react-router-dom";

const BurgerMeniu = ({ menuVisibility }) => {
  return (
    <div
      className={`md:flex md:flex-row items-end flex-col lg:gap-7 md:gap-3 ${menuVisibility}`}
    >
      <Link to="/">Home</Link>
      <Link to="/workouts">Workouts</Link>
      <Link to="/nutrition">Nutrition</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </div>
  );
};

export default BurgerMeniu;
