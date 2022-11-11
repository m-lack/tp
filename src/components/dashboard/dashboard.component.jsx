import "./dashboard.styles.scss";
import bird1 from "../../assets/7A715AD8-449D-4B5A-ABA2C5D92D9B5A21_source.webp";
import bird2 from "../../assets/image_10508_1e-Meratus-Jungle-Flycatcher.jpg";
import bird3 from "../../assets/STanager-Shapiro-ML.jpg";
import logo from "../../assets/3889524.png";

import { Link } from "react-router-dom";

const Dashboard = ({}) => {
  return (
    <div className="dashboard-container">
      <div className="dashboard-header">Your Pets</div>
      <br />
      <div className="dashboard-items">
        <img src={bird1} alt="" />
        <img src={bird2} alt="" />
        <img src={bird3} alt="" />
      </div>
      <div className="disconnected">
      <h3>{localStorage.getItem("date")}</h3>
        <Link
          onClick={() => {
            const lastSeen = new Date();
            localStorage.setItem("date", "", lastSeen);
          }}
          to="/"
        >
          <div className="dic-img">
            {" "}
            <img src={logo} alt="" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
