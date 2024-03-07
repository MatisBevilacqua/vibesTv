import React, { useState, useEffect, useRef } from 'react';
import { Text, View, SafeAreaView, ScrollView, TouchableOpacity, Animated, Button } from 'react-native';
import * as Linking from 'expo-linking';
import styled from 'styled-components';
import Title from './Parts/Title';
import Sub from './Parts/Sub';
import AddContact from '../Api/User/AddContact';

const Container = styled.View`
    width: 100%;
    height: 90%;
    display: flex;
    align-items: center;
    gap: 30px;
`

export const ContainerSlide = styled(Animated.View)`
    width: 100%;
    height: 100%;
    background-color: #871910;
    display: flex;
    marginTop: 15px;
    align-items: center;
    padding: 50px 0 150px 0;
    borderTopRightRadius: 60px;
    borderTopLeftRadius: 60px;
`;

const ContainerTopHeader = styled.View`
    width: 100%;
    padding: 70px 0 0 0;
    display: flex;
    align-items: center;
    justify-content: center;
`
const FormInput = styled.TextInput`
    width: 350px;
    padding: 10px;
    margin-bottom: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: white;
`;

const FormInputBig = styled.TextInput`
    width: 100%;
    padding: 10px;
    height: 200px;
    margin-bottom: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: white;
`;

const FormButton = styled.TouchableOpacity`
    width: 100%;
    height: 40px;
    border-radius: 5px;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
`;


export default function Contact() {

    const [email, setEmail] = useState('');
    const [youtubeLink, setYoutubeLink] = useState('');
    const [message, setMessage] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = async () => {

        const data = {
            name: name,
            email: email,
            link: youtubeLink,
            message: message
        }

        try {
            const response = await AddContact(data);
            setEmail("")
            setYoutubeLink('')
            setMessage("")
            setName("");
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <Container>
            <ContainerTopHeader>
                <Title title="Nous contacter" />
            </ContainerTopHeader>
            <ContainerSlide>
                <SafeAreaView style={{ paddingBottom: 20, paddingTop: 20 }}>
                    <ScrollView>
                        <FormInput
                            placeholder="Prénom"
                            value={name}
                            onChangeText={text => setName(text)}
                        />
                        <FormInput
                            placeholder="Email"
                            value={email}
                            onChangeText={text => setEmail(text)}
                            keyboardType="email-address"
                        />
                        <FormInput
                            placeholder="Lien vers une vidéo YouTube"
                            value={youtubeLink}
                            onChangeText={text => setYoutubeLink(text)}
                        />
                        <FormInputBig
                            placeholder="Message"
                            value={message}
                            onChangeText={text => setMessage(text)}
                            multiline
                            numberOfLines={4}
                        />
                        <FormButton onPress={handleSubmit}><Text>Envoyer</Text></FormButton>
                    </ScrollView>
                </SafeAreaView>
            </ContainerSlide>
        </Container>
    );
}
