import { View, Text, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import tw from 'tailwind-react-native-classnames';

export interface NotificationCardProps {
  title: string;
  date: string;
  time: string;
  onPress?: () => void;
}

export default function NotificationCard({
  title,
  date,
  time,
  onPress,
}: NotificationCardProps) {
  return (
    <View style={tw`bg-white rounded-2xl p-4 mb-4 w-full shadow-sm`}>
      {/* Título */}
      <Text style={tw`text-base font-semibold text-gray-800`}>{title}</Text>

      {/* Separador */}
      <View style={tw`border-t border-gray-200 my-3`} />

      {/* Fecha y hora */}
      <View style={tw`flex-row items-center justify-between mb-3`}>
        <View style={tw`flex-row items-center`}>
          <Feather name="calendar" size={16} color="#4B5563" />
          <Text style={tw`text-gray-700 text-sm ml-2`}>{date}</Text>
        </View>
        <View style={tw`flex-row items-center`}>
          <Feather name="clock" size={16} color="#4B5563" />
          <Text style={tw`text-gray-700 text-sm ml-2`}>{time}</Text>
        </View>
      </View>

      {/* Botón */}
      <TouchableOpacity
        onPress={onPress}
        style={tw`bg-blue-100 py-2 rounded-xl items-center`}
        activeOpacity={0.8}
      >
        <Text style={tw`text-blue-600 font-medium`}>Ver detalle</Text>
      </TouchableOpacity>
    </View>
  );
}