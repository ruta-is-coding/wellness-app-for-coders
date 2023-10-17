import myImage from "../images/me.jpg";
import { Link } from "react-router-dom";

const About = (props) => {
  return (
    <>
      <h1>{props.title}</h1>
      <section className="grid md:grid-cols-2 md:gap-14 gap-3 md:items-center">
        <img src={myImage} alt="My photo" className="w-100 rounded-lg my-3" />
        <div>
          <p className="md:mb-5 mb-3">
            My name is Rūta. I am an aspiring web developer with knowledge of
            front-end and back-end technologies. From my previous job
            experiences in Life Sciences, medicine, and client service, I bring
            orientation to detail, analytical, organizational, and communication
            skills. I'm eager to work in the Tech industry and learn more about
            web and software development.
          </p>
          <Link to="/contact">Checkout my contact info here</Link>
        </div>
      </section>
    </>
  );
};

export default About;
