import React from 'react'
import { useState } from "react";

export const Cars = (props) => {

    const [review, setReview] = useState('');
    const [ammount, setAmmount] = useState(''); 
    
    
    
    
return (<div className="card-container">
      
      {props.Cars.map((car) => (
      <div className="col-3">
      <div className="card" key={car.index}>
        <img
        className="card-img-top"
        src={car.image}
        alt="Card image cap"
        />
        <div class="card-body ">
          <h5 class="card-title">Brand: {car.brand}</h5>
          <h6 class="card-subtitle">Model: {car.model}</h6>
          <p class="card-text mt-2">{car.carsAvailable}</p>
          <h5 className="card-title">{car.carsAvailable} Cars Available</h5>
          <h2>Car Price: {car.price / 1000000000000000000} cUSD</h2>
         
         
          <div className="d-flex justify-content-between">
                  <div
                      style={{ cursor: "grab" }}
                      onClick={() => likesCar(car.index)}
                    >
                      <i class="bi bi-hand-thumbs-up"></i>
                      <p>{car.likes} Likes</p>
                    </div>
                    <div
                      style={{ cursor: "grab" }}
                      onClick={() => dislikesCar(car.index)}
                    >
                      <i class="bi bi-hand-thumbs-down"></i>
                      <p>{car.dislikes} Dislikes</p>
                  </div>
      </div>        
          

          
{ props.walletAddress === car.owner &&(
                  <form>
                  <div class="form-r">
                      <input type="text" class="form-control mt-4" value={ammount}
                           onChange={(e) => setAmmount(e.target.value)} placeholder="enter ammount"/>
                      <button type="button" onClick={()=>props.addmoreCars(car.index, ammount)} class="btn btn-outline-info mt-2">add more tickets</button>
                      
                  </div>
                </form>
                
                       )}
        
          <form>
      <div class="form-r">
        
          <input type="text" class="form-control mt-4" value={review}
               onChange={(e) => setReview(e.target.value)} placeholder="enter review"/>
    
          <button type="button" onClick={()=>props.addReview(car.index, review)} class="btn btn-dark mt-2">Add review</button>
          <h5 class="card-title mt-5">Reviews</h5>
          {car.reviews.map((c) =>(
        <p class="card-text mt-2" key={c.index}>{c.reviewMessage}</p>
           ))};
      </div>
    </form>
          
        </div>
      </div>
      </div>
      ))};
    
    </div>
  );
};
export default Cars;