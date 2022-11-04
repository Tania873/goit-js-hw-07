import { galleryItems } from './gallery-items.js';

const galleryListEl = document.querySelector('.gallery');

const makeGalleryCard = ({ preview, original, description } = {}) => {
    const galleryCard = `
        <div class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                />
            </a>
        </div>`
    
    return galleryCard;
}

const galleryCardsArr = galleryItems.map(el => makeGalleryCard(el));

galleryListEl.insertAdjacentHTML("afterbegin", galleryCardsArr.join(''));

const onGalleryImgClick = event => {
    event.preventDefault();

    const largeImagePath = event.target.dataset.source;

    const instance = basicLightbox.create(`
        <img src="${largeImagePath}" width="800" height="600">
    `)

    instance.show()
}

galleryListEl.addEventListener('click', onGalleryImgClick);