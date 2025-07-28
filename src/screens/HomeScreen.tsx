import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import colors from '../theme/colors';

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Hero */}
      <LinearGradient colors={['#FF4D4D', '#FF9966']} style={styles.hero}>
        <Text style={styles.heroTitle}>Vietnam Student Marathon</Text>
        <Text style={styles.heroSubtitle}>Nơi bứt phá giới hạn của bạn</Text>
        <Image
          source={require('../../assets/running.png')}
          style={styles.heroImage}
          resizeMode="contain"
        />
      </LinearGradient>

      {/* Countdown */}
      <View style={styles.countdownBox}>
        <Text style={styles.countdownTitle}>Sự kiện tiếp theo</Text>
        <Text style={styles.countdownTime}>Còn 10 ngày 4 giờ 15 phút</Text>
      </View>

      {/* Đăng ký ngay */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Đăng ký ngay</Text>
      </TouchableOpacity>

      {/* Tin nổi bật */}
      <View style={styles.newsSection}>
        <Text style={styles.sectionTitle}>Tin nổi bật</Text>
        <View style={styles.newsItem}>
          <Image
            source={{ uri: 'https://source.unsplash.com/random/300x200?marathon' }}
            style={styles.newsImage}
          />
          <View style={styles.newsContent}>
            <Text style={styles.newsTitle}>VSM 2025 chính thức khởi động!</Text>
            <Text style={styles.newsDesc}>Sự kiện chạy bộ sinh viên toàn quốc sắp diễn ra tại Hà Nội.</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },

  hero: {
    padding: 24,
    alignItems: 'center',
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  heroTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 20,
  },
  heroSubtitle: {
    fontSize: 16,
    color: '#fff',
    marginTop: 8,
    marginBottom: 12,
  },
  heroImage: {
    width: 250,
    height: 180,
  },

  countdownBox: {
    padding: 16,
    backgroundColor: '#f2f2f2',
    margin: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  countdownTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
    color: colors.text,
  },
  countdownTime: {
    fontSize: 16,
    color: '#FF4D4D',
  },

  button: {
    backgroundColor: colors.primary,
    marginHorizontal: 40,
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 8,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },

  newsSection: {
    paddingHorizontal: 16,
    paddingTop: 24,
    paddingBottom: 60,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  newsItem: {
    flexDirection: 'row',
    backgroundColor: '#fafafa',
    borderRadius: 12,
    overflow: 'hidden',
  },
  newsImage: {
    width: 100,
    height: 100,
  },
  newsContent: {
    flex: 1,
    padding: 12,
    justifyContent: 'center',
  },
  newsTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 4,
  },
  newsDesc: {
    fontSize: 14,
    color: '#666',
  },
});
