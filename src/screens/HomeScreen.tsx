import React from 'react';
import { View, StyleSheet } from 'react-native';
import HeroSection from '@/components/home/HeroSection';
import CountdownTimer from '@/components/home/CountdownTimer';
import AboutSection from '@/components/home/AboutSection';
import StatsSection from '@/components/home/StatsSection';
import CTASection from '@/components/home/CTASection';
import MobileAppLayout from '@/components/layout/MobileAppLayout';

const HomeScreen = () => {
  return (
    <MobileAppLayout>
      <View style={styles.sectionSpacing}>
        <HeroSection />
      </View>

      <View style={styles.sectionSpacing}>
        <CountdownTimer eventDate="2025-12-15T08:00:00" />
      </View>

      <View style={styles.sectionSpacing}>
        <AboutSection />
      </View>

      <View style={styles.sectionSpacing}>
        <StatsSection />
      </View>

      <View style={styles.sectionSpacing}>
        <CTASection />
      </View>
    </MobileAppLayout>
  );
};

const styles = StyleSheet.create({
  sectionSpacing: {
    marginBottom: 24,
  },
});

export default HomeScreen;
