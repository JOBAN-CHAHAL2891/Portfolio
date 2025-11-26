import './Navbar.css';

function Navbar() {
  return (
    <div className="nav">
        <div className="front">CHAHAL</div>
        <ul>
            <li><a href='#home'>Home</a></li>
            <li><a href ='#about'>About</a></li>
            <li><a href ='#projects'>Projects</a></li>
            <li><a href ='#contact'>Contact</a></li>
        </ul>
    </div>
  );
}

export default Navbar;