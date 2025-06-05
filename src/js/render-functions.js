import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

let lightbox;

const gallery = document.querySelector(".gallery");

export function imageTemplate(images) {
    gallery.innerHTML = '';
    
    const markup = images.map(image => {
    const {
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads
    } = image;


    return `
        <li class="gallery-item">
        <a href="${largeImageURL}" target="_blank">
            <img src="${webformatURL}" alt="${tags}" loading="lazy" />
        </a>
        <div class="info">
            <p><b>Likes:</b> ${likes}</p>
            <p><b>Views:</b> ${views}</p>
            <p><b>Comments:</b> ${comments}</p>
            <p><b>Downloads:</b> ${downloads}</p>
        </div>
        </li>
    `;
    }).join('');
    gallery.insertAdjacentHTML('beforeend', markup);

    if (lightbox) {
    lightbox.refresh();
    } else {
    lightbox = new SimpleLightbox('.gallery a', {
        captionsData: 'alt',
        captionDelay: 250,
    });
    }
}
