import React from 'react';
import '../../App.css';
import '../PhotoGrid.css'

export default function DressesArticle() {
  return (
    <div>
        <h1 className='dresses'>Habillez-vous pour impressionner ... Vous-mêmes</h1>
        <div class="row">
            <div class="column1">
                <img src='images/cheetah.png'/>            
            </div>

            <div class="column1">
                <img src='images/red-dress.png'/>
            </div>

            <div class="column1">
                <img src='images/long-dress.jpg'/>
            </div>    
        </div>
        <p className='paragraph'>Les robes sont mes articles préférés à porter et elles peuvent généralement passer pour quelque chose de décontracté à très chic. Tout en restant confortable à porter, une robe fait agit presque comme deux articles à la fois, c'est pourquoi vous ne pouvez pas vous tromper en portant un. De plus, à mon avis, les robes sont très inclusives et flatteuses pour toutes les types de corps. Plusieurs sont uniquement conçus pour accentuer ou minimiser certaines parties de votre corps afin que vous vous sentiez plus confiant. À la fin de la journée, le plus important est de se sentir à l'aise et de porter des pièces qui vous fonctionne le mieux à votre corps.  Je pense que c'est sûrement quelque chose que les robes font pour les gens, tout en accentuant leur côté féminin.
</p>
        <div class="row">
            <div class="column1">
                <img src='images/long-dress.jpg'/>            
            </div>

            <div class="column1">
                <img src='images/cheetah.png'/>
            </div>

            <div class="column1">
                <img src='images/red-dress.png'/>
            </div>    
        </div>
    </div>
  );
}