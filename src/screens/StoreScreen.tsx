// src/screens/StoreScreen.tsx
import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';

const products = [
  {
    id: '1',
    name: 'Giày chạy bộ VSM Pro',
    price: '1.290.000₫',
    image: require('@/assets/store/shoes1.png'),
  },
  {
    id: '2',
    name: 'Áo thể thao VSM',
    price: '450.000₫',
    image: require('@/assets/store/shirt1.png'),
  },
  {
    id: '3',
    name: 'Bình nước VSM',
    price: '120.000₫',
    image: require('@/assets/store/bottle1.png'),
  },
  {
    id: '4',
    name: 'Nón chạy bộ VSM',
    price: '180.000₫',
    image: require('@/assets/store/cap1.png'),
  },
];

const StoreScreen = () => {
  const renderItem = ({ item }: { item: typeof products[0] }) => (
    <TouchableOpacity style={styles.card}>
      <Image source={item.image} style={styles.image} resizeMode="contain" />
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.price}>{item.price}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cửa Hàng VSM</Text>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        numColumns={2}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default StoreScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fdfdfd',
    paddingTop: 60,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#1a1a1a',
  },
  list: {
    paddingBottom: 100,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 12,
    marginBottom: 20,
    width: '48%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 12,
  },
  name: {
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
    color: '#333',
  },
  price: {
    fontSize: 14,
    color: '#27ae60',
    marginTop: 4,
    fontWeight: '600',
  },
});
