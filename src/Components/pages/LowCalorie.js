import React from 'react';
import '../../App.css';
import './Diets.css';

function LowCalorie(){
    return(
        <>
        <div class="main-container">
  <div class="heading">
      <br/>
    <h1 class="heading__title">Low calorie diet</h1>
    <p class="heading__credits"><a class="heading__link" target="_blank" >Complement your Workout with the proper diet</a></p>
  </div>
  <div class="cards">
    <div class="card card-1">
      <div class="card__icon"><i class="fas fa-bacon fa-fw" ></i>Meats and Meat Substitutes</div>
      <h2 class="card__title"><ul>
                    <li>Skinless, boneless chicken or turkey</li>
                    <li>Loin or round cuts of meat (beef, pork, and lamb)</li>
                    <li>Fish, Shellfish</li>
                    <li>Eggs and egg whites</li>
                    <li>Dried beans and peas</li>
                    <li>Low-sodium canned beans</li>
                    <li>Tofu</li>
                    <li>Tempeh</li>
                    <li>Nuts (limit to 1 ounce per serving)</li>
                    <li>Nut butters (limit to 2 tablespoons per serving)</li>
                    <li>Seeds</li>
                    </ul></h2>
    </div>
    <div class="card card-2">
      <div class="card__icon"><i class="fas fa-hamburger fa-fw"></i>Fat</div>
      <h2 class="card__title"><ul>
                    <li>Olive oil (limit to 1 tablespoon per serving)</li>
                    <li>Canola oil (limit to 1 tablespoon per serving)</li>
                    <li>Nut or seed oils (limit to 1 tablespoon per serving)</li>
                    <li>Avocados (limit to ½ avocado per serving)</li>
                    <li>Low-fat mayonnaise (limit to 2 tablespoons per serving)</li>
                    <li>Whipped butter (limit to 1 tablespoon per serving)</li>
                    </ul></h2>
     
    </div>
    <div class="card card-3">
      <div class="card__icon"><i class="fas fa-coffee fa-fw"></i>Milk and Dairy Products</div>
      <h2 class="card__title"><ul>
                    <li>Low-fat milk</li>
                    <li>Low-fat lactose-free milk</li>
                    <li>Low-fat plain yogurt</li>
                    <li>Low-fat cottage cheese</li>
                    <li>Milk alternatives (soy, almond, coconut, cashew, and hemp milks)</li>
                    </ul></h2>
     
    </div>
    <div class="card card-4">
      <div class="card__icon"><i class="fas fa-carrot fa-fw"></i>Fruits, Vegetables and Juices</div>
      <h2 class="card__title">
            <ul>
                <li>All fresh and frozen vegetables</li>
                <li>Low-sodium canned vegetables</li>   
                <li>All fresh and frozen fruit</li>
                <li>Juice with no sugar</li>
            </ul>
      </h2>
     
    </div>
    <div class="card card-5">
      <div class="card__icon"><i class="fas fa-bread-slice fa-fw"></i>Breads and Grains</div>
      
      <h2 class="card__title">
            <ul>
                <li>Whole-wheat products, including bread, pasta,</li>   
                <li>Brown rice</li>
                <li>Oats</li>
                <li>Quinoa</li>
                <li>Barley</li>
                <li>Plain air-popped popcorn</li>
            </ul>
        </h2>
     
    </div>
    <div class="card card-6">
      <div class="card__icon"><i class="fas fa-glass-martini-alt fa-fw"></i>Beverages</div>
      <h2 class="card__title">
            <ul>
                <li>Water</li>
                <li>Sparkling water</li>
                <li>Tea</li>
                <li>Coffee</li>
            </ul>
        </h2>
    </div>
  </div>
</div>

</>
    );
}
export default LowCalorie;