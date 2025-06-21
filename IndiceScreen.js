import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
//import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//import { useNavigation } from '@react-navigation/native';
//import { Linking } from 'react-native';

//import imagen from './assets/logo-zapatos-ballet.png';

const { height } = Dimensions.get('window');

const Stack = createStackNavigator();

function IndiceScreen({ navigation }) {
    return (
      <View style={styles.indiceContainer}>
        {/* titulo */}
        <Text style={styles.headerTitle}>Índice</Text>
  
        {/* botones */}
        <View style={styles.indexContainer}>
          <TouchableOpacity style={styles.indexButton} onPress={() => navigation.navigate('Inicio')}>
            <Text style={styles.indexButtonText}>Inicio</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.indexButton} onPress={() => navigation.navigate('Informacion')}>
            <Text style={styles.indexButtonText}>Información</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.indexButton} onPress={() => navigation.navigate('Carrito')}>
            <Text style={styles.indexButtonText}>Carrito</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.indexButton} onPress={() => navigation.navigate('CerrarSesion')}>
            <Text style={styles.indexButtonText}>Cerrar sesión</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  const styles = StyleSheet.create({
    //pantalla indice
    indiceContainer: {
      flex: 1,
      backgroundColor: '#FFC0CB', 
      alignItems: 'center', 
      justifyContent: 'center', 
      paddingTop: 50, 
    },
      headerTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 20,
      },
      indexContainer: {
        width: '100%',
        alignItems: 'center', 
        justifyContent: 'center', 
        paddingHorizontal: 20,  
      },
      indexButton: {
        backgroundColor: '#E0E0E0', 
        paddingVertical: 15,
        marginBottom: 15,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        width: '80%',  
      },
      indexButtonText: {
        fontSize: 18,
        color: '#000',
        fontWeight: 'bold',
      },
  });

  export default IndiceScreen;
