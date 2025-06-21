import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
//import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//import { useNavigation } from '@react-navigation/native';
//import { Linking } from 'react-native';

//import imagen from './assets/logo-zapatos-ballet.png';

const { height } = Dimensions.get('window');

const Stack = createStackNavigator();

function InformacionScreen() {
    return (
      <View style={styles.informacionContainer}>
        <Text style={styles.informacionTitle}>Información</Text>
        <Text style={styles.informacionDescription}>
          Aquí encontrarás información sobre distintos tipos de danza.
        </Text>
  
        <View style={{ flexDirection: 'row', marginBottom: 30 }}>
          <Image source={require('../assets/bailarina1.png')} style={styles.informacionImage} />
          <View style={styles.informacionTextContainer}>
            <Text style={styles.informacionText}>
              El ballet es una forma de danza que se caracteriza por movimientos elegantes y fluidos, acompañados de música, donde los bailarines utilizan técnicas específicas y expresión corporal para contar historias o transmitir emociones en el escenario.
            </Text>
          </View>
        </View>
  
        <View style={{ flexDirection: 'row', marginBottom: 30 }}>
          <Image source={require('../assets/bailarina2.png')} style={styles.informacionImage} />
          <View style={styles.informacionTextContainer}>
            <Text style={styles.informacionText}>
              La danza contemporánea es un estilo de baile que surge en el siglo XX y se caracteriza por su libertad de expresión, innovación y experimentación. Combina elementos de diferentes estilos de danza, así como movimientos fluidos y expresivos del cuerpo, a menudo explorando temas emocionales, sociales o políticos.
            </Text>
          </View>
        </View>
  
        <View style={{ flexDirection: 'row', marginBottom: 30 }}>
          <Image source={require('../assets/bailarina3.png')} style={styles.informacionImage} />
          <View style={styles.informacionTextContainer}>
            <Text style={styles.informacionText}>
              El jazz es un género musical que destaca por su improvisación, ritmos sincopados y fusiones de influencias musicales, originado en Nueva Orleans a finales del siglo XIX.
            </Text>
          </View>
        </View>
  
      </View>
    );
  }

  const styles = StyleSheet.create({
    //informacion
      informacionContainer: {
        flex: 1,
        backgroundColor: '#FFC0CB',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: 20,
        paddingHorizontal: 20,
      },
      informacionTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 20,
      },
      informacionDescription: {
        fontSize: 18,
        color: '#000',
        textAlign: 'center',
        marginBottom: 30,
        padding: 10,
        borderWidth: 2,
        borderColor: '#FF69B4',
        borderRadius: 10,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
      },
      informacionImage: {
        width: 150,
        height: 150,
        marginBottom: 20,
      },
      informacionTextContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginLeft: 20,
      },
      informacionText: {
        fontSize: 16,
        color: '#000',
        marginBottom: 10,
      },
      informacionButton: {
        backgroundColor: '#FF69B4',
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 10,
        marginVertical: 10,
        alignItems: 'center',
        justifyContent: 'center',
      },
      informacionButtonText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
      },
  });

  export default InformacionScreen;
