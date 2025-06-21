import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';

const CartScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { carrito } = route.params; // Obtenemos el carrito desde los parámetros

  const calcularTotal = () => {
    return carrito.reduce((total, producto) => total + producto.precio, 0);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tu Carrito</Text>
      {carrito.length === 0 ? (
        <Text style={styles.empty}>El carrito está vacío</Text>
      ) : (
        carrito.map((producto) => (
          <View key={producto.id} style={styles.producto}>
            <Text>{producto.descripcion}</Text>
            <Text>${producto.precio}</Text>
          </View>
        ))
      )}
      <Text style={styles.total}>Total: ${calcularTotal()}</Text>

      <TouchableOpacity
        style={styles.botonPagar}
        onPress={() => navigation.navigate('Tienda')}
      >
        <Text style={styles.textoBotonPagar}>Ir a la tienda</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  empty: {
    fontSize: 18,
    color: 'gray',
  },
  producto: {
    marginVertical: 10,
  },
  total: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
  },
  botonPagar: {
    backgroundColor: '#FF69B4',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginTop: 20,
    alignItems: 'center',
  },
  textoBotonPagar: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFF',
  },
});

export default CartScreen;

