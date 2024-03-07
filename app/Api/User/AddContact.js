import axios from 'axios';
import { host } from '../Config';

export default function AddContact(data){
    const apiUrl = `http://${host}/contact`;

    axios.post(apiUrl, data)
    .then(response => {
        console.log('Réponse de l\'API :', response.data);
    })
    .catch(error => {
        console.error('Erreur lors de la requête :', error);
    });

}
