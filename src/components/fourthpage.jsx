import './fourthpage.css';

function Fourthpage() {
    return (
        <div className="fourthpage">
            <div className="fourheading">CONTACT</div>
            <div className="contactcont">
                <form className="contact-form">

                    <label for="name">Name</label>
                    <input type="text" id="name" name="name" placeholder="Enter your name" required />

                    <label for="email">Email</label>
                    <input type="email" id="email" name="email" placeholder="Enter your email" required />

                    <label for="message">Message</label>
                    <textarea id="message" name="message" placeholder="Write your message..." rows="5" required></textarea>

                    <button type="submit">SEND</button>

                </form>
            </div>
        </div>
    );
}

export default Fourthpage;