import React from 'react'
import "../styling/find.css"
import vege from "../images/3.jpg";
const Find = () => {
  return (
      <div className='findapp'>
          <div className='outer'>
              <h1 className='findheading'>Find the Best Businesses in Town</h1>
              <h4 className='findsubheading'>Famous Shops</h4>
        <div className='outerbox'>
          <div className='flexstore'>
            <div className='cont'>
              <img className='imgs' src={vege} alt=""></img>
              <span className='msg'>Clothing Store ADC</span>
            </div>
            <div className='cont'>
              <img className='imgs' src={vege} alt=""></img>
              <span className='msg'>Vegetable Store ADC</span>
            </div>
            <div className='cont'>
              <img className='imgs' src={vege} alt=""></img>
              <span className='msg'>Coffee Store ADC</span>
            </div>
            <div className='cont'>
              <img className='imgs' src={vege} alt=""></img>
              <span className='msg'>Fast Food Store ADC</span>
            </div>
            <div className='cont'>
              <img className='imgs' src={vege} alt=""></img>
              <span className='msg'>Cloth Store ADC</span>
            </div>
            <div className='cont'>
              <img className='imgs' src={vege} alt=""></img>
              <span className='msg'>Food Store ADC</span>
            </div>
          </div>
        </div>
        
          </div>
    </div>
  )
}

export default Find