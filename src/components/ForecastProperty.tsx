import {round} from 'mathjs';
import React from 'react';
import {Image, ImageSourcePropType, StyleSheet, Text, View} from 'react-native';

export interface Props {
  imgSrc?: ImageSourcePropType;
  value: string | number;
  unit?: string;
}

export const ForecastProperty: React.FC<Props> = ({imgSrc, value, unit}) => {
  return (
    <View style={styles.item}>
      {imgSrc && <Image source={imgSrc} style={styles.image} />}
      <Text>
        {typeof value === 'number' ? round(value) : value}
        {unit}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    width: '20%',
    height: 68,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 24,
    height: 24,
    margin: 12,
  },
});
