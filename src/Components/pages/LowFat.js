import React from 'react';
import '../../App.css';
import './Diets.css';

function LowFat(){
    return(
        <> 
<div class="main-container">
  <div class="heading">
      <br/>
    <h1 class="heading__title">Low Fat Diet</h1>
    <p class="heading__credits"><a class="heading__link" target="_blank" >Complement your Workout with the proper diet</a></p>
  </div>
  <div class="cards">
    <div class="card card-1">
      <div class="card__icon"><i class="fas fa-bacon fa-fw" ></i>Meats and Meat Substitutes</div>
      <h2 class="card__title"><ul>
                    <li>Skinless, boneless chicken or turkey</li>
                    <li>Avoid fatty meats, such as bacon, sausage, franks, luncheon meats and ribs.</li>
                    <li>Fish</li>
                    <li>Limit egg yolks to three to four per week.</li>
                    <li>Use dried beans, peas, lentils and tofu.</li>
                    <li>Low-sodium canned beans</li>
                    <li>Avoid all organ meats, including liver.</li>
                    <li>Avoid fatty meats, such as bacon, sausage, franks, luncheon meats and ribs.</li>
                    </ul></h2>
    </div>
    <div class="card card-2">
      <div class="card__icon"><i class="fas fa-hamburger fa-fw"></i>Fat</div>
      <h2 class="card__title"><ul>
                    <li>Limit total intake of fats and oils.</li>
                    <li>Avoid butter, stick margarine, shortening, lard, palm and coconut oils.</li>
                    <li>Limit mayonnaise, salad dressings, gravies and sauces, unless they are homemade with low-fat ingredients.</li>
                    <li>Limit chocolate.</li>
                    <li>Choose low-fat and nonfat products, such as low-fat mayonnaise, low-fat or non-hydrogenated peanut butter, low-fat or fat-free salad dressings and nonfat gravy.</li>
                    <li>Use nuts in moderate amounts.</li>
                    </ul></h2>
     
    </div>
    <div class="card card-3">
      <div class="card__icon"><i class="fas fa-coffee fa-fw"></i>Milk and Dairy Products</div>
      <h2 class="card__title"><ul>
                    <li>Nonfat or low-fat milk</li>
                    <li>Mozzarella and ricotta cheese.</li>
                    <li>Light or fat-free cream cheese and sour cream.</li>
                    <li>Avoid cream and sauces made with cream</li>
                    </ul></h2>
     
    </div>
    <div class="card card-4">
      <div class="card__icon"><i class="fas fa-carrot fa-fw"></i>Fruits, Vegetables and Juices</div>
      <h2 class="card__title">
        <ul>
            <li>All fresh vegetables</li>
            <li>Avoid adding sauces, fat or oil to vegetables.</li>
            <li>All fresh fruit</li>
            <li>Lemon juice</li>

        </ul>
      </h2>
     
    </div>
    <div class="card card-5">
      <div class="card__icon"><i class="fas fa-bread-slice fa-fw"></i>Breads and Grains</div>
      
      <h2 class="card__title">
            <ul>
                <li>Whole-wheat products, including bread, pasta</li>   
                <li>Avoid high-fat snack foods, such as granola, cookies, pies, pastries, doughnuts and croissants.</li>
            </ul>
        </h2>
     
    </div>
    <div class="card card-6">
      <div class="card__icon"><i class="fas fa-glass-martini-alt fa-fw"></i>Beverages</div>
      <h2 class="card__title">
            <ul>
                <li>Water</li>
                <li>Green tea</li>
            </ul>
        </h2>
    </div>
  </div>
</div>
        
        
</>
    );
}
export default LowFat;