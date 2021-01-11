import React from 'react';
import '../../App.css';
import '../PhotoGrid.css'

export default function Summer() {
  return (
    <div>
        <h1 className='summer'>ÉTÉ</h1>
        <p className='paragraph2'>"La beauté commence au moment où vous décidez d'être vous-même." - COCO CHANEL</p>
        <div class="row">
        <div class="column1">
            <img src='images/red-summer.png'/>
            <img src='images/black-shirt.jfif'/>
            <img src='images/hat.jpg'/>
            <img src='images/mina-jordan.png'/>
            <img src='images/s-pink-shorts.jfif'/>
            <img src='images/s-blue-shorts.jfif'/>
            <img src='images/black-shirt2.png'/>
            
        </div>
        <div class="column1">
            <img src='images/sunglasses2.jpg'/>
            <img src='images/jean-shorts.jfif'/>
            <img src='images/mina-rome.png'/>
            <img src='images/desert-summer.png'/>
            <img src='images/blue-dress.jfif'/>
            <img src='images/s-beachy.jfif'/>
            <img src='images/s-pink-dress.jfif'/>
            <img src='images/s-white-outfit.jfif'/>
        </div>
        <div class="column1">
            <img src='images/watch.jpg'/>
            <img src='images/jeans.jpg'/>
            <img src='images/green-dress.jfif'/>
            <img src='images/mina-red-dress.png'/>
            <img src='images/s-white-dress.jfif'/>
            <img src='images/s-black-sunhat.jfif'/>
            <img src='images/s-satin-dress.jfif'/>
            
        </div>
        </div>
    </div>
  );
}