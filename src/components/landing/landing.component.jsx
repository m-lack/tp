import { Link } from "react-router-dom";

import pets from "../../assets/Untitled-5.png"
import "./landing.styles.scss";

function Landing() {
    return (
      <div className="landing-container">
        <div className="landing-navbar">
          <div className="navbar-logo">Pets</div>
          <div className="login-page">
            <Link className="nav-link" to="/login">Login</Link>
            </div>
        </div>
        <div className="landing-section">
          <div className="section-text">
            a World Of <br /> Your Pets.
          </div>
          <div className="section-img">
            <img src={pets} alt="pets" />
          </div>
        </div>
        <div className="footer">
          <hr/>
          <p>© 2022 Pets</p>
        </div>
      </div>
    );
  }
  
  export default Landing;