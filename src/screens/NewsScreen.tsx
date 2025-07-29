// src/screens/NewsScreen.tsx
import React from 'react';
import { View, ScrollView, Text, StyleSheet, Image } from 'react-native';
import MobileAppLayout from '@/components/layout/MobileAppLayout';

const NewsScreen = () => {
  const fakeNews = [
    {
      id: '1',
      title: 'Giải chạy VSM 2025 chính thức khởi động!',
      image: require('@/assets/news/news1.jpg'),
      date: '27/07/2025',
    },
    {
      id: '2',
      title: 'Top runner của tháng 7 đã lộ diện!',
      image: require('@/assets/news/news2.jpg'),
      date: '25/07/2025',
    },
  ];

  return (
    <MobileAppLayout>
      <ScrollView contentContainerStyle={styles.container}>
        {fakeNews.map((item) => (
          <View key={item.id} style={styles.card}>
            <Image source={item.image} style={styles.image} />
            <View style={styles.content}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.date}>{item.date}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </MobileAppLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    gap: 16,
  },
  card: {
    borderRadius: 16,
    overflow: 'hidden',
    backgroundColor: '#fff',
    elevation: 4,
  },
  image: {
    width: '100%',
    height: 180,
  },
  content: {
    padding: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1A1A1A',
  },
  date: {
    marginTop: 4,
    fontSize: 12,
    color: '#888',
  },
});

export default NewsScreen;
