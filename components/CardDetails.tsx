// components/CardDetails.tsx
import React from 'react';
import { View, Text, Image } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { Feather } from '@expo/vector-icons';

interface CardDetailsProps {
  avatarUri?: string;
  name: string;
  specialty: string;
  date: string;
  time: string;
  location: string;
  status: string;
}

const CardDetails: React.FC<CardDetailsProps> = ({
  avatarUri,
  name,
  specialty,
  date,
  time,
  location,
  status,
}) => {
  return (
    <View style={tw`bg-white rounded-2xl p-6 shadow-sm`}>      
      {/* Header */}
      <View style={tw`flex-row items-center mb-6`}>        
        <View style={tw`w-12 h-12 rounded-full bg-blue-200 items-center justify-center mr-4`}>          
          {avatarUri ? (
            <Image source={{ uri: avatarUri }} style={tw`w-12 h-12 rounded-full`} />
          ) : (
            <Feather name="user" size={24} color="#fff" />
          )}
        </View>
        <View>
          <Text style={tw`text-lg font-semibold text-gray-800`}>{name}</Text>
          <Text style={tw`text-sm text-gray-600`}>{specialty}</Text>
        </View>
      </View>

      {/* Divider */}
      <View style={tw`border-b border-gray-200 mb-6`} />

      {/* Details */}
      <View style={tw`space-y-5`}>        
        <View style={tw`flex-row items-center mb-4`}>          
          <Feather name="calendar" size={20} color="#4B5563" style={tw`mr-3`} />
          <Text style={tw`text-base text-gray-700`}>{date}</Text>
        </View>
        <View style={tw`flex-row items-center mb-4`}>          
          <Feather name="clock" size={20} color="#4B5563" style={tw`mr-3`} />
          <Text style={tw`text-base text-gray-700`}>{time}</Text>
        </View>
        <View style={tw`flex-row items-center mb-4`}>          
          <Feather name="map-pin" size={20} color="#4B5563" style={tw`mr-3`} />
          <Text style={tw`text-base text-gray-700 flex-shrink`}>{location}</Text>
        </View>
        <View style={tw`flex-row items-center mb-4`}>          
          <Feather name="check-square" size={20} color="#4B5563" style={tw`mr-3`} />
          <Text style={tw`text-base text-gray-700`}>{status}</Text>
        </View>
      </View>
    </View>
  );
};

export default CardDetails;