import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import { getImagesByQuery } from './js/pixabay-api.js';
import { imageTemplate } from './js/render-functions.js';



const formElem = document.querySelector('form');
const inputElem = document.querySelectorAll('input[type="text"]');

formElem.addEventListener('submit', (e) => {
    e.preventDefault();
    const query = e.target.elements['search-text'].value.trim();

    if (!query) return;
    
    getImagesByQuery(query)
        .then(({ hits }) => imageTemplate(hits))
    .catch(console.error);
});

inputElem.forEach(input => {
    input.addEventListener('input', () => {
    if (input.value.trim() !== '') {
        input.classList.add('filled');
    } else {
        input.classList.remove('filled');
    }
    });
});

