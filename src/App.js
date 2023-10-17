import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./pages/Home";
import Workouts from "./pages/Workouts";
import Nutrition from "./pages/Nutrition";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Section from "./components/section/Section";
import Meal from "./pages/Meal";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Section>
        <Routes>
          <Route
            path="/"
            element={<Home title="Welcome to an app for exhausted coders" />}
          />
          <Route
            path="/workouts"
            element={<Workouts title="Workout to refresh your brain" />}
          />
          <Route
            path="/nutrition"
            element={<Nutrition title="An apple a day keeps a doctor away" />}
          />
          <Route path="/about" element={<About title="Hello!" />} />
          <Route path="/contact" element={<Contact title="Find me on:" />} />
          <Route path="/meal/:id" element={<Meal />} />
        </Routes>
      </Section>
    </BrowserRouter>
  );
}

export default App;
