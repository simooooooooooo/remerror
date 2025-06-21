import React, { useState } from 'react';
import { View, Text, TextInput, Image, StyleSheet, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
//import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//import { useNavigation } from '@react-navigation/native';
//import { Linking } from 'react-native';

//import imagen from './assets/logo-zapatos-ballet.png';

const { height } = Dimensions.get('window');

const Stack = createStackNavigator();

function CerrarSesionScreen({ navigation }) {
    return (
      <View style={styles.screenContainer}>
        <Text style={styles.screenTitle}>¿Está seguro que quiere cerrar sesión?</Text>
  
        <View style={styles.buttonContainer}>
          {/* boton "Sí" que lleva a la pantalla HomeScreen */}
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Home')}
          >
            <Text style={styles.buttonText}>Sí</Text>
          </TouchableOpacity>
  
          {/* boton "No" que vuelve al indice */}
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Índice')}
          >
            <Text style={styles.buttonText}>No</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  const styles = StyleSheet.create({
    //cerrar sesion
    screenContainer: {
      flex: 1,
      backgroundColor: '#FFC0CB', 
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
    },
  
    screenTitle: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#000',
      marginBottom: 30,
      textAlign: 'center',
    },
  
    buttonContainer: {
      flexDirection: 'row', 
      justifyContent: 'space-around', 
      width: '100%',
    },
  
    button: {
      backgroundColor: '#FF69B4',
      paddingVertical: 15,
      paddingHorizontal: 30,
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
      marginHorizontal: 10,
    },
  
    buttonText: {
      fontSize: 18,
      color: '#fff',
      fontWeight: 'bold',
    },
  });

  export default CerrarSesionScreen;
