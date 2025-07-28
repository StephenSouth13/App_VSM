import React from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import UserInfo from '@/components/profile/UserInfo';
import CommunityGroups from '@/components/profile/CommunityGroups';
import RunHistory from '@/components/profile/RunHistory';
import LogoutButton from '@/components/profile/LogoutButton';
import MobileAppLayout from '@/components/layout/MobileAppLayout';

const ProfileScreen = () => {
  return (
    <MobileAppLayout>
      <ScrollView contentContainerStyle={styles.container}>
        <UserInfo />
        <CommunityGroups />
        <RunHistory />
      </ScrollView>
      
    </MobileAppLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    gap: 24,
  },
});

export default ProfileScreen;
