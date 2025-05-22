import React from 'react';
import { View, Text } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { Feather } from '@expo/vector-icons';

const UpdateSuccess: React.FC = () => (
  <View style={tw`flex-1 justify-center items-center bg-gray-100 p-4`}>
    <View style={tw`bg-white rounded-2xl shadow-lg p-6 w-full max-w-sm items-center`}>
      <View style={tw`w-20 h-20 rounded-full bg-blue-300 items-center justify-center mb-6`}>
        <Feather name="check" size={40} color="white" />
      </View>
      <Text style={tw`text-xl font-semibold text-gray-800 mb-2 text-center`}>
        Actualización completada
      </Text>
      <Text style={tw`text-base text-gray-600 text-center`}>
        Podras ver la información actualizada desde ahora en tu perfil.
      </Text>
    </View>
  </View>
);

export default UpdateSuccess;