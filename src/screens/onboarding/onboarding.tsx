import React from 'react';
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { scale, verticalScale } from 'react-native-size-matters';

import { useIsFirstTime } from '@/core/hooks';

export const Onboarding = () => {
  const [_, setIsFirstTime] = useIsFirstTime();
  const inset = useSafeAreaInsets();
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: inset.top,
      }}
    >
      <Text>App</Text>

      <SafeAreaView>
        <TouchableOpacity
          style={{
            backgroundColor: '#000',
            paddingHorizontal: scale(15),
            paddingVertical: verticalScale(5),
            borderRadius: 10,
            elevation: 5,
          }}
          onPress={() => setIsFirstTime(false)}
        >
          <Text style={{ fontWeight: 'bold', color: '#fff' }}>
            Lets Get started
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
};
