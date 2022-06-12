import React from 'react';
import {SafeAreaView, StatusBar, useColorScheme, View} from 'react-native';

import {FiveDaysForecast} from 'app/components/FiveDaysForecast';

export const MainScreen = () => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <SafeAreaView>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View>
        <FiveDaysForecast />
      </View>
    </SafeAreaView>
  );
};
