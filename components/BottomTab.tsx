import { View, TouchableOpacity, Text } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { FontAwesome, Feather, MaterialIcons } from '@expo/vector-icons';
import { useState } from 'react';

const tabs = [
  { name: 'Inicio', icon: <Feather name="home" size={22} color="#6B7280" />, key: 'home' },
  { name: 'Agenda', icon: <Feather name="calendar" size={22} color="#6B7280" />, key: 'calendar' },
  { name: 'Notificaciones', icon: <Feather name="bell" size={22} color="#6B7280" />, key: 'bell' },
  { name: 'Perfil', icon: <FontAwesome name="user" size={22} color="#6B7280" />, key: 'profile' },
];

export default function BottomTab() {
  const [active, setActive] = useState('profile');

  return (
    <View style={tw`flex-row justify-between px-6 py-3 bg-white`}>
      {tabs.map((tab) => {
        const isActive = tab.key === active;
        return (
          <TouchableOpacity
            key={tab.key}
            onPress={() => setActive(tab.key)}
            style={isActive ? tw`bg-blue-100 px-4 py-2 rounded-xl flex-row items-center` : tw`p-2`}
          >
            <View style={tw`mr-1`}>{tab.icon}</View>
            {isActive && <Text style={tw`text-blue-600 font-semibold`}>{tab.name}</Text>}
          </TouchableOpacity>
        );
      })}
    </View>
  );
}