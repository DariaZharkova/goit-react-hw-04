import axios from 'axios';

export const fetchImages = async (query, page) => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    params: {
      client_id: 'qY4clTR3NfN1NDVPAwVi4uvSDKeLW4C10q3n7fQd1VQ',
      query,
      page,
      per_page: 12,
    },
  });

  return response.data;
};
