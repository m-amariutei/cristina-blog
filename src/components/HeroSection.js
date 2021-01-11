import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      {/* <video src='/videos/video-1.mp4' autoPlay loop muted /> */}
      <h1>BLOG DE MODE</h1>
      <p>"L'élégance est quand l'exterieur est aussi beau que l'interieur"</p>
      <p>- Coco Chanel</p>
      <div className='hero-btns' style={{marginTop: '55px'}}>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          onClick={console.log('hey')}
          dest='/printemps'
        >
          PRINTEMPS
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          onClick={console.log('hey')}
          dest='/ete'
        >
          ÉTÉ
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          onClick={console.log('hey')}
          dest='/automne'
        >
          AUTOMNE
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          onClick={console.log('hey')}
          dest='/hiver'
        >
          HIVER
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
