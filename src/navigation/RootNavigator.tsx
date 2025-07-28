import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import NewsScreen from '../screens/NewsScreen';
import RunScreen from '../screens/RunScreen';
import StoreScreen from '../screens/StoreScreen';
import ProfileScreen from '../screens/ProfileScreen';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const RootNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: '#FF4D4D',
        tabBarInactiveTintColor: 'gray',
        tabBarIcon: ({ color, size }) => {
          let iconName: keyof typeof Ionicons.glyphMap = 'home';

          switch (route.name) {
            case 'Trang Chủ':
              iconName = 'home-outline';
              break;
            case 'Tin Tức':
              iconName = 'newspaper-outline';
              break;
            case 'Chạy Bộ':
              iconName = 'walk-outline';
              break;
            case 'Cửa Hàng':
              iconName = 'cart-outline';
              break;
            case 'Hồ Sơ':
              iconName = 'person-outline';
              break;
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Trang Chủ" component={HomeScreen} />
      <Tab.Screen name="Tin Tức" component={NewsScreen} />
      <Tab.Screen name="Chạy Bộ" component={RunScreen} />
      <Tab.Screen name="Cửa Hàng" component={StoreScreen} />
      <Tab.Screen name="Hồ Sơ" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default RootNavigator;
