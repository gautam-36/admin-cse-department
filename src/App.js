import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
// import New from "./pages/new/New";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { productInputs, userInputs } from "./formSource";
import "./styles/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import { AuthContext } from "./context/AuthContext";
// import { hotelColumns, roomColumns, userColumns } from "./datatablesource";
// import NewHotel from "./pages/newHotel/NewHotel";
// import NewRoom from "./pages/newRoom/NewRoom";
import Faculty from "./pages/faculty/Faculty";
import Alumni from "./pages/alumni/Alumni";
import './styles/main.scss';
import Admin from "./pages/admin/Admin";
import NotFound from "./pages/NotFound";
import ProtectedRoute from "./components/ProtectedRoute";
import NewFaculty from "./pages/newFaculty/NewFaculty";
import NewAlumni from "./pages/newAlumni/NewAlumni";
import Register from "./pages/register/Register";
import AddNotice from "./pages/addNotices/AddNotice";
import Notice from "./pages/notice/Notice";
import News from "./pages/news/News";
import AddNews from "./pages/add News/AddNews";
import Announcement from "./pages/announcement/Announcement";
import AddAnnouncement from "./pages/add Announcement/AddAnnouncement";
import Publication from "./pages/publication/Publication";
import AddPublication from "./pages/add Publications/AddPublication";
import AddEvents from "./pages/add events/AddEvents";
import Event from "./pages/Events/Event";
import Syllabus from "./pages/syllabus/Syllabus";
import AddSyllabus from "./pages/add Syllabus/AddSyllabus";

function App() {
  const { darkMode } = useContext(DarkModeContext);

  // const ProtectedRoute = ({ children }) => {
  //   const user = localStorage.getItem('isAuthenticated')

  //   if (user != true) {
  //     return <Navigate to="/login" />;
  //   }
  //   return children;
  // };

  return (
    <BrowserRouter>
      <div className={darkMode ? "app dark" : "app"}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="/faculty"
            element={
              <ProtectedRoute>
                <Faculty />
              </ProtectedRoute>
            }
          />
          <Route
            path="/create-admin"
            element={
              <ProtectedRoute>
                <Register />
              </ProtectedRoute>
            }
          />
          <Route
            path="/alumni"
            element={
              <ProtectedRoute>
                <Alumni />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <Admin />
              </ProtectedRoute>
            }
          />
          <Route
            path="/faculty/newFaculty"
            element={
              <ProtectedRoute>
                <NewFaculty />
              </ProtectedRoute>
            }
          />
          <Route
            path="/alumni/newAlumni"
            element={
              <ProtectedRoute>
                <NewAlumni />
              </ProtectedRoute>
            }
          />
          <Route
            path="/news"
            element={
              <ProtectedRoute>
                <News />
              </ProtectedRoute>
            }
          />
          <Route
            path="/news/newNews"
            element={
              <ProtectedRoute>
                <AddNews />
              </ProtectedRoute>
            }
          />
          <Route
            path="/events"
            element={
              <ProtectedRoute>
                <Event />
              </ProtectedRoute>
            }
          />
          <Route
            path="/events/newEvents"
            element={
              <ProtectedRoute>
                <AddEvents />
              </ProtectedRoute>
            }
          />
          <Route
            path="/dates"
            element={
              <ProtectedRoute>
                <Notice />
              </ProtectedRoute>
            }
          />
          <Route
            path="/dates/newDate"
            element={
              <ProtectedRoute>
                <AddNotice />
              </ProtectedRoute>
            }
          />
          <Route
            path="/announcement"
            element={
              <ProtectedRoute>
                <Announcement />
              </ProtectedRoute>
            }
          />
          <Route
            path="/announcement/newAnnouncement"
            element={
              <ProtectedRoute>
                <AddAnnouncement />
              </ProtectedRoute>
            }
          />
          <Route
            path="/publication"
            element={
              <ProtectedRoute>
                <Publication/>
              </ProtectedRoute>
            }
          />
          <Route
            path="/publication/newPublication"
            element={
              <ProtectedRoute>
                <AddPublication />
              </ProtectedRoute>
            }
          />
          <Route
            path="/syllabus"
            element={
              <ProtectedRoute>
                <Syllabus />
              </ProtectedRoute>
            }
          />
          <Route
            path="/syllabus/newSyllabus"
            element={
              <ProtectedRoute>
                <AddSyllabus />
              </ProtectedRoute>
            }
          />
          <Route
            path="/notice"
            element={
              <ProtectedRoute>
                <Notice />
              </ProtectedRoute>
            }
          />
          <Route
            path="/notice/newNotice"
            element={
              <ProtectedRoute>
                <AddNotice />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;


{/* <Route path="/">
  <Route path="login" element={<Login />} />
  <Route
    index
    element={
      // <ProtectedRoute>
      <Home />
      // </ProtectedRoute>
    }
  />
  {/* <Route path="users">
              <Route
                index
                element={
                  // <ProtectedRoute>
                  <List columns={userColumns} />
                  // </ProtectedRoute>
                }
              />
              <Route
                path=":userId"
                element={
                  // <ProtectedRoute>
                  <Single />
                  // </ProtectedRoute>
                }
              />
              <Route
                path="new"
                element={
                  // <ProtectedRoute>
                  <New inputs={userInputs} title="Add New User" />
                  // </ProtectedRoute>
                }
              />
            </Route> 
  <Route path="faculty">
    <Route
      index
      element={
        // <ProtectedRoute>
        <Faculty />
        // </ProtectedRoute>
      }
    />
    {/*  <Route path="hotels">
             <Route
                index
                element={
                  // <ProtectedRoute>
                  <List columns={hotelColumns} />
                  // </ProtectedRoute>
                }
              /> */}
{/* <Route
                path=":productId"
                element={
                  // <ProtectedRoute>
                  <Single />
                  // </ProtectedRoute>
                }
              /> 
    <Route
      path="new"
      element={
        // <ProtectedRoute>
        <NewHotel />
        // </ProtectedRoute>
      }
    />
  </Route>
  <Route path="alumni">
    <Route
      index
      element={
        // <ProtectedRoute>
        <Alumni />
        // </ProtectedRoute>
      }
    />
    {/* <Route
                path=":productId"
                element={
                  // <ProtectedRoute>
                  <Single />
                  // </ProtectedRoute>
                }
              /> 
    <Route
      path="new"
      element={
        // <ProtectedRoute>
        <NewRoom />
        // </ProtectedRoute>
      }
    />
  </Route>
</Route> */}
