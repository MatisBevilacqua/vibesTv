import axios from 'axios';
import Contacts from '../Components/Contacts';
import { host } from './Config/Config';
import { token } from './Config/Token';

export default function GetContacts() {
    const apiUrl = `http://${host}/contact`;

    const headers = {
        'Authorization': `${token}`
    }

    return axios.get(apiUrl, { headers })
        .then(response => {
            return response.data;
        })
        .catch(error => {
            console.error('Erreur lors de la requête :', error);
            throw error; 
        });
}
