import React from 'react';
import '../../App.css';
import './Workout.css';

function StayShape(){
     React.useEffect(()=>{
    const openModalButtons = document.querySelectorAll('[data-modal-target]')
    const closeModalButtons = document.querySelectorAll('[data-close-button]')
    const overlay = document.getElementById('overlay')
overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.modal.active')
    modals.forEach(modal => {
      closeModal(modal)
    })
  })

openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})


closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal')
    closeModal(modal)
  })
})
function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}
});
    return(
    <>
    <div className='workplan'>
        <h1 class="h" >Stay in shape workout</h1>
        <p class="p"> 3 days per week program</p>
    <div class='button_align'>
    <button class="b oui1" data-modal-target="#modal" >Day 1</button>
    <button class="b oui2" data-modal-target="#modal1"  >Day 2</button>
    <button class="b oui3" data-modal-target="#modal2" >Day 3</button>
    </div>
  <div class="modal" id="modal">
    <div class="modal-header">
      <div class="title">Chest/Biceps</div>
      <button data-close-button class="close-button">&times;</button>
    </div>
    <div class="modal-body">
    <ul> 
        <li>Warmup 15 mins</li>
        <li>Db chest press : 10rep /4 sets</li>
        <li>Inclined db chest press: 10rep /4 sets</li>
        <li>Declined Db chest press : 10rep /4 sets</li>
        <li>Fly machine : 10rep /4 sets</li>
        <li>High cable crossover :10rep /4 sets</li>
        <li>Alternative biceps curl: 10rep /4 sets</li>
        <li>Straight hummer curl: 10rep /4 sets</li>
        <li>Cable rope biceps curl: 10rep /4 sets</li>
        <li>Abs :15 rep/3 sets</li>
        </ul>   </div>
  </div>
  <div id="overlay" ></div>



  
  <div class="modal" id="modal1">
    <div class="modal-header">
      <div class="title">Leg/Shoulders</div>
      <button data-close-button class="close-button">&times;</button>
    </div>
    <div class="modal-body">
    <ul>
        <li>Warmup 15 mins</li>
        <li>Squats :10rep /4 sets</li>
        <li>Back lunges: 10rep /4 sets</li>
        <li>Leg press:10rep /4 sets</li>
        <li>Leg curl:10rep /4 sets</li>
        <li>Leg extension:10rep /4 sets</li>
        <li>Calf raises:10rep /4 sets</li>
        <li>Face pulls:10rep /4 sets</li>
        <li>Db shoulder press:10rep /4 sets</li>
        <li>Db front shoulder press:10rep /4 sets</li>
        <li>Abs: 15 rep/3 sets</li>    
        </ul>
    </div>
  </div>

  
  <div class="modal" id="modal2">
    <div class="modal-header">
      <div class="title">Back/Triceps</div>
      <button data-close-button class="close-button">&times;</button>
    </div>
    <div class="modal-body">  <ul>
        <li>Warmup 15 mins</li>
        <li>Lat Pulldown: 10rep /4 sets</li>
        <li>Seated row: 10rep /4 sets</li>
        <li>Straight arm lat push down: 10rep /4 sets</li>
        <li>Up right row: 10rep /4 sets</li>
        <li>Reverse flies: 10rep /4 sets</li>
        <li>Declined push ups: 10rep /4 sets</li>
        <li>Rope triceps pushdown: 10rep /4 sets</li>
        <li>Wide triceps pushdown: 10rep /4 sets</li>
        <li>Db tricpes extension: 10rep /4 sets</li>
        <li>Abs: 15 rep/3 sets</li>
        </ul> </div>
  </div>
        </div>
    </>
    );
    
}
 
export default StayShape;