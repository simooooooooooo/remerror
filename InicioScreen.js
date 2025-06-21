import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
//import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
//import { Linking } from 'react-native';

//import imagen from './assets/logo-zapatos-ballet.png';

const { height } = Dimensions.get('window');

const Stack = createStackNavigator();

function InicioScreen() {
    const navigation = useNavigation();
    
    return (
      <View style={styles.inicioContainer}>
  
        {/* titulo */}
        <Text style={styles.inicioTitle}>Bienvenid@ a R.E.M Danza</Text>
  
        {/* descripción */}
        <Text style={styles.inicioDescription}>
          Somos una compañía dedicada a ofrecer vestuarios accesibles para bailarines, 
          con envíos a todo el mundo.
        </Text>
  
        {/* imagen */}
        <Image source={imagen} style={styles.inicioImage} />
  
        {/* botones */}
        <View style={styles.optionsContainer}>
    <TouchableOpacity style={styles.verticalButton} onPress={() => navigation.navigate('Índice')}>
      <Text style={styles.verticalButtonText}>Índice</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.verticalButton} onPress={() => navigation.navigate('Informacion')}>
      <Text style={styles.verticalButtonText}>Información</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.verticalButton} onPress={() => navigation.navigate('Carrito')}>
      <Text style={styles.verticalButtonText}>Carrito</Text>
    </TouchableOpacity>
  </View>
      </View>
    );
  }

  const styles = StyleSheet.create({
    //pantalla de inicio:
    inicioContainer: {
      flex: 1,
      backgroundColor: '#FFC0CB', 
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 20,
    },
    inicioTitle: {
      fontSize: 28,
      fontWeight: 'bold',
      color: '#000',
      marginBottom: 10,
      textAlign: 'center',
    },
    inicioDescription: {
      fontSize: 16,
      color: '#000',
      textAlign: 'center',
      marginBottom: 20,
    },
    inicioImage: {
      width: 180,
      height: 180,
      marginBottom: 30,
    },
    optionsContainer: {
      width: '100%',
      alignItems: 'center', 
    },
    verticalButton: {
      width: '80%', 
      backgroundColor: '#FF69B4',
      paddingVertical: 15,
      borderRadius: 10,
      marginVertical: 10,
      alignItems: 'center',
      justifyContent: 'center',
    },
    verticalButtonText: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#fff',
    },
  });

  export default InicioScreen;
