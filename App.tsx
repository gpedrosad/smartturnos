// App.tsx
import React from 'react';
import { SafeAreaView, View, ScrollView } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import AppointmentCard from './components/AppointmentCard';
import NotificationCard from './components/NotificationCard';
import Profile from './components/Profile';
import Especialidades from './components/Specialties';
import Cobertura from './components/Cobertura';
import CardDetails from './components/CardDetails';
import UpdateSuccess from './components/UpdateSuccess';
import BottomTab from './components/BottomTab';

const especialidadesList = [
  'Alergia e Inmunología',
  'Cardiología',
  'Cirugía',
  'Clínica',
  'Dermatología',
  'Endocrinología',
  'Gastroenterología',
  'Oftalmología',
  'Ginecología',
];

export default function App() {
  return (
    <SafeAreaView style={tw`flex-1 bg-gray-100`}>
      <View style={tw`flex-1`}>
        <ScrollView
          style={tw`flex-1`}
          contentContainerStyle={[tw`items-center py-6 px-4 mt-10`, { flexGrow: 1 }]}
          showsVerticalScrollIndicator={false}
        >
          {/* Ejemplos de Cards */}
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

          {/* CardDetails ejemplo */}
          <View style={tw`w-full mt-8`}>
            <CardDetails
              name="Anastasia López"
              specialty="Oftalmología"
              date="Martes, 3 de octubre"
              time="11:00 – 12:00 AM"
              location="Tres de febrero 2345, Belgrano"
              status="Disponible"
            />
          </View>

          {/* Sección de Perfil dentro del scroll */}
          <View style={tw`w-full mt-8`}>
            <Profile />
          </View>

          {/* Componente Cobertura */}
          <View style={tw`w-full mt-8`}>
            <Cobertura
              credentialNumber="800006 7486591 02 0010"
              obraSocial=""
              expiryDate=""
              onEditCredential={() => console.log('Editar credencial')}
              onEditObraSocial={() => console.log('Editar obra social')}
              onEditExpiry={() => console.log('Editar fecha de vencimiento')}
            />
          </View>

          {/* Mensaje de éxito tras actualizar */}
          <View style={tw`w-full mt-8`}>
            <UpdateSuccess />
          </View>

          {/* Sección de Especialidades */}
          <View style={tw`w-full mt-8 mb-8`}>
            <Especialidades
              items={especialidadesList}
              onBack={() => console.log('Volver')}
              onPressItem={(esp) => console.log('Seleccionó:', esp)}
            />
          </View>
        </ScrollView>

        {/* BottomTab fijo en la parte inferior */}
        <View style={tw`pb-4 bg-white`}>
          <BottomTab />
        </View>
      </View>
    </SafeAreaView>
  );
}