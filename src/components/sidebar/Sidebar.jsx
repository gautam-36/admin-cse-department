import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";
import axios from "axios";
import { Language } from "@mui/icons-material";

const Sidebar = () => {

  const { dispatch } = useContext(DarkModeContext);
  const handleLogout = async () => {
    try {
      console.log("clicked")
      const res = await axios.get("http://localhost:5000/api/admin/logout", {
        withCredentials: true
      });
      console.log(res)
      sessionStorage.removeItem('data');
      window.location.reload();
    }
    catch (err) {
      console.error(err)
    }
  };



  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">CSE DEPARTMENT</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <Link to="/" style={{ textDecoration: "none" }}>
            <li>
              <DashboardIcon className="icon" />
              <span>Dashboard</span>
            </li>
          </Link>
          <p className="title">LISTS</p>
          <Link to="/faculty" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>Faculty</span>
            </li>
          </Link>
          <Link to="/alumni" style={{ textDecoration: "none" }}>
            <li>
              <StoreIcon className="icon" />
              <span>Alumni</span>
            </li>
          </Link>
          <Link to="/create-admin" style={{ textDecoration: "none" }}>
            <li>
              <StoreIcon className="icon" />
              <span>create admin</span>
            </li>
          </Link>
          <Link to="/announcement" style={{ textDecoration: "none" }}>
            <li>
              <StoreIcon className="icon" />
              <span>Announcement</span>
            </li>
          </Link>
          <Link to="/dates" style={{ textDecoration: "none" }}>
            <li>
              <StoreIcon className="icon" />
              <span>Important Dates</span>
            </li>
          </Link>
          <Link to="/news" style={{ textDecoration: "none" }}>
            <li>
              <StoreIcon className="icon" />
              <span>News</span>
            </li>
          </Link>
          <Link to="/events" style={{ textDecoration: "none" }}>
            <li>
              <StoreIcon className="icon" />
              <span>Events/Seminar</span>
            </li>
          </Link>
          <Link to="/publication" style={{ textDecoration: "none" }}>
            <li>
              <StoreIcon className="icon" />
              <span>Publications</span>
            </li>
          </Link>
          <Link to="/syllabus" style={{ textDecoration: "none" }}>
            <li>
              <StoreIcon className="icon" />
              <span>Syllabus</span>
            </li>
          </Link>
          <Link to="/notice" style={{ textDecoration: "none" }}>
            <li>
              <StoreIcon className="icon" />
              <span>Notice</span>
            </li>
          </Link>
          {/* <Link to="/rooms" style={{ textDecoration: "none" }}>
            <li>
              <CreditCardIcon className="icon" />
              <span>Rooms</span>
            </li>
          </Link> */}
          {/* <li>
            <LocalShippingIcon className="icon" />
            <span>Delivery</span>
          </li>
          <p className="title">USEFUL</p>
          <li>
            <InsertChartIcon className="icon" />
            <span>Stats</span>
          </li>
          <li>
            <NotificationsNoneIcon className="icon" />
            <span>Notifications</span>
          </li>
          <p className="title">SERVICE</p>
          <li>
            <SettingsSystemDaydreamOutlinedIcon className="icon" />
            <span>System Health</span>
          </li>
          <li>
            <PsychologyOutlinedIcon className="icon" />
            <span>Logs</span>
          </li>
          <li>
            <SettingsApplicationsIcon className="icon" />
            <span>Settings</span>
          </li> */}
          <p className="title">USER</p>
          <Link to="/admin" style={{ textDecoration: "none" }}>
            <li>
              <AccountCircleOutlinedIcon className="icon" />
              <span>Admin</span>
            </li>
          </Link>
          <li>
            <ExitToAppIcon className="icon" />
            <span onClick={handleLogout}>Logout</span>
          </li>
          <li>
            <a href="http://localhost:3001/" target="_blank" style={{ textDecoration: 'none' }}>
              <Language className="icon" />
              <span>Go to main website</span>
            </a>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div>
    </div>
  );
};

export default Sidebar;
