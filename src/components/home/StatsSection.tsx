import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const StatsSection = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Con số ấn tượng</Text>
      <View style={styles.statsRow}>
        <StatItem label="30+" value="Trường ĐH" />
        <StatItem label="5,000+" value="Sinh viên" />
        <StatItem label="20km+" value="Cự ly chạy" />
      </View>
    </View>
  );
};

const StatItem = ({ label, value }: { label: string; value: string }) => (
  <View style={styles.item}>
    <Text style={styles.value}>{value}</Text>
    <Text style={styles.label}>{label}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: '#f9f9f9',
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 16,
    textAlign: 'center',
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  item: {
    alignItems: 'center',
  },
  value: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#009688',
  },
  label: {
    fontSize: 14,
    color: '#444',
    marginTop: 4,
  },
});

export default StatsSection;
