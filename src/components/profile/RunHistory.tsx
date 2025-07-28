import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const runs = [
  { date: '2025-07-24', distance: '5.2 km', duration: '32:10' },
  { date: '2025-07-20', distance: '10.0 km', duration: '1:05:30' },
  { date: '2025-07-15', distance: '3.0 km', duration: '18:45' },
];

const RunHistory = () => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>Lịch sử chạy bộ</Text>
      {runs.map((run, index) => (
        <View key={index} style={styles.runRow}>
          <Text style={styles.runText}>{run.date}</Text>
          <Text style={styles.runText}>{run.distance}</Text>
          <Text style={styles.runText}>{run.duration}</Text>
        </View>
      ))}
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
  runRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 6,
  },
  runText: {
    fontSize: 14,
    color: '#444',
  },
});

export default RunHistory;
