import React from 'react';
import '../App.css';
import { Button, JButton } from './Button';
import './Effect.css';

function Effect() {
  return (
    <div className='effect-container'>
    
      <h1 style={{color:"silver"}}>Start Off YOUR Journey</h1>
      <h2 style={{color:"silver"}}>What are you waiting for?</h2>
      <div className='effect-btns'>
        <Button className='btns' buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Just do it!
        </Button>
        <JButton className='btns' buttonStyle='btn--primary' buttonSize='btn--large' onClick={console.log('hey')}>
          Click me! <i className='far fa-play-circle' />
        </JButton>
      </div>
    </div>
  );
}

export default Effect;