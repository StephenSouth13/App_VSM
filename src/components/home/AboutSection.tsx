import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AboutSection = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Về VSM</Text>
      <Text style={styles.text}>
        Vietnam Student Marathon là sự kiện thể thao hàng năm dành cho sinh viên khắp cả nước,
        nhằm kết nối, truyền cảm hứng và thúc đẩy phong trào rèn luyện sức khỏe trong giới trẻ.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 12,
  },
  text: {
    fontSize: 16,
    lineHeight: 22,
    color: '#555',
  },
});

export default AboutSection;
