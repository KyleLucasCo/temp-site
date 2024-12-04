import './style.css';
import { canvas, animate, spriteSheet } from './spritesheet.js';

document.querySelector('#app').innerHTML = `
  <div class="page">
    <div class="top-container">
      <h1>Kyle Lucas</h1>    
    </div>
    <div class="bottom-container">
      <div class="pixel-border">
        <p class="heading">This site is under construction.</p>
        <p class="info">You can find me on <a href="https://github.com/kylelucasco" target="_blank">GitHub</a> && <a href="https://linkedin.com/in/klucas10" target="_blank">LinkedIn</a>.</p>
      </div>
    </div>
  </div>
`;

// Append the canvas to the DOM
document.querySelector('.top-container').appendChild(canvas);


// Ensure the image is loaded before starting the animation
spriteSheet.onload = function () {
  console.log('Image loaded successfully');
  animate();
};

spriteSheet.onerror = function () {
  console.error('Failed to load image');
};
