import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

function Section1() {
  return (
    <div>
      <section id="landing_page">
        <div id="green_el" ></div>
        <Navbar />
        <LandingContent />
      </section>
    </div>
  );
}

function Navbar() {
  return (
    <div className="navbar">
      <img src="/imgs/logo.jpg" alt="Logo" />
      <nav id="menu">
        <menu>Recent</menu>
        <menu>Recent</menu>
        <menu>Recent</menu>
        <menu>Recent</menu>
      </nav>
    </div>
  );
}

// function LandingContent() {
//   const navigate = useNavigate();

//   const handleLoginClick = () => {
//     navigate("/login");
//   };

//   const handleSignupClick = () => {
//     navigate("/signup");
//   };
//   const [data,setdata] = useState('dev');
//   fetch('http://localhost:4000/apide').then((res)=>{
//     console.log("response type",res.json());
//     // result = res.json()
//   }).catch((err)=>{
//     console.log("fetching error",err);
//   })
//   return (
//     <div className="landing_content">
//       <div className="content">
//         <h4>Find Your</h4>
//         <h2>{data}</h2>
//         <p>
//           Discover a seamless lost-and-found experience at our hub, where lost
//           items find their way back home. Effortlessly register lost possessions
//           and celebrate the joy of rediscovery in our community-driven platform.
//           <br />
//           Explore our intuitive interface designed for quick and easy
//           registration of lost items. Join our growing community today and be
//           part of the heartwarming stories as we reunite people with their
//           cherished belongings.
//         </p>
//         <div className="btns">
//           <button onClick={handleLoginClick} id="login">
//             Login
//           </button>
//           <button onClick={handleSignupClick} id="signup">
//             Sign Up
//           </button>
//         </div>
//       </div>
//       <img src="imgs/vector_img.png" alt=""></img>
//     </div>
//   );
// }

function LandingContent() {
  const navigate = useNavigate();
  const [data, setData] = useState('dev');

  useEffect(() => {
    fetch('http://localhost:4000/apide')
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((result) => {
        console.log("Fetched data:", result);
        setData(result); // Set the data in the state
      })
      .catch((error) => {
        console.error("Fetching error", error);
      });
  },[]); // Empty dependency array ensures that the effect runs once when the component mounts

  const handleLoginClick = () => {
    navigate("/login");
  };

  const handleSignupClick = () => {
    navigate("/signup");
  };

    return (
    <div className="landing_content">
      <div className="content">
        <h4>Find Your</h4>
        {/* <h2>{data.d}</h2> */}
        <h2>Essentials</h2>
        <p>
          Discover a seamless lost-and-found experience at our hub, where lost
          items find their way back home. Effortlessly register lost possessions
          and celebrate the joy of rediscovery in our community-driven platform.
          <br />
          Explore our intuitive interface designed for quick and easy
          registration of lost items. Join our growing community today and be
          part of the heartwarming stories as we reunite people with their
          cherished belongings.
        </p>
        <div className="btns">
          <button onClick={handleLoginClick} id="login">
            Login
          </button>
          <button onClick={handleSignupClick} id="signup">
            Sign Up
          </button>
        </div>
      </div>
      <img src="imgs/vector_img.png" alt=""></img>
    </div>
  );
}


export default Section1;
