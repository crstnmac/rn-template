import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const Dashboard = () => {
  const inset = useSafeAreaInsets();

  return (
    <ScrollView style={{ flex: 1 }}>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          paddingTop: inset.top,
        }}
      >
        <Text>Dashboard</Text>
      </View>
    </ScrollView>
  );
};
