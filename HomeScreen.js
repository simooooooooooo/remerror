import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';

import imagen from '../assets/logo-zapatos-ballet.png';

const { height } = Dimensions.get('window');

function HomeScreen({ navigation }) {
  return (
    <View style={styles.homeContainer}>
      <View style={styles.homeTextContainer}>
        <Text style={styles.homeTitle}>R.E.M</Text>
        <Text style={styles.homeSubtitle}>Danza</Text>
      </View>

      <Image source={imagen} style={styles.homeImage} />

      <TouchableOpacity style={styles.homeButton} onPress={() => navigation.navigate('Register')}>
        <Text style={styles.homeButtonText}>Registrarse</Text>
      </TouchableOpacity>

      <View style={styles.homeLoginContainer}>
        <Text style={styles.homeLoginText}>¿Ya tienes una cuenta? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.homeLoginButtonText}>Inicia sesión</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    backgroundColor: '#FFC0CB',
    justifyContent: 'center',
    alignItems: 'center',
  },
  homeTextContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#000',
    backgroundColor: '#fff',
    paddingVertical: 20,
    paddingHorizontal: 30,
    marginBottom: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  homeTitle: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#000',
    textShadowColor: '#FF69B4',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
  },
  homeSubtitle: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#FF69B4',
    textShadowColor: '#000',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
  },
  homeImage: {
    width: 200,
    height: 200,
    marginBottom: 30,
  },
  homeButton: {
    backgroundColor: '#FF69B4',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  homeButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  homeLoginContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  homeLoginText: {
    fontSize: 16,
    color: '#000',
  },
  homeLoginButtonText: {
    fontSize: 16,
    color: '#FF69B4',
    fontWeight: 'bold',
  },
});

export default HomeScreen;

