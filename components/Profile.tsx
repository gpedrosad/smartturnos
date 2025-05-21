// components/Profile.tsx
import React, { FC } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { Feather } from '@expo/vector-icons';

interface MenuItemProps {
  label: string;
  onPress?: () => void;
}

const MenuItem: FC<MenuItemProps> = ({ label, onPress }) => (
  <TouchableOpacity
    onPress={onPress}
    style={tw`w-full bg-white rounded-xl py-4 px-6 mb-3 flex-row items-center justify-between shadow`}
  >
    <Text style={tw`text-base text-gray-800`}>{label}</Text>
    <Feather name="chevron-right" size={20} color="#6B7280" />
  </TouchableOpacity>
);

const Profile: FC = () => (
  <View style={tw`items-center pt-10 px-4 mb-64`}>
    <Text style={tw`text-2xl font-semibold text-gray-800 mb-6`}>Perfil</Text>

    <View style={tw`w-32 h-32 rounded-full bg-blue-100 items-center justify-center mb-8`}>
      <Image
        source={require('../assets/adaptive-icon.png')}
        style={tw`w-16 h-16`}
        resizeMode="contain"
      />
    </View>

    <View style={tw`w-full`}>
      <MenuItem label="Mis datos" onPress={() => console.log('Mis datos')} />
      <MenuItem label="Mi cobertura médica" onPress={() => console.log('Mi cobertura médica')} />
      <MenuItem label="Mis turnos" onPress={() => console.log('Mis turnos')} />
    </View>
  </View>
);

export default Profile;