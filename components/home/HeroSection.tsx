import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const HeroSection = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/hero-banner.jpg')}
        style={styles.image}
        resizeMode="cover"
      />
      <Text style={styles.title}>Vietnam Student Marathon 2025</Text>
      <Text style={styles.subtitle}>Chạy vì đam mê, kết nối sinh viên toàn quốc</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 16,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginTop: 8,
    textAlign: 'center',
  },
});

export default HeroSection;
