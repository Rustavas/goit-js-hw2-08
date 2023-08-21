// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
// Описан в документации
import SimpleLightbox from "simplelightbox";
// Дополнительный импорт стилей
import "simplelightbox/dist/simple-lightbox.min.css";
const gallery = document.querySelector('.gallery');


console.log(galleryItems);

const markup = galleryItems.map(({preview, original, description}) => {
  return `<div class='gallery__item'>
  <a class='gallery__link' href='${original}'>
    <img class='gallery__image' 
    data-source='${original}'
    src='${preview}' 
    alt='${description}'/>
  </a>
  </div>`
}).join('');

gallery.insertAdjacentHTML('beforeend', markup);

let lightbox = new SimpleLightbox('.gallery a', { 
  captions: true,
  captionDelay: 250,
  captionPosition: 'bottom',
  captionsData: 'alt',
  });