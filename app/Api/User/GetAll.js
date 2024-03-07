import axios from 'axios';
import { host } from '../Config';

export default function GetAll(name) {
    const apiUrl = `http://${host}/${name}`;

    return axios.get(apiUrl)
        .then(response => {
            return response.data;
        })
        .catch(error => {
            console.error('Erreur lors de la requête :', error);
            throw error; 
        });
}
