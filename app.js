import {animals} from './animals';
import React from 'react';
import ReactDOM from 'react-dom';


//Title of Page
const title= "";

//Background Image
const showBackground = true; //toggle bg

const background = <img className="background"
alt="ocean" 
src="/images/ocean.jpg"
/>

//Fun fact function
function displayFact(e) {
  const selectedAnimal = e.target.alt;
  const animalInfo = animals[selectedAnimal];
  const randIndex = Math.floor(Math.random() * animalInfo.facts.length);
  const funFact = animalInfo.facts[randIndex];

  document.getElementById('fact').innerHTML = funFact;
}

//Image array for animals
const images = [];
for(const animal in animals){
  images.push(
  <img
  key={animal}
  className='animal'
  alt={animal}
  src={animals[animal].image}
  aria-label= {animal}
  role= 'button'
  onClick={displayFact}
  />
  )
};

//Fun fact structure
const animalFacts = 
  (<div>
    <h1>
    {title || "Click an animal for a fun fact"}
    </h1>
    {showBackground && background}
    <p id='fact'></p>
    <div className='animals'>
    {images}
    </div>
    
  </div>);



ReactDOM.render(animalFacts, document.getElementById('root'));