import { ButtonCustom } from '@components/index';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '@config/index';
import { useNavigation } from '@react-navigation/native';
import React, { ReactElement } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Home = (): ReactElement => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <View style={styles.centeredView}>
      <Text>Home</Text>
      <ButtonCustom
        onPress={() => navigation.navigate('Profile', { user: 'hola' })}
        title="Go Profile"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    alignItems: 'center',
  },
});

export { Home };
