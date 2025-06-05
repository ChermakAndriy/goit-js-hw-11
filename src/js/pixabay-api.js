import Axios from "axios"; 
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


const axios = Axios.create({
    baseURL: 'https://pixabay.com/api/',
    params: {
        key: '50659446-3e4bba29bde64c5ee1caed96d', 
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true ,
    },
});

export function getImagesByQuery(query, page = 1, perPage = 40) {
    return axios.get('', {
        params: {q: query, page, per_page: perPage}
    })
    .then(response => {
    const data = response.data;

    if (!data.hits || data.hits.length === 0) {
        iziToast.warning({
        title: 'No results',
        message: 'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
        timeout: 5000,
        });
    }

    return data;
    })
    .catch(err => {
    iziToast.error({
        title: 'Error',
        message: err.message || 'Failed to fetch images. Please try again later.',
        position: 'topRight',
        timeout: 5000,
    });
    throw err;
    });
}

console.log(getImagesByQuery());


