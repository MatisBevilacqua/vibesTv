import React from 'react'
import styled from 'styled-components/native';
import { Image } from 'expo-image';
import { Text, View, SafeAreaView, ScrollView, TouchableOpacity, Animated } from 'react-native';
import * as Linking from 'expo-linking';


const Container = styled.View`
    width: 350px;
    margin: 20px 0 0 0;
    padding: 10px 10px 10px 10px;
    border-radius: 8px;
    background-color: white;
`

const Card = props => {
    return (
        <Container>
            <Image
                source={props.img}
                contentFit="cover"
                transition={1000}
                style={{ width: '100%', height: 100 }}
            />
            <Text style={{ fontSize: 30, fontWeight: "bold", marginTop: 20, marginBottom:10 }}>{props.title}</Text>
            <TouchableOpacity onPress={() => {
                Linking.openURL(props.link);
            }} ><Text style={{ fontSize: 20, marginBottom:5}}>{props.link}</Text></TouchableOpacity>
            <Text style={{ fontSize: 20, marginBottom:5 }}>{props.description}</Text>
            <Text style={{ fontSize: 20, marginBottom:5 }}>{props.date}</Text>
        </Container>
    )
}

export default Card;