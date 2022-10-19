import axios from 'axios';

export async function getPictures(query = '', page = 1, per_page = 12) {
  const KEY = '29897039-6335e8959bf94ffd3acb5a033';
  const res = await axios.get(
    `https://pixabay.com/api?q=${query}&per_page=${per_page}&page=${page}/`,
    {
      params: {
        key: KEY,
        // q: query,
        // per_page,
        // page,
      },
    }
  );
  return res.data;
}
