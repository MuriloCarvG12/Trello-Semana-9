import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, SafeAreaView, Modal } from 'react-native';
import { useEffect, useState } from 'react';
import Task from './components/task/task';
import TasksScreen from './Semana9/TasksScreen.js'
import HomeScreen from './Semana9/HomeScreen.js'
import SettingScreen from './Semana9/SettingScreen.js'
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator()




export default function App() {

  return (
    <View style={styles.container}  edges={['top', 'left', 'right']}>
      <NavigationContainer>        
        <StatusBar
          backgroundColor="transparent"
          translucent={true}
          barStyle="dark-content" // Define o estilo do conteúdo da StatusBar (claro ou escuro)
        />
        {/* Definicao das tabs */}
        <Tab.Navigator
          initialRouteName='Tasks'
          screenOptions={{ tabBarIndicatorStyle: { backgroundColor: "blue" } }}>
          <Tab.Screen name='Tasks' component={TasksScreen} />
          <Tab.Screen name='Home' component={HomeScreen} />
          <Tab.Screen name='Setting' component={SettingScreen} />
          
          
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tasks:
  {
    padding:20,
  },
  centeredView:
  {
    alignItems: 'center',
    justifyContent: 'center'
  },
  modalView:
  {
    alignSelf: 'center'
  }
});
