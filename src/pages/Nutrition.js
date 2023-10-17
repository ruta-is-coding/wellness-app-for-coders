import { useEffect, useState } from "react";
import SearchBar from "../components/searchBar/SearchBar";
import { Link } from "react-router-dom";

const Nutrition = (props) => {
  const [meals, setMeals] = useState([]);
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery(e.target.elements.query.value);
    console.log(query);
  };

  // useEffect(() => {
  //   const apiKey = process.env.REACT_APP_API_KEY;
  //   const url = `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch?query=${query}&diet=vegetarian&maxSugar=30&maxAlcohol=0&number=100`;
  //   try {
  //     fetch(url, {
  //       headers: {
  //         "X-RapidAPI-Key": apiKey,
  //         "X-RapidAPI-Host":
  //           "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
  //       },
  //     })
  //       .then((resp) => resp.json())
  //       .then((resp) => {
  //         setMeals(resp.results);
  //         console.log(resp.results);
  //       });
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }, [query]);

  return (
    <>
      <h1>{props.title}</h1>
      <p className="text-lime-600 text-center">
        Inspiration for healthy recipes &#128170;&#128513;
      </p>
      <p className="text-lime-600 text-center mb-7">
        Info taken from Spoonacular API
      </p>
      {/* search bar */}
      <SearchBar handleSubmit={handleSubmit} query={query} />
      {/* image grid */}
      <div className="grid md:grid-cols-4 gap-x-4 md:gap-y-7 gap-y-10 justify-items-center">
        {meals &&
          meals.map((meal, index) => (
            <div
              className="flex flex-col md:gap-3 gap-1 items-center"
              key={index}
            >
              <img src={meal.image} alt={meal.title} className="w-full" />
              <Link to={`/meal/${meal.id}`} className="text-2xl text-lime-500">
                {meal.title}
              </Link>
            </div>
          ))}
      </div>
    </>
  );
};

export default Nutrition;
