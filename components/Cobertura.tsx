// components/Cobertura.tsx
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { Feather } from '@expo/vector-icons';

interface CoberturaProps {
  credentialNumber: string;
  obraSocial?: string;
  expiryDate?: string;
  onEditCredential: () => void;
  onEditObraSocial: () => void;
  onEditExpiry: () => void;
}

const Cobertura: React.FC<CoberturaProps> = ({
  credentialNumber,
  obraSocial,
  expiryDate,
  onEditCredential,
  onEditObraSocial,
  onEditExpiry,
}) => {
  return (
    <View style={tw`w-full mt-8 px-4`}>      
      {/* Header */}
      <Text style={tw`text-xl font-semibold text-gray-800 mb-4`}>Mi cobertura</Text>

      {/* Avatar Placeholder */}
      <View style={tw`w-24 h-24 rounded-full bg-blue-200 items-center justify-center self-center mb-6`}>        
        <Feather name="user" size={40} color="#fff" />      
      </View>

      {/* Credential Number Card */}
      <TouchableOpacity
        style={tw`bg-white rounded-2xl p-4 mb-4 flex-row justify-between items-center`}
        onPress={onEditCredential}
      >
        <View>
          <Text style={tw`text-sm text-gray-500`}>Número de credencial</Text>
          <Text style={tw`text-base text-gray-800 mt-1`}>{credentialNumber}</Text>
        </View>
        <Feather name="edit-2" size={20} color="#4B5563" />
      </TouchableOpacity>

      {/* Obra Social Card */}
      <TouchableOpacity
        style={tw`bg-white rounded-2xl p-4 mb-4 flex-row justify-between items-center`}
        onPress={onEditObraSocial}
      >
        <View>
          <Text style={tw`text-sm text-gray-500`}>Obra social</Text>
          <Text style={tw`text-base text-gray-800 mt-1`}>{obraSocial || 'Ingrese su obra social'}</Text>
        </View>
        <Feather name="edit-2" size={20} color="#4B5563" />
      </TouchableOpacity>

      {/* Expiry Date Card */}
      <TouchableOpacity
        style={tw`bg-white rounded-2xl p-4 mb-4 flex-row justify-between items-center`}
        onPress={onEditExpiry}
      >
        <View>
          <Text style={tw`text-sm text-gray-500`}>Fecha de vencimiento</Text>
          <Text style={tw`text-base text-gray-800 mt-1`}>{expiryDate || 'Ingrese la fecha de vencimiento'}</Text>
        </View>
        <Feather name="edit-2" size={20} color="#4B5563" />
      </TouchableOpacity>
    </View>
  );
};

export default Cobertura;