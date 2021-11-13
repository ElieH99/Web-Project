import React from 'react';
import '../../App.css';
import "../pages/Trainers.css";
import jeff from '../../images/jeff.jpg';
import candice from '../../images/Candice.png';
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
                    <p>Candice</p>
                    <img src={candice} alt="person" class="trainer_image" />
                </div>
                <div class="team_card">
                    <p>Jen</p>
                    <img src={jen} alt="person" class="trainer_image" />
                </div>
                <div class="team_card">
                    <p>Jeff</p>
                    <img src={jeff} alt="person" class="trainer_image" />
                </div>
                
                
                <div class="team_card">
                    <p>Simon</p>
                    <img src={simon} alt="person" class="trainer_image" />
                </div>
            </div>
        </div>

        </>

    );

}


export default Trainers;