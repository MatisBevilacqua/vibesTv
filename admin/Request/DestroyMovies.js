import axios from 'axios';
import { host } from './Config/Config';
import { token } from './Config/Token';

export default function DeleteMovies(id) {
    const apiUrl = `http://${host}/emission/${id}`;

    const headers = {
        Authorization: `${token}`
    };

    return axios.delete(apiUrl, { headers })
        .then(response => {
            return response.data;
        })
        .catch(error => {
            console.error('Erreur lors de la requête :', error);
            throw error;
        });
}
