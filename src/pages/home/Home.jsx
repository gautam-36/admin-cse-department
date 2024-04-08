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
        <div className="widgets">
          <Widget type="faculty" />
          <Widget type="alumni" />
        </div>
      
        <Visitors />
          

        {/* <div className="background-img">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTawlyGv8Twow66grTksCMh1awHgXYalV0j_-URvFIMZrqLw-xSQ3Smv3k&s=10" alt="" />
        </div> */}
      </div>
    </div>
  );
};

export default Home;
