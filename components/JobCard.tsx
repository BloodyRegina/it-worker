import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { jobs } from 'data/jobs';

const JobCard = () => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="mb-3 rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
      <Text className="mb-1 text-lg font-bold text-gray-800">{jobs.title}</Text>
      <Text className="mb-3 text-sm text-gray-600">{jobs.company}</Text>

      <View className="mb-3 flex-row flex-wrap gap-2">
        <View className="rounded-full bg-blue-100 px-3 py-1">
          <Text className="text-xs font-medium text-blue-700">{jobs.location}</Text>
        </View>
        <View className="rounded-full bg-green-100 px-3 py-1">
          <Text className="text-xs font-medium text-green-700">{jobs.type}</Text>
        </View>
      </View>

      <Text className="text-sm font-semibold text-orange-600">💰 {jobs.salary}</Text>
    </TouchableOpacity>
  );
};

export default JobCard;
