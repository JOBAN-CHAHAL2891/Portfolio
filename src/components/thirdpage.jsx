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
    <div className="projects_container">
      <h2>PROJECTS</h2>

      <Slider {...settings}>
        {projects.map((project) => (
          <div key={project.id} className="project_card">
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <button>View Project</button>
            </a>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Thirdpage;
