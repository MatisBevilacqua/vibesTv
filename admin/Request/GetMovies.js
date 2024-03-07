import axios from 'axios';
import { host } from './Config/Config';

export default function GetMovies() {
    const apiUrl = `http://${host}/emission`;

    return axios.get(apiUrl)
        .then(response => {
            return response.data;
        })
        .catch(error => {
            console.error('Erreur lors de la requête :', error);
            throw error; 
        });
}
