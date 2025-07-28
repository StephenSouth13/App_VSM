import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const UserInfo = () => {
  return (
    <View style={styles.card}>
      <Image
        source={{ uri: 'https://i.pravatar.cc/150?img=12' }}
        style={styles.avatar}
      />
      <Text style={styles.name}>Nguyễn Văn A</Text>
      <Text style={styles.email}>nguyenvana@example.com</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 24,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 4,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 999,
    marginBottom: 12,
  },
  name: {
    fontSize: 20,
    fontWeight: '700',
    color: '#333',
  },
  email: {
    fontSize: 14,
    color: '#888',
    marginTop: 4,
  },
});

export default UserInfo;
