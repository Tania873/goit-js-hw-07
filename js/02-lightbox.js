import { galleryItems } from './gallery-items.js';

const galleryListEl = document.querySelector('.gallery');

const makeGalleryCard = ({ preview, original, description } = {}) => {
    const galleryCard = `
        <a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>`
    
    return galleryCard;
}

const galleryCardsArr = galleryItems.map(el => makeGalleryCard(el));

galleryListEl.insertAdjacentHTML("afterbegin", galleryCardsArr.join(''));

const onGalleryImgClick = event => {
    event.preventDefault();

        const { target } = event;

    if (target.nodeName !== 'IMG') {
        return;
    }
}

galleryListEl.addEventListener('click', onGalleryImgClick);

new SimpleLightbox('.gallery a', { 
        captionsData: 'alt',
        captionDelay: 250,
     });