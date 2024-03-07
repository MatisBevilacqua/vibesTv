import axios from 'axios';
import { host } from './Config/Config';

export default function GetFocus() {
    const apiUrl = `http://${host}/focus`;

    return axios.get(apiUrl)
        .then(response => {
            return response.data;
        })
        .catch(error => {
            console.error('Erreur lors de la requête :', error);
            throw error; 
        });
}
