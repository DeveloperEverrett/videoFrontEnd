import axios from 'axios';

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
  url: BASE_URL,
  params: { maxResults: '50' },
  headers: {
    'X-RapidAPI-Key': '8fa3403147mshc4b99a22052a38fp162ffajsn4a3e09f58e76',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
  },
};

export const fetchApi = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};
