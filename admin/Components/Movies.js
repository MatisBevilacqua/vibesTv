import React, {useState, useEffect} from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components/native';
import { TouchableOpacity, TextInput,   SafeAreaView, ScrollView, } from 'react-native';
import AddMovies from '../Request/AddMovies';
import GetMovies from '../Request/GetMovies';
import { Row } from './Contacts';
import DestroyMovies from '../Request/DestroyMovies';
import { ButtonDelete } from './News';

export const Container = styled.View`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 50px;
    padding: 50px 0 50px 0;
`;

export const ButtonSend = styled(TouchableOpacity)`
    width: 340px;
    height: 50px;
    background-color: #65B741;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
`;

export const TextInputSendData = styled(TextInput)`
    width: 340px;
    border-radius: 8px;
    padding: 0 0 0 10px;
    height: 50px;
    border: solid 1px #ccc;
`;

export default function Movies() {
    const [title, setTitle] = useState('');
    const [link, setLink] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const moviesData = await GetMovies();
                setMovies(moviesData);
            } catch (error) {
                console.error('Erreur lors de la récupération des émissions :', error);
            }
        };

        fetchMovies();
    }, []);

    const sendData = async () => {
        const data = {
            title: title,
            link: link,
            description: description,
            image: image
        };

        try {
            await AddMovies(data);
            setTitle('');
            setLink('');
            setDescription('');
            console.log('Données envoyées avec succès !');
        } catch (error) {
            console.error('Erreur lors de l\'envoi des données :', error);
        }
    };

    const destroy = async (id) => {
        try {
            await DestroyMovies(id);
            console.log('Émission détruite avec succès');
        } catch (error) {
            console.log('Émission non détruite');
        }
    };

    const reversedMovies = [...movies].reverse();

    const formatDate = (createdAt) => {
        const date = new Date(createdAt);
        return date.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit', hour12: false });
    };

    return (
        <SafeAreaView>
            <ScrollView>
                <Container>
                    <TextInputSendData value={title} onChangeText={setTitle} placeholder="Titre de l'émission" />
                    <TextInputSendData value={link} onChangeText={setLink} placeholder="Lien de l'émission *" />
                    <TextInputSendData value={description} onChangeText={setDescription} placeholder="Description de l'émission" />
                    <TextInputSendData value={image} onChangeText={setImage} placeholder="Lien de l'image" />
                    <ButtonSend onPress={sendData}><Text style={{ color: 'white', fontSize: 15 }}>Ajouter</Text></ButtonSend>
                    <Text style={{ alignSelf: 'flex-start', paddingLeft: 35, fontSize: 20, fontWeight: 'bold' }}>Émissions actives</Text>

                    <View>
                        {reversedMovies.length > 0 ? (
                            reversedMovies.map(movie => (
                                <Row key={movie.id} style={{ marginVertical: 10 }}>
                                    <Text>Titre : {movie.title}</Text>
                                    <Text>Lien : {movie.link}</Text>
                                    <Text>Description : {movie.description}</Text>
                                    <Text>Envoyé : {movie.dateAdded}</Text>
                                    <ButtonDelete onPress={() => destroy(movie.id)}><Text style={{ color: 'white' }}>Supprimer l'émission</Text></ButtonDelete>
                                </Row>
                            ))
                        ) : (
                            <Text>Aucune émission trouvée</Text>
                        )}
                    </View>
                </Container>
            </ScrollView>
        </SafeAreaView>
    );
}
