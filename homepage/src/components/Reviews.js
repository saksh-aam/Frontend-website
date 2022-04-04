import React from "react";
import "../styling/reviews.css";
import pic from "../images/3.jpg";
const Reviews = () => {
  return (
    <div className="reviewapp">
      <div className="outer">
        <h1 className="hheading">Latest Reviews</h1>
        <h4 className="subheading">Reviews that matters!</h4>
      </div>
      <div className="outer-rev">
        <div className="reviewsbox">
          <div className="pic">
            <img className="pic-img" src={pic} alt=""></img>
          </div>
          {/* <div className='rating'><img scr={ } alt=""></img></div> */}
          <span className="name">John Doe</span> <span className="reviewd">reviewd</span>
          <h3>"Great Experience"</h3>
          <p>
            I really liked the place ce lot as it covered all the things I
            wanted
          </p>
          <div className="publish">
            <span className="dates">Published : 26 February 2022</span>
            <button className="btn">Read More</button>
          </div>
        </div>
        <div className="reviewsbox">
          <div className="pic">
            <img className="pic-img" src={pic} alt=""></img>
          </div>
          {/* <div className='rating'><img scr={ } alt=""></img></div> */}
          <span className="name">John Doe</span> <span className="reviewd">reviewd</span>
          <h3>"Great Experience"</h3>
          <p>
            I really liked the place ce lot as it covered all the things I
            wanted
          </p>
          <div className="publish">
            <span className="dates">Published : 26 February 2022</span>
            <button className="btn">Read More</button>
          </div>
        </div>
        <div className="reviewsbox">
          <div className="pic">
            <img className="pic-img" src={pic} alt=""></img>
          </div>
          {/* <div className='rating'><img scr={ } alt=""></img></div> */}
          <span className="name">John Doe</span> <span className="reviewd">reviewd</span>
          <h3>"Great Experience"</h3>
          <p>
            I really liked the place ce lot as it covered all the things I
            wanted
          </p>
          <div className="publish">
            <span className="dates">Published : 26 February 2022</span>
            <button className="btn">Read More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
