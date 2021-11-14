import React from 'react';
import '../../App.css';
import './AvailableDieteicien.css';
import diet1 from "../../images/dietician1.jpg"
import diet2 from "../../images/dietician2.jpg"
import diet3 from "../../images/dietician3.jpg"
import diet4 from "../../images/dietician4.jpg"

function AvailableDieticien(){
    return(
        <>
        <div class="ab">
        <div class="contain">
            <h1>Meet our Dieticians!!!</h1>
         </div>
            <div class="contain">
                <div class="dieticians">
                    <div class="profile">
                        <img src={diet1} alt="person" class="diet_image"/>
                    </div>
                    <div class="dietician_info">
                        <h3 class="title">Karen Karam</h3>
                        <span class="post">Sports Dietician</span>
                    </div>
                    <ul class="social">
                        <li><a href="#" class="fab fa-facebook"/></li>
                        <li><a href="#" class="fab fa-twitter"/></li>
                        <li><a href="#" class="fab fa-instagram"/></li>
                        <li><a href="#" class="fab fa-youtube"/></li>
                    </ul>

                </div>

                <div class="dieticians">
                    <div class="profile">
                        <img src={diet3} alt="person" class="diet_image"/>
                    </div>
                    <div class="dietician_info">
                        <h3 class="title">Jose Guardiola</h3>
                        <span class="post">Performance Dietician</span>
                    </div>
                    <ul class="social">
                        <li><a href="#" class="fab fa-facebook"/></li>
                        <li><a href="#" class="fab fa-twitter"/></li>
                        <li><a href="#" class="fab fa-instagram"/></li>
                        <li><a href="#" class="fab fa-youtube"/></li>
                    </ul>
                </div>


                <div class="dieticians">
                    <div class="profile">
                        <img src={diet2} alt="person" class="diet_image"/>
                    </div>
                    <div class="dietician_info">
                        <h3 class="title">Paula Scholes</h3>
                        <span class="post">Sports and Research Dietician</span>
                    </div>
                    <ul class="social">
                        <li><a href="#" class="fab fa-facebook"/></li>
                        <li><a href="#" class="fab fa-twitter"/></li>
                        <li><a href="#" class="fab fa-instagram"/></li>
                        <li><a href="#" class="fab fa-youtube"/></li>
                    </ul>

                </div>



                <div class="dieticians">
                    <div class="profile">
                        <img src={diet4} alt="person" class="diet_image"/>
                    </div>
                    <div class="dietician_info">
                        <h3 class="title">Pep Mourinho</h3>
                        <span class="post">Boost Dietician</span>
                    </div>
                    <ul class="social">
                        <li><a href="#" class="fab fa-facebook"/></li>
                        <li><a href="#" class="fab fa-twitter"/></li>
                        <li><a href="#" class="fab fa-instagram"/></li>
                        <li><a href="#" class="fab fa-youtube"/></li>
                    </ul>

                </div>




            </div>
        </div>
    
        
</>
    );
}
export default AvailableDieticien;