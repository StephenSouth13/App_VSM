// src/screens/RunScreen.tsx
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import MapView, { Marker } from 'react-native-maps';

const RunScreen = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [timer, setTimer] = useState(0); // seconds

  const toggleRun = () => {
    setIsRunning(!isRunning);
    // TODO: Start/Stop GPS tracking & Timer logic
  };

  return (
    <SafeAreaView style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 21.0285,
          longitude: 105.8542,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        showsUserLocation
        followsUserLocation
      />

      <View style={styles.overlay}>
        <View style={styles.statsRow}>
          <StatItem label="Thời gian" value="00:00:00" />
          <StatItem label="Quãng đường" value="0.00 km" />
          <StatItem label="Pace" value="0:00 /km" />
        </View>

        <TouchableOpacity style={[styles.button, isRunning && styles.buttonStop]} onPress={toggleRun}>
          <Ionicons name={isRunning ? 'pause' : 'play'} size={28} color="#fff" />
          <Text style={styles.buttonText}>{isRunning ? 'Tạm dừng' : 'Bắt đầu chạy'}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const StatItem = ({ label, value }: { label: string; value: string }) => (
  <View style={styles.statItem}>
    <Text style={styles.statLabel}>{label}</Text>
    <Text style={styles.statValue}>{value}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  map: {
    flex: 1,
  },
  overlay: {
    position: 'absolute',
    bottom: 30,
    width: '100%',
    alignItems: 'center',
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#000000aa',
    padding: 12,
    borderRadius: 16,
    marginBottom: 16,
    width: '90%',
  },
  statItem: {
    alignItems: 'center',
  },
  statLabel: {
    color: '#ccc',
    fontSize: 12,
  },
  statValue: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  button: {
    backgroundColor: '#27ae60',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 100,
  },
  buttonStop: {
    backgroundColor: '#e74c3c',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default RunScreen;
