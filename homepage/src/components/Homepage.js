import React from "react";
import "../styling/hompage.css";
import Navbar from "./NavBar";
import bg from "../images/1.jpg";
import { AiOutlineSearch, AiFillShopping } from "react-icons/ai";
import {
  MdMoreHoriz,
  MdHomeWork,
  MdOutlineRestaurant,
  MdMusicNote,
} from "react-icons/md";
const Homepage = () => {
  return (
    <>
          <div className="homeapp">
              <Navbar/>
        <img className="bg" src={bg} alt="" />
        <div className="homediv">
          <h1 className="homeheading">
            Discover your Perfect Business Nearby!
          </h1>
          <h3 className="homesubheading">
            Check Ratings, Read Reviews &#38; Buy
          </h3>
          <input className="homesearch" placeholer="What are you looking for" />

          <input className="homesearch" placeholer="Select Category" />
          <button className="btn">Search</button>
        </div>
        <div className="mainselect">
          <div className="flexselect">
            <div className="innerflex">
              <div className="icons"><AiFillShopping /></div>
              <span className="innerspan">Shop</span>
            </div>
            <div className="innerflex">
              <div className="icons"><MdHomeWork /></div>
              <span className="innerspan">Home Stays</span>
            </div>
            <div className="innerflex">
              <div className="icons"><MdOutlineRestaurant /></div>
              <span className="innerspan">Restaurants</span>
            </div>
            <div className="innerflex">
              <div className="icons"><MdMusicNote /></div>
              <span className="innerspan">Music</span>
            </div>
            <div className="innerflex">
              <div className="icons"><MdMoreHoriz /></div>
              <span className="innerspan">More</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
