import { SafeAreaView, View, Text, ScrollView } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import AppointmentCard from './components/AppointmentCard';
import BottomTab from './components/BottomTab';
import NotificationCard from './components/NotificationCard';

export default function App() {
  return (
    <SafeAreaView style={tw`flex-1 bg-gray-100`}>
      <View style={tw`flex-1`}>
        <ScrollView contentContainerStyle={tw`items-center py-6 px-4 mt-10`}>
      

          <AppointmentCard
            name="Juan Perez"
            service="Atención médica"
            date="2023-01-01"
            time="10:00"
          />
            <NotificationCard
    title="Turno cancelado"
    date="Viernes, 11 de abril"
    time="11:00 – 12:00 AM"
    onPress={() => console.log('Ver detalle')}
  />
        </ScrollView>

        {/* Padding extra para evitar que tape el SO */}
        <View style={tw`pb-10`}>
          <BottomTab />
        </View>
      </View>
    </SafeAreaView>
  );
}