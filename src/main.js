// main.js
// main.js
import { fetchImages } from './js/pixabay-api';
import {
  renderImages,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

form.addEventListener('submit', async event => {
  event.preventDefault();

  const query = event.target.elements['search-text'].value.trim();
  if (!query) {
    iziToast.warning({ title: 'Warning', message: 'Enter a search query!' });
    return;
  }

  clearGallery(gallery);
  showLoader(loader);

  try {
    const images = await fetchImages(query);
    renderImages(images, gallery);
  } catch (error) {
    iziToast.error({ title: 'Error', message: error.message });
  } finally {
    hideLoader(loader);
  }
});
