import React from 'react';
import '../../App.css';
import '../PhotoGrid.css'

export default function JacketsArticle() {
  return (
    <div>
        <h1 className='jackets'>Un beau manteau est essentiel au Canada</h1>
        <div class="row">
            <div class="column1">
                <img src='images/magenta-jacket.jpg'/>            
            </div>

            <div class="column1">
                <img src='images/flashy-jacket.jpg'/>
            </div>

            <div class="column1">
                <img src='images/beige-jacket.jpg'/>
            </div>    
        </div>
        <p className='paragraph'>Ne sous-estimez pas le pouvoir d'un bon manteau. À certains égards, un manteau est comme un hack de mode qui peut lier une tenue entière en quelques secondes. Assurez-vous de faire correspondre les tons de vos vestes avec vos chaussures. Les tons froids et plus profonds fonctionnent généralement mieux avec des chaussures similaires. Les vestes peuvent aller de sportives à très élégantes, alors assurez-vous d'en avoir une pour chaque occasion.
</p>
        <div class="row">
            <div class="column2">
                <img src='images/black-jacket.jpg'/>            
            </div>

            <div class="column2">
                <img src='images/hair.jpg'/>
            </div>
        </div>
    </div>
  );
}