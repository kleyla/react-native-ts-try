import { ButtonCustom } from './ButtonCustom';
import type { RootState } from '../context/store';
import { closeModal } from '@context/modalSlice';
import { Modal, Pressable, StyleSheet, Text, View } from 'react-native';
import React, { ReactElement } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const ModalBase = (): ReactElement => {
  const { isOpen, text, btnLabel } = useSelector(
    (state: RootState) => state.modal,
  );
  const dispatch = useDispatch();
  const onClose = () => {
    dispatch(closeModal());
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isOpen}
      onRequestClose={onClose}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Pressable style={styles.buttonClose} onPress={onClose}>
            <Text>x</Text>
          </Pressable>
          <Text>{text}</Text>
          <ButtonCustom title={btnLabel} onPress={onClose} />
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

export { ModalBase };
