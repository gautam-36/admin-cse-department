import React, { useState } from 'react';
import { json, useNavigate } from 'react-router-dom';
import axios from "axios"
const Login = () => {
  const [email, setemail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async() => {
    try{
      console.log("handle login is working right")
      // Simulate authentication
  const res=await axios.post("http://localhost:5000/api/admin/login",{email,password},{
    withCredentials:true
  })
      console.log(res)
      
      console.log()
    

      
  
      if (res.data.sucess) {
        sessionStorage.setItem('data', JSON.stringify(res?.data?.AcessTOken));
        
        navigate('/');
      } else {
        alert('Invalid email or password');
      }
    }
    catch(err){
      console.error(err)
    }
   
  };

  return (
    <div className="login-page">
      <h2>Login</h2>
      <div className="form-group">
        <label htmlFor="email">email:</label>
        <input
          type="text"
          id="email"
          value={email}
          onChange={(e) => setemail(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;



























// import axios from "axios";
// import { useContext, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { AuthContext } from "../../context/AuthContext";
// // import { AuthContext } from "../../context/AuthContext";
// import "./login.scss";

// const Login = () => {
//   const [credentials, setCredentials] = useState({
//     email: undefined,
//     password: undefined,
//   });

//   const { loading, error, dispatch } = useContext(AuthContext);

//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
//   };

//   const handleClick = async (e) => {
//     e.preventDefault();
//     dispatch({ type: "LOGIN_START" });
//     try {
//       const res = await axios.post("/auth/login", credentials);
//       if (res.data.isAdmin) {
//         dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });

//         navigate("/");
//       } else {
//         dispatch({
//           type: "LOGIN_FAILURE",
//           payload: { message: "You are not allowed!" },
//         });
//       }
//     } catch (err) {
//       dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
//     }
//   };

//   return (
//     <div className="login">
//       <div className="lContainer">
//         <input
//           type="text"
//           placeholder="email"
//           id="email"
//           onChange={handleChange}
//           className="lInput"
//         />
//         <input
//           type="password"
//           placeholder="password"
//           id="password"
//           onChange={handleChange}
//           className="lInput"
//         />
//         <button disabled={loading} onClick={handleClick} className="lButton">
//           Login
//         </button>
//         {error && <span>{error.message}</span>}
//       </div>
//     </div>
//   );
// };

// export default Login;
