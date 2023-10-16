import { useEffect, useState } from "react";

const Nutrition = (props) => {
  const [meals, setMeals] = useState([]);
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery(e.target.elements.query.value);
    console.log(query);
  };

  useEffect(() => {
    const apiKey = process.env.REACT_APP_API_KEY;
    const url = `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch?query=${query}&diet=vegetarian&maxSugar=30&maxAlcohol=0&number=100`;
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
  }, [query]);

  return (
    <>
      <h1>{props.title}</h1>
      <p className="text-lime-600 text-center mb-5">
        Inspiration for healthy recipes &#128170;&#128513;
      </p>
      {/* Search bar */}
      <form class="relative mb-5" onSubmit={handleSubmit}>
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg
            class="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="search"
          className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-lime-500 focus:border-lime-500 outline-none"
          placeholder="Enter a meal"
          name="query"
          required
        ></input>
        <button
          type="submit"
          class="text-white absolute right-2.5 bottom-2.5 bg-lime-500 hover:bg-lime-600 focus:ring-4 focus:outline-none focus:ring-lime-300 font-medium rounded-lg text-sm px-4 py-2"
        >
          Search
        </button>
      </form>
      {/* Image grid */}
      <div className="grid md:grid-cols-4 gap-x-4 md:gap-y-7 gap-y-10 justify-items-center">
        {meals &&
          meals.map((meal) => (
            <div
              className="flex flex-col md:gap-3 gap-1 items-center"
              key={meal.id}
            >
              <img src={meal.image} alt={meal.title} className="w-full" />
              <a href="/" className="text-2xl">
                {meal.title}
              </a>
            </div>
          ))}
      </div>
    </>
  );
};

export default Nutrition;
