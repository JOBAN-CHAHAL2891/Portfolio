import './fourthpage.css';

function Fourthpage() {
    return (
        <section id ="contact">
        <div className="fourthpage">
            <div className="fourheading"  data-aos="fade-down">CONTACT</div>
            <div className="contactcont">
                <form className="contact-form">

                    <label for="name"  data-aos="fade-right">Name</label>
                    <input type="text" id="name" name="name" placeholder="Enter your name" required />

                    <label for="email"  data-aos="fade-right">Email</label>
                    <input type="email" id="email" name="email" placeholder="Enter your email" required />

                    <label for="message"  data-aos="fade-right">Message</label>
                    <textarea id="message" name="message" placeholder="Write your message..." rows="5" required></textarea>

                    <button type="submit">SEND</button>

                </form>
            </div>
        </div>
        </section>
    );
}

export default Fourthpage;