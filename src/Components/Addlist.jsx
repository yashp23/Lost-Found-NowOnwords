import React from "react";
import { FaSearch } from "react-icons/fa";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Addlist() {
  return (
    <>
      <div id="green_el_2"></div>
      <Navbar />
      <List />
      <div className="lost">
        <Section2 />
      </div>
    </>
  );
}

function Navbar() {
  const Navigate = useNavigate();
  return (
    <div className="navbar">
      <img src="/imgs/logo.jpg" alt="Logo" />
      <nav id="menu">
        <menu onClick={() => Navigate("/register")}>Register</menu>
        <Link to={"/"}>
          <menu >Lost-Items</menu>
        </Link>
        <menu>Recent</menu>
      </nav>
    </div>
  );
}
function List() {
  const handleSearchClick = () => {
    // Add your search logic here
    console.log("Search button clicked!");
  };
  const iconStyle = {
    marginRight: "5px", // Adjust the margin as needed
  };
  return (
    <div className="search1">
      <input type="text" placeholder="Search " />
      <button className="search2" onClick={handleSearchClick}>
        <FaSearch style={iconStyle} />
        Search
      </button>
    </div>
  );
}

function Section2() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/recent")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((result) => {
        console.log("Fetched data:", result);
        setItems(result);
      })
      .catch((error) => {
        console.error("Fetching error", error);
      });
  }, []);

  return (
    <>
      <div className="section2">
        <h2>Recenty Registered Items :</h2>
        <div className="S2container">
          {items.map((item, index) => (
            <div key={index} className="S2box">
              <a href="/lostitems">
                <div className="S2image">
                  <img src={item.uploadedImage} alt={`Image ${index + 1}`} />
                </div>
              </a>
              <div className="details">
                <h2>Name : {item.name}</h2>
                <p>Location : {item.location}</p>
                <p>
                  Date : {new Date(item.userSelectedDate).toLocaleDateString()}
                </p>
              </div>
            </div>
            
          ))}
        </div>
      </div>
    </>
  );
}
