import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Alert } from 'react-native';

const LogoutButton = () => {
  const handleLogout = () => {
    // TODO: thêm logic đăng xuất (xóa token, gọi API, navigate...)
    Alert.alert('Đăng xuất', 'Bạn đã đăng xuất khỏi tài khoản!');
  };

  return (
    <TouchableOpacity style={styles.button} onPress={handleLogout}>
      <Text style={styles.buttonText}>🚪 Đăng xuất</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    marginTop: 32,
    backgroundColor: '#ff3b30',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 16,
  },
});

export default LogoutButton;
