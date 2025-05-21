import { View, Text, TouchableOpacity } from 'react-native';
import { FontAwesome, Feather } from '@expo/vector-icons';
import tw from 'tailwind-react-native-classnames';

export interface AppointmentCardProps {
  name: string;
  service: string;
  date: string;
  time: string;
  onPress?: () => void;
}

export default function AppointmentCard({
  name,
  service,
  date,
  time,
  onPress,
}: AppointmentCardProps) {
  const Container = onPress ? TouchableOpacity : View;

  return (
    <Container
      onPress={onPress}
      style={tw`bg-blue-400 rounded-2xl px-5 py-4 mx-4 mb-4 w-full`}
      activeOpacity={0.8}
    >
      {/* Encabezado */}
      <View style={tw`flex-row items-center justify-between`}>
        <View style={tw`flex-row items-center`}>
          <View style={tw`bg-blue-100 rounded-full h-12 w-12 items-center justify-center mr-3`}>
            <FontAwesome name="user" size={24} color="#3B82F6" />
          </View>
          <View>
            <Text style={tw`text-white font-bold text-base`}>{name}</Text>
            <Text style={tw`text-white text-sm`}>{service}</Text>
          </View>
        </View>
        <Feather name="chevron-right" size={24} color="white" />
      </View>

      {/* Separador */}
      <View style={tw`border-t border-blue-300 my-3`} />

      {/* Pie: fecha y hora */}
      <View style={tw`flex-row items-center justify-between`}>
        <View style={tw`flex-row items-center`}>
          <Feather name="calendar" size={16} color="white" />
          <Text style={tw`text-white text-sm ml-2`}>{date}</Text>
        </View>
        <View style={tw`flex-row items-center`}>
          <Feather name="clock" size={16} color="white" />
          <Text style={tw`text-white text-sm ml-2`}>{time}</Text>
        </View>
      </View>
    </Container>
  );
}