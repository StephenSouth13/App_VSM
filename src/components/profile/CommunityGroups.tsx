import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CommunityGroups = () => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>Nhóm cộng đồng</Text>
      <Text style={styles.item}>🏃‍♂️ VSM Runners Hồ Chí Minh</Text>
      <Text style={styles.item}>🏃‍♀️ Đại học Quốc Gia Team</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 4,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 12,
  },
  item: {
    fontSize: 14,
    color: '#555',
    marginBottom: 6,
  },
});

export default CommunityGroups;
