import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components/native';
import { TouchableOpacity, TextInput, SafeAreaView, ScrollView } from 'react-native';
import { Container } from './Movies';
import { ButtonSend } from './Movies';
import { TextInputSendData } from './Movies';
import GetFocus from '../Request/GetFocus';
import DeleteFocus from '../Request/DestroyFocus';
import AddFocus from '../Request/AddFocus';
import { Row } from './Contacts'

export const ButtonDelete = styled(TouchableOpacity)`
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    background-color: red;
`


export default function Focus() {

    const [title, setTitle] = useState('');
    const [link, setLink] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    const [focus, setFocus] = useState([]);


    useEffect(() => {
        const fetchNews = async () => {
            try {
                const focusData = await GetFocus();
                setFocus(focusData);
            } catch (error) {
                console.error('Erreur lors de la récupération des focus :', error);
            }
        };

        fetchNews();
    }, []);


    const destroy = async (id) => {
        try {
            await DeleteFocus(id);
            console.log('Focus destroyed successfully')
        } catch (error) {
            console.log('Focus destroy failed');
        }
    }


    const sendData = async () => {
        const data = {
            title: title,
            link: link,
            description: description,
            image: image
        };

        try {
            await AddFocus(data);
            setTitle('');
            setLink('');
            setDescription('');
            setImage('');
            console.log('Données envoyées avec succès !');
        } catch (error) {
            console.error('Erreur lors de l\'envoi des données :', error);
        }
    };

    const reversedNews = [...focus].reverse();

    return (
        <SafeAreaView>
            <ScrollView>
                <Container>
                    <TextInputSendData value={title} onChangeText={setTitle} placeholder="Titre de l'actualité" />
                    <TextInputSendData value={link} onChangeText={setLink} placeholder="Lien de l'actualité *" />
                    <TextInputSendData value={description} onChangeText={setDescription} placeholder="Description de l'actualité" />
                    <TextInputSendData value={image} onChangeText={setImage} placeholder="Lien de l'image" />
                    <ButtonSend onPress={sendData}><Text style={{ color: 'white', fontSize: 15 }}>Ajouter</Text></ButtonSend>
                    <Text style={{ alignSelf: 'flex-start', paddingLeft: 35, fontSize: 20, fontWeight: 'bold' }}>Focus active</Text>
                    <View>
                        {reversedNews.length > 0 ? (
                            reversedNews.map(news => (
                                <Row key={news.id} style={{ marginVertical: 10 }}>
                                    <Text>Titre : {news.title}</Text>
                                    <Text>Lien : {news.link}</Text>
                                    <Text>Description : {news.description}</Text>
                                    <Text>Envoyer : {news.dateAdded}</Text>
                                    <ButtonDelete onPress={() => destroy(news.id)}><Text style={{ color: 'white' }}>Supprimmer l'actualité</Text></ButtonDelete>
                                </Row>
                            ))
                        ) : (
                            <Text>Aucune actualité trouvé</Text>
                        )}
                    </View>
                </Container>
            </ScrollView>
        </SafeAreaView>
    );
}