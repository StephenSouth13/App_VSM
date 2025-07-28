// src/screens/ResetPasswordScreen.tsx
import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import AuthInput from '../components/auth/AuthInput';
import AuthButton from '../components/auth/AuthButton';

const ResetPasswordScreen = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Đặt lại mật khẩu</Text>
      <AuthInput label="Mật khẩu mới" value={newPassword} onChangeText={setNewPassword} secureTextEntry />
      <AuthInput label="Xác nhận mật khẩu" value={confirmPassword} onChangeText={setConfirmPassword} secureTextEntry />
      <AuthButton text="Cập nhật mật khẩu" onPress={() => {}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, justifyContent: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 16, textAlign: 'center' },
});

export default ResetPasswordScreen;
