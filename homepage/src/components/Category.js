import React from 'react'
import "../styling/category.css"
import image from "../images/3.jpg"
const Category = () => {
  return (
      <div className='categoryapp'>
          <div className="outer">
        <h1 className="hheading">Browse Business by Category</h1>
          
              <div className='outerbox'>
                  <div className="categorybox">
              <div className='object'>
                  <div className='image'><img className="catimg" src={image} alt=""></img></div>
                  <span>Restaurans</span>
              </div>
              <div className='object'>
                  <div className='image'><img className="catimg" src={image} alt=""></img></div>
                  <span>Shopping</span>
              </div>
              <div className='object'>
                  <div className='image'><img className="catimg" src={image} alt=""></img></div>
                  <span>Nightlife</span>
              </div>
              <div className='object'>
                  <div className='image'><img className="catimg" src={image} alt=""></img></div>
                  <span>Active life</span>
              </div>
              <div className='object'>
                  <div className='image'><img className="catimg" src={image} alt=""></img></div>
                  <span>Beauty &#38; Spa’s</span>
              </div>
              <div className='object'>
                  <div className='image'><img className="catimg" src={image} alt=""></img></div>
                  <span>Restaurans</span>
              </div>
              <div className='object'>
                  <div className='image'><img className="catimg" src={image} alt=""></img></div>
                  <span>Automotive</span>
              </div>
              <div className='object'>
                  <div className='image'><img className="catimg" src={image} alt=""></img></div>
                  <span>Home Service</span>
              </div>
              <div className='object'>
                  <div className='image'><img className="catimg" src={image} alt=""></img></div>
                  <span>More Categories</span>
              </div>
          </div>
          </div>
          </div>
      </div>
  )
}

export default Category