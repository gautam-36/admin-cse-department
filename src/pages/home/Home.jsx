import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
// import Chart from "../../components/chart/Chart";
import Table from "../../components/table/Table";
import Visitors from "../../components/visitors/Visitors";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        {/* <div className="widgets">
          <Widget type="faculty" />
          <Widget type="alumni" />
        </div>
      
        <Visitors /> */}
        <div className="routes-container">
          <div className="routes">
            <img src="https://cdn-icons-png.flaticon.com/128/143/143438.png" alt="" />
            <p>Faculty</p>
          </div>
          <div className="routes">
            <img src="https://cdn-icons-png.flaticon.com/128/11296/11296121.png" alt="" />
            <p>Alumni</p>
          </div>
          <div className="routes">
            <img src="https://cdn-icons-png.flaticon.com/128/10156/10156005.png" alt="" />
            <p>Students</p>
          </div>
          <div className="routes">
            <img src="https://cdn-icons-png.flaticon.com/128/143/143438.png" alt="" />
            <p>Staffs</p>
          </div>
          <div className="routes">
            <img src="https://cdn-icons-png.flaticon.com/128/15425/15425184.png" alt="" />
            <p>Create Admin</p>
          </div>
          <div className="routes">
            <img src="https://cdn-icons-png.flaticon.com/128/5272/5272064.png" alt="" />
            <p>Announcement</p>
          </div>
          <div className="routes">
            <img src="https://cdn-icons-png.flaticon.com/128/4675/4675249.png" alt="" />
            <p>Important Dates</p>
          </div>
          <div className="routes">
            <img src="https://cdn-icons-png.flaticon.com/128/16067/16067670.png" alt="" />
            <p>News</p>
          </div>
          <div className="routes">
            <img src="https://cdn-icons-png.flaticon.com/128/839/839636.png" alt="" />
            <p>Events/Seminar</p>
          </div>
          <div className="routes">
            <img src="https://cdn-icons-png.flaticon.com/128/8896/8896441.png" alt="" />
            <p>Publication</p>
          </div>
          <div className="routes">
            <img src="https://cdn-icons-png.flaticon.com/128/13969/13969633.png" alt="" />
            <p>Syllabus</p>
          </div>
          <div className="routes">
            <img src="https://cdn-icons-png.flaticon.com/128/15181/15181868.png" alt="" />
            <p>Research</p>
          </div>
        </div>


        {/* <div className="background-img">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTawlyGv8Twow66grTksCMh1awHgXYalV0j_-URvFIMZrqLw-xSQ3Smv3k&s=10" alt="" />
        </div> */}
      </div>
    </div>
  );
};

export default Home;
