import React, { useState } from 'react';
import { View, Text, TextInput, Image, StyleSheet, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const { height } = Dimensions.get('window');

const TiendaScreen = () => {
  const productos = [
    { id: 1, imagen: require('../assets/remeradanza.png'), descripcion: "Remera 'Ballet Recital' negra y violeta", talle: "M", precio: 2500 },
    { id: 2, imagen: require('../assets/pantalondanza.png'), descripcion: "Pantalones negros flexibles", talle: "M", precio: 7500 },
    { id: 3, imagen: require('../assets/bodydanza.png'), descripcion: "Body negro", talle: "M", precio: 6500 },
    { id: 4, imagen: require('../assets/zapatosdanza.png'), descripcion: "Zapatos de jazz negros", talle: "L", precio: 20000 },
    { id: 5, imagen: require('../assets/puntasdanza.png'), descripcion: "Puntas de ballet rosas", talle: "L", precio: 40000 },
    { id: 6, imagen: require('../assets/tutudanza.png'), descripcion: "Tutu negro", talle: "L", precio: 8000 },
  ];

  const [carrito, setCarrito] = useState([]);
  const [searchText, setSearchText] = useState('');
  const navigation = useNavigation();

  const toggleProductoEnCarrito = (producto) => {
    const existe = carrito.find((item) => item.id === producto.id);
    if (existe) {
      setCarrito(carrito.filter((item) => item.id !== producto.id));
    } else {
      setCarrito([...carrito, producto]);
    }
  };

  const productosEnCarrito = carrito.length;

  const productosFiltrados = productos.filter((producto) =>
    producto.descripcion.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Buscar..."
        style={styles.searchBar}
        value={searchText}
        onChangeText={setSearchText}
      />

      <ScrollView style={styles.productList}>
        {productosFiltrados.map((producto) => (
          <View key={producto.id} style={styles.producto}>
            <Image source={producto.imagen} style={styles.imagen} />
            <View style={styles.info}>
              <Text style={styles.descripcion}>{producto.descripcion}</Text>
              <Text style={styles.talle}>Talle: {producto.talle}</Text>
              <Text style={styles.precio}>${producto.precio}</Text>
            </View>
            <TouchableOpacity
              onPress={() => toggleProductoEnCarrito(producto)}
              style={styles.boton}
            >
              <Text
                style={[styles.estrella, carrito.some((item) => item.id === producto.id) && styles.estrellaSeleccionada]}
              >
                ★
              </Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>

      <View style={styles.carrito}>
        <Text style={styles.total}>Carrito: {productosEnCarrito}</Text>
        <TouchableOpacity
          style={styles.botonComprar}
          onPress={() => navigation.navigate('Cart', { carrito })}
        >
          <Text style={styles.textoBotonComprar}>Ir al carrito</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    width: '90%',
    height: 40,
    backgroundColor: '#FFF',
    borderRadius: 20,
    paddingHorizontal: 15,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#000',
    alignSelf: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#FFC0CB',
  },
  productList: {
    flex: 1,
    marginBottom: 80,
    paddingHorizontal: 20,
  },
  producto: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 5,
  },
  imagen: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 15,
  },
  info: {
    flex: 1,
  },
  descripcion: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  talle: {
    fontSize: 14,
    color: '#555',
  },
  precio: {
    fontSize: 14,
    color: '#FF69B4',
    fontWeight: 'bold',
  },
  boton: {
    padding: 10,
  },
  estrella: {
    fontSize: 24,
    color: '#ccc',
  },
  estrellaSeleccionada: {
    color: '#FFD700',
  },
  carrito: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    paddingVertical: 20,
    paddingHorizontal: 30,
    borderTopWidth: 2,
    borderColor: '#ddd',
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  total: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  botonComprar: {
    backgroundColor: '#FF69B4',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
  },
  textoBotonComprar: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default TiendaScreen;

