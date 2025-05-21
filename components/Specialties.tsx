// components/Specialties.tsx
import React, { FC } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { Feather } from '@expo/vector-icons';

interface SpecialtiesProps {
  items: string[];
  onPressItem?: (specialty: string) => void;
  onBack?: () => void;
}

const Specialties: FC<SpecialtiesProps> = ({
  items,
  onPressItem = () => {},
  onBack = () => {},
}) => (
  <View style={tw`flex-1 bg-gray-100`}>
    {/* Header */}
    <View style={tw`flex-row items-center px-4 pt-10 pb-6`}>
      <TouchableOpacity onPress={onBack} style={tw`p-2`}>
        <Feather name="arrow-left" size={24} color="#1F2937" />
      </TouchableOpacity>
      <Text style={tw`flex-1 text-center text-2xl font-semibold text-gray-800`}>
        Especialidades
      </Text>
      <View style={tw`w-8`} />
    </View>

    {/* Scrollable list */}
    <ScrollView
      contentContainerStyle={tw`px-4 pb-6`}
      showsVerticalScrollIndicator={false}
    >
      {items.map(label => (
        <TouchableOpacity
          key={label}
          onPress={() => onPressItem(label)}
          style={tw`w-full bg-white rounded-xl py-4 px-6 mb-3 flex-row items-center justify-between shadow`}
        >
          <Text style={tw`text-base text-gray-800`}>{label}</Text>
          <Feather name="chevron-right" size={20} color="#6B7280" />
        </TouchableOpacity>
      ))}
    </ScrollView>
  </View>
);

export default Specialties;