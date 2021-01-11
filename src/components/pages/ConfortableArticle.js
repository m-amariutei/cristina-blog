import React from 'react';
import '../../App.css';
import '../PhotoGrid.css'

export default function ConfortableArticle() {
  return (
    <div>
        <h1 className='confortable'>Vous n'avez pas besoin d'être mal à l'aise pour être à la mode</h1>
        <div class="row">
            <div class="column2">
                <img src='images/leaf.jpg'/>            
            </div>

            <div class="column2">
                <img src='images/blue.jpg'/>
            </div>
        </div>
        <p className='paragraph'>Étonnamment, il n'est pas toujours nécessaire de porter des talons et une robe pour avoir du style. Parfois, les meilleurs looks sont sans effort et décontractés. Cela étant dit, je ne vous encouragerais jamais à ne pas prendre soin de votre apparence. Cependant, une paire de pantalons blancs est un excellent outil pour améliorer votre tenue tout en restant confortable et ne paraissant pas prétentieux. Si vous décidez de sortir votre paire de jeans préférée, assurez-vous de les porter avec un joli chandail de haute qualité. De cette façon, vous aurez l'air bien habillez et vous vous sentirez bien aussi, c'est une situation parfaite.
</p>
        <div class="row">
            <div class="column2">
                <img src='images/white.jpg'/>            
            </div>

            <div class="column2">
                <img src='images/purple.jpg'/>
            </div>
        </div>
    </div>
  );
}