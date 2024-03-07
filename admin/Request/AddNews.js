import axios from 'axios';
import { host } from './Config/Config';
import { token } from './Config/Token';

export default function AddNews(data){
    const apiUrl = `http://${host}/news`;

    const headers = {
        Authorization: `${token}` 
    };

    axios.post(apiUrl, data, { headers })
    .then(response => {
        console.log('Réponse de l\'API :', response.data);
    })
    .catch(error => {
        console.error('Erreur lors de la requête :', error);
    });

}
