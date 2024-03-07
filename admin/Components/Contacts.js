import React, {useState, useEffect} from 'react';
import { Text, View, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { Container } from './Movies';
import GetContacts from '../Request/GetContacts';
import * as Linking from 'expo-linking';

export const Row = styled.View`
    width: 350px;
    padding: 20px;
    border: solid 1px #ccc;
    border-radius: 8px;
    display: flex;
    gap: 20px;
`;

const ButtonContact = styled(TouchableOpacity)`
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    background-color: #65B741;
`


export default function Contacts(){
    
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        const fetchContacts = async () => {
            try {
                const contactsData = await GetContacts();
                setContacts(contactsData);
                console.log(contacts);
            } catch (error) {
                console.error('Erreur lors de la récupération des contacts :', error);
            }
        };

        fetchContacts();
    }, []);

    const handleContactPress = async (email) => {
        const mailtoLink = `mailto:${email}`;
      
        try {
          const supported = await Linking.canOpenURL(mailtoLink);
          if (supported) {
            await Linking.openURL(mailtoLink);
          } else {
            console.error("L'ouverture de l'application de messagerie n'est pas supportée.");
          }
        } catch (error) {
          console.error('Erreur lors de l\'ouverture de l\'URL:', error);
        }
    };

    const reversedContacts = [...contacts].reverse();

    const formatDate = (createdAt) => {
        const date = new Date(createdAt);
        return date.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit', hour12: false });
    };

    return(
        <SafeAreaView>
            <ScrollView>
                <Container>
                    <View>
                    {reversedContacts.length > 0 ? (
                        reversedContacts.map(contact => (
                            <Row key={contact.id} style={{ marginVertical: 10 }}>
                                <Text>Nom : {contact.name}</Text>
                                <Text>Email : {contact.email}</Text>
                                <Text>Message : {contact.message}</Text>
                                <Text>Lien vidéo : {contact.link}</Text>
                                <Text>Enovoyer : {contact.dateAdded}</Text>
                                <ButtonContact onPress={() => handleContactPress(contact.email)}><Text style={{ color: 'white' }}>Contacter</Text></ButtonContact>
                            </Row>
                        ))
                    ) : (
                        <Text>Aucun contact trouvé</Text>
                    )}
                    </View>
                </Container>
            </ScrollView>
        </SafeAreaView>
    );
}