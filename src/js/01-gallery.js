import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';


// -------------В розробці все працює, при виконанні Build на GitHub з цією бібліотекою проблеми!!!!!!----------------
// import {SimpleLightbox} from "./node_modules/simplelightbox/dist/simple-lightbox.min.js";
// import SimpleLightbox from '../../node_modules/simplelightbox/dist/simple-lightbox.min'
// const  SimpleLightbox = require('simple-lightbox');
// Додатковий імпорт стилівn
// Change code below this line
console.log(galleryItems);


const gallery = document.querySelector('.gallery');

// 1. Створити розмітку 
function createGalleryCard(arr) {
    return arr.reduce(((acc, { preview, original, description }) => {
      return  acc + `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" title="${description}"/>
</a>`
    }), '');
}

gallery.innerHTML = createGalleryCard(galleryItems);
// 2. Підключаємо бібліотеку, в додаткових параметрах вказуємо затримку
const lightbox = new SimpleLightbox('.gallery a', { captionDelay: 250 });

