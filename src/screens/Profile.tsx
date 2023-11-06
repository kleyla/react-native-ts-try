import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '@config/index';
import { ButtonCustom, ModalCustom, Space } from '@components/index';
import React, { ReactElement, useState } from 'react';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';

const Profile = (): ReactElement => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const route = useRoute<RouteProp<RootStackParamList, 'Profile'>>();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [counter, setCounter] = useState(0);

  const closeModal = () => {
    setIsModalVisible(false);
  };

  return (
    <View style={styles.centeredView}>
      <Text>Hola {route.params.user}</Text>

      <Text>Contador {counter}</Text>
      <ModalCustom isVisible={isModalVisible} onClose={closeModal}>
        <Text style={styles.modalText}>Contador</Text>
        <View style={styles.row}>
          <ButtonCustom
            onPress={() => setCounter(prev => prev - 1)}
            title="-"
            circle={true}
          />
          <View style={styles.mr1} />
          <ButtonCustom
            onPress={() => setCounter(prev => prev + 1)}
            title="+"
            circle={true}
          />
        </View>
      </ModalCustom>

      <ButtonCustom
        onPress={() => setIsModalVisible(!isModalVisible)}
        title="Open modal"
      />
      <Space />
      <ButtonCustom
        onPress={() => navigation.navigate('Home')}
        title="Go Home"
        color="secondary"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    alignItems: 'center',
    marginTop: 22,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  mr1: {
    marginRight: 8,
  },
});

export { Profile };
