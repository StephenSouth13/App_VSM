// src/screens/ForgotPasswordScreen.tsx
import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import AuthInput from '../components/auth/AuthInput';
import AuthButton from '../components/auth/AuthButton';
import { useNavigation } from '@react-navigation/native';

const ForgotPasswordScreen = () => {
  const [email, setEmail] = useState('');
  const navigation = useNavigation<any>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Khôi phục mật khẩu</Text>
      <Text style={styles.desc}>Nhập email của bạn để nhận hướng dẫn đặt lại mật khẩu.</Text>
      <AuthInput label="Email" value={email} onChangeText={setEmail} keyboardType="email-address" />
      <AuthButton text="Gửi mã khôi phục" onPress={() => {}} />

      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.link}>Quay lại đăng nhập</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, justifyContent: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 12, textAlign: 'center' },
  desc: { fontSize: 16, marginBottom: 16, textAlign: 'center', color: '#555' },
  link: { marginTop: 24, textAlign: 'center', color: '#007AFF' },
});

export default ForgotPasswordScreen;
