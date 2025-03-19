import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '49423547-3925a10a81c3177a913fbde2f';

export async function fetchImages(query) {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    });

    if (response.data.hits.length === 0) {
      throw new Error(
        'Sorry, there are no images matching your search query. Please try again!'
      );
    }

    return response.data.hits;
  } catch (error) {
    throw new Error(error.message);
  }
}
