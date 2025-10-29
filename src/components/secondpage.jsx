import './secondpage.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { certificates } from "../data/certificates";

function Secondpage() {

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
  };

  return (
    <div className="secondpage">
      <div className="secondheading">ABOUT ME</div>

      <div className="second_my">
        <p>
          Currently, I am pursuing my graduation in <strong>Bachelor of Computer Applications (BCA)</strong> at 
          <strong> CT UNIVERSITY</strong>, from the academic session <strong>2023 to 2026</strong>, aiming to gain
          valuable knowledge and practical experience.
        </p>
      </div>

      <div className="second_subhead">LANGUAGES THAT I WORK WITH</div>
      <div className="second_langcont">
        <div className="slang_cont">
          <div className="s_name">HTML</div>
          <div className="s_name">CSS</div>
          <div className="s_name">JAVASCRIPT</div>
          <div className="s_name">REACT</div>
          <div className="s_name">EXPRESS</div>
          <div className="s_name">MONGO DB</div>
          <div className="s_name">PYTHON</div>
        </div>
      </div>

      <div className="certificates_section">
        <h2>My Certificates</h2>
        <Slider {...settings}>
          {certificates.map((cert) => (
            <div key={cert.id} className="certificate_card">
              <img src={cert.image} alt={`Certificate ${cert.id}`} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Secondpage;
