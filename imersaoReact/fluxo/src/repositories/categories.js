import config from '../config';

const URL_CATEGORIES = `${config.URL_BACKEND}/categories`;

function getAllWithVideos() {
  return fetch(`${URL_CATEGORIES}?_embed=videos`)
    .then(async (res) => {
      if (res.ok) {
        const answer = await res.json();
        return answer;
      }
      throw new Error('Não foi possível pegar os dados');
    });
}

export default {
  getAllWithVideos,
};
