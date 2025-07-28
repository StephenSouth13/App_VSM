// src/screens/RegisterScreen.tsx
import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import AuthInput from '../components/auth/AuthInput';
import AuthButton from '../components/auth/AuthButton';
import { useNavigation } from '@react-navigation/native';

const RegisterScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigation = useNavigation<any>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Đăng ký</Text>
      <AuthInput label="Email" value={email} onChangeText={setEmail} keyboardType="email-address" />
      <AuthInput label="Mật khẩu" value={password} onChangeText={setPassword} secureTextEntry />
      <AuthInput label="Xác nhận mật khẩu" value={confirmPassword} onChangeText={setConfirmPassword} secureTextEntry />
      <AuthButton text="Tạo tài khoản" onPress={() => {}} />

      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.link}>Đã có tài khoản? Đăng nhập</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, justifyContent: 'center' },
  title: { fontSize: 28, fontWeight: 'bold', marginBottom: 24, textAlign: 'center' },
  link: { marginTop: 16, textAlign: 'center', color: '#007AFF' },
});

export default RegisterScreen;


