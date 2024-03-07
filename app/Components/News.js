import React, { useState, useEffect, useRef } from 'react';
import { Text, View, SafeAreaView, ScrollView, TouchableOpacity, Animated } from 'react-native';
import * as Linking from 'expo-linking';
import styled from 'styled-components';
import Title from './Parts/Title';
import Sub from './Parts/Sub';
import GetAll from '../Api/User/GetAll';
import Card from './Parts/Card';


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

export const Row = styled.View`
    width: 390px;
    padding: 20px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    background-color: white;
`;

const formatDate = (createdAt) => {
    const date = new Date(createdAt);

    const options = {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        hour12: false,
    };

    return date.toLocaleDateString('fr-FR', options);
};

export default function News() {

    const [news, setNews] = useState([]);
    const [focus, setFocus] = useState([]);
    const [emission, setEmission] = useState([]);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const newsData = await GetAll('news');
                const focusData = await GetAll('focus');
                const emissionData = await GetAll('emission');
                setNews(newsData);
                setFocus(focusData);
                setEmission(emissionData);

            } catch (error) {
                console.error('Erreur lors de la récupération des actualités :', error);
            }
        };

        fetchNews();
    }, []);

    return (
        <Container>
            <ContainerTopHeader>
                <Title title="Actualités" />
            </ContainerTopHeader>
            <ContainerSlide>
                <SafeAreaView style={{ paddingBottom: 20, paddingTop: 20, paddingRight: 20, paddingLeft: 20 }}>
                    <ScrollView>
                        <View style={{ marginTop: 30 }}>
                            {emission.length > 0 && (
                                <>
                                    <Text style={{ fontWeight: 'bold', fontSize: 30, color: 'white' }}>Emission</Text>
                                    {emission.map((item) => (
                                        <Card
                                            key={item.id}
                                            title={item.title}
                                            description={item.description}
                                            date={formatDate(item.dateAdded)}
                                            link={item.link}
                                            img={item.image}
                                        />
                                    ))}
                                </>
                            )}

                            {focus.length > 0 && (
                                <>
                                    <Text style={{ fontWeight: 'bold', fontSize: 30, color: 'white', marginTop:20 }}>Focus</Text>
                                    {focus.map((item) => (
                                        <Card
                                            key={item.id}
                                            title={item.title}
                                            link={item.link}
                                            description={item.description}
                                            date={formatDate(item.dateAdded)}
                                            img={item.image}
                                        />
                                    ))}
                                </>
                            )}

                            {news.length > 0 && (
                                <>
                                    <Text style={{ fontWeight: 'bold', fontSize: 30, color: 'white', marginTop:20 }}>News</Text>
                                    {news.map((item) => (
                                        <Card
                                            key={item.id}
                                            title={item.title}
                                            link={item.link}
                                            description={item.description}
                                            date={formatDate(item.dateAdded)}
                                            img={item.image}
                                        />
                                    ))}
                                </>
                            )}
                        </View>
                    </ScrollView>
                </SafeAreaView>
            </ContainerSlide>
        </Container>
    );
}
