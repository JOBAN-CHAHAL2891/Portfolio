import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./thirdpage.css";
import { projects } from "../data/projects";

function Thirdpage() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <section id='projects'>
    <div className="projects_container"  data-aos="fade-up">
      <h2>PROJECTS</h2>

      <Slider {...settings}>
        {projects.map((project) => (
          <div key={project.id} className="project_card"  data-aos="fade-left">
            <h3 data-aos="fade-up">{project.name}</h3>
            <p  data-aos="fade-right">{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <button  data-aos="fade-down">View Project</button>
            </a>
          </div>
        ))}
      </Slider>
    </div>
    </section>
  );
}

export default Thirdpage;
