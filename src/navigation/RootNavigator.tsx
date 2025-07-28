import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Hero section */}
      <LinearGradient colors={["#FF4D4D", "#FF9966"]} style={styles.heroSection}>
        <Text style={styles.title}>Vietnam Student Marathon</Text>
        <Text style={styles.subtitle}>Cùng nhau bứt phá giới hạn</Text>
        <Image
          source={require("../../assets/hero.png")}
          style={styles.heroImage}
          resizeMode="contain"
        />
      </LinearGradient>

      {/* Countdown section */}
      <View style={styles.countdownContainer}>
        <Text style={styles.countdownText}>Sự kiện tiếp theo diễn ra sau:</Text>
        <Text style={styles.countdownTime}>10 ngày 4 giờ 15 phút</Text>
      </View>

      {/* Register button */}
      <TouchableOpacity style={styles.registerButton}>
        <Text style={styles.registerText}>Đăng ký ngay</Text>
      </TouchableOpacity>

      {/* Highlight News */}
      <View style={styles.newsContainer}>
        <Text style={styles.newsTitle}>Tin nổi bật</Text>
        <View style={styles.newsItem}>
          <Image
            source={{ uri: "https://source.unsplash.com/random/300x200?marathon" }}
            style={styles.newsImage}
          />
          <View style={styles.newsContent}>
            <Text style={styles.newsHeader}>VSM 2025 chính thức khởi động!</Text>
            <Text style={styles.newsDescription}>Sự kiện chạy bộ sinh viên toàn quốc sắp diễn ra tại Hà Nội.</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  heroSection: {
    padding: 24,
    alignItems: 'center',
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 20,
  },
  subtitle: {
    fontSize: 16,
    color: '#fff',
    marginTop: 8,
    marginBottom: 12,
  },
  heroImage: {
    width: 250,
    height: 180,
  },
  countdownContainer: {
    padding: 16,
    backgroundColor: '#f2f2f2',
    margin: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  countdownText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  countdownTime: {
    fontSize: 16,
    color: '#FF4D4D',
  },
  registerButton: {
    backgroundColor: '#FF4D4D',
    marginHorizontal: 40,
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 8,
    elevation: 5,
  },
  registerText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  newsContainer: {
    paddingHorizontal: 16,
    paddingTop: 24,
    paddingBottom: 60,
  },
  newsTitle: {
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
  newsHeader: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 4,
  },
  newsDescription: {
    fontSize: 14,
    color: '#666',
  },
});
