import axios from 'axios';

const tesloApi = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
});



// cualquier request que se haga va a pasar por aca, si tiene token lo agrega al header sino no hace nada
tesloApi.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');

    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
})


export { tesloApi };