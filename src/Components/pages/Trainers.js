import React from 'react';
import '../../App.css';
import "../pages/Trainers.css";
import jeff from '../../images/jeff.jpg';
import michele from '../../images/Candice.png';
import jen from '../../images/Jen.png';
import simon from '../../images/simon.png';

function Trainers(){
    return(
        <>
        <div class="team">
            <div class="team__wrapper">
                <div class="team__text">
                    <p class="topline">
                        Private Coaching
                    </p>
                    <h1>Meet our Trainers!!!</h1>
                    <p class="team_description">
                        All coaches are more than prepared to help you throughout your journey.
                        Whether you want to build your dream body or stay in shape they got you covered.
                        Train like never before with our elite coaches. 
                    </p>

                </div>
                <div class="team__text">
                    <p class="topline">
                        Compotent Workforce
                    </p>
                    <h1>Beyond</h1>
                    <p class="team_description">
                        Keep an eye on our ever expanding list of professionals and athletes.
                        We refer to the best trainers in all categories that would fit for all workout plans. 
                    </p>

                </div>
                <div class="team_card">
                    <p>Michele</p>
                    <div class="share">
                    <a href="https://www.facebook.com/FitnessMichelle" target="blank" class="fab fa-facebook-f "/>
                    <a href="https://twitter.com/Michelle_Lewin" target="blank" class="fab fa-twitter "/>
                    <a href="https://www.instagram.com/michelle_lewin/" target="blank" class="fab fa-instagram "/>
                    <a href="https://www.youtube.com/channel/UCXOF8RQ_v52K1uq6m_rMy1w" target="blank" class="fab fa-youtube"/> 
                    </div>
                    <img src={michele} alt="person" class="trainer_image"/>
                </div>
                
                <div class="team_card">
                    <p>Jen</p>
                    <div class="share">
                    <a href="https://www.facebook.com/JenSelter" target="blank" class="fab fa-facebook-f "/>
                    <a href="https://twitter.com/JenSelter" target="blank" class="fab fa-twitter "/>
                    <a href="https://www.instagram.com/jenselter/"  target="blank" class="fab fa-instagram "/>
                    <a href="https://www.youtube.com/channel/UCdfkczRQA4pRsGo30x4uIcA" target="blank" class="fab fa-youtube"/> 
                    </div>
                    <img src={jen} alt="person" class="trainer_image" />
                </div>
                <div class="team_card">
                    <p>Jeff</p>
                    <div class="share">
                    <a href="https://www.facebook.com/athleanx" target="blank" class="fab fa-facebook-f "/>
                    <a href=""  class="fab fa-twitter "/>
                    <a href="https://www.instagram.com/athleanx" target="blank" class="fab fa-instagram "/>
                    <a href="https://www.youtube.com/athleanx" target="blank" class="fab fa-youtube"/> 
                    </div>
                    <img src={jeff} alt="person" class="trainer_image" />
                </div>
                
                
                <div class="team_card">
                    <p>Simon</p>
                    <div class="share">
                    <a href="#" class="fab fa-facebook-f "/>
                    <a href="#" class="fab fa-twitter "/>
                    <a href="#" class="fab fa-instagram "/>
                    <a href="#" class="fab fa-youtube"/> 
                    </div>
                    <img src={simon} alt="person" class="trainer_image" />
                </div>
            </div>
        </div>

        </>

    );

}


export default Trainers;