import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const CTASection = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Sẵn sàng đăng ký tham gia VSM?</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Đăng ký ngay</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 24,
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
});

export default CTASection;
