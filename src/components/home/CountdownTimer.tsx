import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

type Props = {
  eventDate: string;
};

const CountdownTimer = ({ eventDate }: Props) => {
  const [timeLeft, setTimeLeft] = useState('');

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const target = new Date(eventDate).getTime();
      const distance = target - now;

      if (distance < 0) {
        clearInterval(timer);
        setTimeLeft('Đã diễn ra');
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft(`${days} ngày ${hours} giờ ${minutes} phút ${seconds} giây`);
    }, 1000);

    return () => clearInterval(timer);
  }, [eventDate]);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Sự kiện bắt đầu sau:</Text>
      <Text style={styles.time}>{timeLeft}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    backgroundColor: '#fefefe',
    alignItems: 'center',
  },
  label: {
    fontSize: 16,
    color: '#444',
  },
  time: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#e91e63',
    marginTop: 8,
  },
});

export default CountdownTimer;
