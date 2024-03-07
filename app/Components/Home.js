import {Text, StyleSheet, View} from 'react-native';
import styled from 'styled-components';
import Movie from './Parts/Movie';
import Logo from './Parts/Logo';

const Container = styled.View`
    width: 100%;
    height: 90%;
    display: flex;
    align-items: center;
    gap: 30px;
`
const ContainerSlide = styled.View`
    width: 100%;
    height: 100%;
    background-color: #871910;
    display: flex;
    marginTop: 15px;
    align-items: center;
    padding: 50px 0 0 0;
    borderTopRightRadius: 60px;
    borderTopLeftRadius: 60px;
    box-shadow: 10px 10px lightblue;
`;

const ContainerTopHeader = styled.View`
    width: 100%;
    padding: 70px 0 0 0;
    display: flex;
    align-items: center;
    justify-content: center;
`

export default function Home() {
    return (
        <Container>
            <ContainerTopHeader>
                <Logo/>
            </ContainerTopHeader>
            <ContainerSlide>
                <Movie/>
            </ContainerSlide>
        </Container>
  );
}

