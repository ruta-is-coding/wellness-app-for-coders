import { useEffect, useState } from "react";

const Nutrition = (props) => {
  const [meals, setMeals] = useState([]);
  useEffect(() => {
    const apiKey = process.env.REACT_APP_API_KEY;
    const url =
      "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch?query=pasta&diet=vegetarian&number=100";
    try {
      fetch(url, {
        headers: {
          "X-RapidAPI-Key": apiKey,
          "X-RapidAPI-Host":
            "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
        },
      })
        .then((resp) => resp.json())
        .then((resp) => setMeals(resp.results));
    } catch (error) {
      console.error(error);
    }
  }, []);
  return (
    <>
      <h1>{props.title}</h1>
      <div className="grid grid-cols-4 gap-x-4 gap-y-7 justify-items-center">
        {meals &&
          meals.map((meal) => (
            <div className="flex flex-col items-center" key={meal.id}>
              <img src={meal.image} alt={meal.title} className="w-32" />
              <a href="/">{meal.title}</a>
            </div>
          ))}
      </div>
    </>
  );
};

export default Nutrition;
