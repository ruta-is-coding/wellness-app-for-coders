import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Meal = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState({
    title: "",
    analyzedInstructions: [
      {
        steps: [],
      },
    ],
    veryHealthy: "",
  });

  // useEffect(() => {
  // const apiKey = process.env.REACT_APP_API_KEY;
  //   const url = `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/${id}/information`;
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
  //         setRecipe(resp);
  //         console.log(resp);
  //       });
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }, []);
  return (
    recipe && (
      <>
        <h1>{recipe.title}</h1>
        {recipe.veryHealthy && (
          <div className="flex justify-center items-center my-5">
            <h2 className="text-lime-600 font-medium">Very healthy</h2>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100"
              height="100"
              fill="#65a30d"
              viewBox="0 0 256 256"
            >
              <path d="M223.45,40.07a8,8,0,0,0-7.52-7.52C139.8,28.08,78.82,51,52.82,94a87.09,87.09,0,0,0-12.76,49A101.72,101.72,0,0,0,46.7,175.2a4,4,0,0,0,6.61,1.43l85-86.3a8,8,0,0,1,11.32,11.32L56.74,195.94,42.55,210.13a8.2,8.2,0,0,0-.6,11.1,8,8,0,0,0,11.71.43l16.79-16.79c14.14,6.84,28.41,10.57,42.56,11.07q1.67.06,3.33.06A86.93,86.93,0,0,0,162,203.18C205,177.18,227.93,116.21,223.45,40.07Z"></path>
            </svg>
          </div>
        )}
        <div className="flex justify-center">
          <img src={recipe.image} alt={recipe.title} />
        </div>
        <h2 className="text-center my-5 text-lime-600">Preparation:</h2>
        <ol className="list-decimal">
          {recipe.analyzedInstructions[0].steps.map((step, index) => (
            <li className="pl-4 pb-2" key={index}>
              {step.step}
            </li>
          ))}
        </ol>
      </>
    )
  );
};

export default Meal;
