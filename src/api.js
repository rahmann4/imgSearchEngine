import axios from 'axios';

 const serachPhotos = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos/', {
        headers: {
            Authorization: 'Client-ID vMvT85nC8S_6UTDxH-uluayILH1kY1DocUo_oqIiOSg',
        },
        params: {
            query: term,
        },
    });

    return response.data.results;
 };

 export default serachPhotos;