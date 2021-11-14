import React from 'react';
import '../../App.css';

function Balanced(){
    return(
        <>
        <div className='bal'>
            <h1>Balanced diet</h1>
            
            <ul>
                <li>Milk and Dairy Products <ul>
                    <li>Low-fat milk</li>
                    <li>Low-fat plain yogurt</li>
                    <li>Low-fat cottage cheese</li>
                    <li>Milk alternatives (soy, almond, coconut, cashew, and hemp milks)</li>
                    </ul></li>
                
                <li>Vegetables <ul>
                 <li>All fresh vegetables</li>
                 <li>Low-sodium canned vegetables</li>   
                    </ul></li>
                <li> Fruit and Juices <ul>
                    <li>All fresh fruit</li>
                    <li>Fresh juice</li>
                    </ul></li>
                <li>Breads and Grains <ul>
                    <li>Whole-wheat products, including bread, pasta,</li>     
                    <li>Brown rice</li>
                    <li>Oats</li>
                    <li>Plain air-popped popcorn</li>
                    </ul></li>
                <li>Meats and Meat Substitutes <ul>
                    <li>Lean meats</li>
                    <li>Seeds</li>
                    <li>Fish</li>
                    <li>Eggs</li>
                    <li>Dried beans and peas</li>
                    <li>Tofu</li>
                    <li>Nuts</li>
                    <li>Seeds</li>
                    </ul></li>
                <li>Fat <ul>
                    <li>Olive oil (limit to 1 tablespoon per serving)</li>
                    <li>Nut or seed oils (limit to 1 tablespoon per serving)</li>
                    <li>Avocados (limit to ½ avocado per serving)</li>
                    <li>Low-fat mayonnaise (limit to 2 tablespoons per serving)</li>
                    </ul></li>
                <li>Beverages <ul>
                    <li>Water</li>
                    <li>Tea</li>
                    <li>Coffee</li>
                    </ul></li>
            </ul>
        </div>
        
</>
    );
}
export default Balanced;