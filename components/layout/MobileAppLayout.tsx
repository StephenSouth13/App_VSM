import React from 'react';
import { View, SafeAreaView, StyleSheet, StatusBar } from 'react-native';

interface Props {
  children: React.ReactNode;
}

const MobileAppLayout = ({ children }: Props) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#F9FAFB" />
      <View style={styles.container}>{children}</View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
});

export default MobileAppLayout;
