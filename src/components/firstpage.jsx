import myphoto from './bg_remove.png';
import './firstpage.css';

function Firstpage() {
    return(
        <section id ="home">
        <div class="firstpage">
            <div class="heading">
                <h1  data-aos="fade-down">WEB DEVELOPER</h1>
            </div>
            <div class="cont_one">
                <div class="cont_one_front">
                    <div class="intro"  data-aos="fade-right">I, AM </div>
                    <div class="name"  data-aos="fade-right">JOBANPREET SINGH CHAHAL</div>
                    <div class="content"  data-aos="fade-up">
                        <p> I create clean, responsive, and interactive websites using HTML, CSS, and JavaScript.</p>
                        <p>Passionate about building modern, responsive websites.</p>
                    </div>
                </div>
                <div class="cont_one_end"  data-aos="fade-left">
                    <div class="image"><img src={myphoto} alt="Background"/></div>
                </div>
            </div>
            <div class="firstbuttons"  data-aos="zoom-in">
                <button>Resume</button>
                <button>Contact Me</button>
            </div>
        </div>
        </section>
    );
}

export default Firstpage;