import './style.css';
import javascriptLogo from './javascript.svg';
import viteLogo from '/vite.svg';
import { setupCounter } from './counter.js';

document.querySelector('#app').innerHTML = /*html*/`
  <div class="text-center p-8 space-y-6">
    <div class="flex justify-center space-x-6">
      <a href="https://vite.dev" target="_blank">
        <img src="${viteLogo}" alt="Vite logo" class="h-24 w-24 transition-transform hover:scale-110" />
      </a>
      <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
        <img src="${javascriptLogo}" alt="JavaScript logo" class="h-24 w-24 transition-transform hover:scale-110" />
      </a>
    </div>
    <h1 class="text-4xl font-bold text-blue-600">Hello Vite!</h1>
    <div class="group bg-white p-6 rounded shadow inline-block">
      <button id="counter" type="button" class="group-hover:scale-105 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
        Click me
      </button>
    </div>
    <p class="text-gray-500 italic">
      Click on the Vite logo to learn more
    </p>
  </div>
`;

setupCounter(document.querySelector('#counter'));
