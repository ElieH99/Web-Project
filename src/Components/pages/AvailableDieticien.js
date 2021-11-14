import React from 'react';
import '../../App.css';
import './AvailableDieteicien.css';

function AvailableDieticien(){
    return(
        <>
        <div className='avdic'>
            <h1>Looking for a dietitian?</h1>
            <p>These are some of the best and are ready to help you</p>
            <ul>
                <li>Michael Haddad <button>Select</button></li>
                <li>Lynn Saade <button>Select</button></li>
                <li>Karen Lahoud <button>Select</button></li>
                <li>Charbel Hachem <button>Select</button></li>
            </ul>
        </div>
    <div className='backg'></div>
        
</>
    );
}
export default AvailableDieticien;