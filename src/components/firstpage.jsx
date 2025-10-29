import myphoto from './bg_remove.png';
import './firstpage.css';

function Firstpage() {
    return(
        <div class="firstpage">
            <div class="heading">
                <h1>WEB DEVELOPER</h1>
            </div>
            <div class="cont_one">
                <div class="cont_one_front">
                    <div class="intro">I, AM </div>
                    <div class="name">JOBANPREET SINGH CHAHAL</div>
                    <div class="content">
                        <p> I create clean, responsive, and interactive websites using HTML, CSS, and JavaScript.</p>
                        <p>Passionate about building modern, responsive websites.</p>
                    </div>
                </div>
                <div class="cont_one_end">
                    <div class="image"><img src={myphoto} alt="Background"/></div>
                </div>
            </div>
            <div class="firstbuttons">
                <button>Resume</button>
                <button>Contact Me</button>
            </div>
        </div>
    );
}
export default Firstpage;