import { useEffect, useState } from "react";

const Workouts = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const apiKey = process.env.REACT_APP_API_KEY;
    const url =
      "https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises?muscle=middle_back";
    try {
      fetch(url, {
        headers: {
          "X-RapidAPI-Key": apiKey,
          "X-RapidAPI-Host": "exercises-by-api-ninjas.p.rapidapi.com",
        },
      })
        .then((resp) => resp.json())
        .then((resp) => setData(resp));
    } catch (error) {
      console.error(error);
    }
  }, []);
  return (
    <>
      <h1>{props.title}</h1>
      <div className="grid grid-cols-4 gap-4 justify-items-center">
        {data &&
          data.map((exercise) => (
            <div className="rounded overflow-hidden shadow-lg mb-5 p-5 bg-lime-100 w-40 h-40 flex justify-center items-center">
              <a href="/" className="text-center font-bold">
                {exercise.name}
              </a>
            </div>
          ))}
      </div>
    </>
  );
};

export default Workouts;
