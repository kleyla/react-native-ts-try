import { Modal, Pressable, StyleSheet, Text, View } from 'react-native';
import React, { PropsWithChildren, ReactElement } from 'react';

type ModalCustomProps = {
  isVisible: boolean;
  onClose: () => void;
};

const ModalCustom = ({
  isVisible,
  onClose,
  children,
}: ModalCustomProps & PropsWithChildren): ReactElement => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Pressable style={styles.buttonClose} onPress={onClose}>
            <Text>x</Text>
          </Pressable>

          {children}
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonClose: {
    marginTop: -30,
    marginRight: -30,
    borderRadius: 50,
    height: 24,
    width: 24,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-end',
  },
});

export { ModalCustom };
