import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import Home from './Components/Home';
import News from './Components/News';
import Contact from './Components/Contact';
import Stream from './Components/Stream';
import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';



const Tab = styled.View`
  width: 100%;
  height: 100px;
  background-color: #871910;
  display: flex;
  flex-direction: row;
  position: fixed;
  align-items: center;
  justify-content: center;
  gap: 30px;
`;

const ButtonTab = styled.TouchableOpacity`
  display: flex;
  align-items: center;
`;

const App = () => {
  const [activeTab, setActiveTab] = useState('Tab1');

  const changeTab = (tabName) => {
    setActiveTab(tabName);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'Tab1':
        return <Home />;
      case 'Tab2':
        return <News />;
      case 'Tab3':
        return <Stream />;

      case 'Tab4':
        return <Contact />;

      default:
        return <Home />;
    }
  };

  return (
    <View style={{ flex: 1, paddingBottom: 15 }}>
      {renderContent()}
      <Tab>
        <ButtonTab onPress={() => changeTab('Tab1')} style={styles.tabItem}>
          <Feather name="home" size={24} style={{ color: activeTab === 'Tab1' ? 'white' : '#8E8E8F' }} />
          <Text style={{ color: activeTab === 'Tab1' ? 'white' : '#8E8E8F' }}>Acceuil</Text>
        </ButtonTab>

        <ButtonTab onPress={() => changeTab('Tab2')} style={styles.tabItem}>
          <FontAwesome name="newspaper-o" size={24} style={{ color: activeTab === 'Tab2' ? 'white' : '#8E8E8F' }} />
          <Text style={{ color: activeTab === 'Tab2' ? 'white' : '#8E8E8F' }}>Actualités</Text>
        </ButtonTab>

        <ButtonTab onPress={() => changeTab('Tab3')} style={styles.tabItem}>
          <MaterialIcons name="live-tv" size={24} style={{ color: activeTab === 'Tab3' ? 'white' : '#8E8E8F' }} />
          <Text style={{ color: activeTab === 'Tab3' ? 'white' : '#8E8E8F' }}>Direct</Text>
        </ButtonTab>

        <ButtonTab onPress={() => changeTab('Tab4')} style={styles.tabItem}>
          <MaterialIcons name="mail" size={24} style={{ color: activeTab === 'Tab4' ? 'white' : '#8E8E8F' }} />
          <Text style={{ color: activeTab === 'Tab4' ? 'white' : '#8E8E8F' }}>Contact</Text>
        </ButtonTab>
      </Tab>
    </View>
  );
};

const styles = StyleSheet.create({});

export default App;
