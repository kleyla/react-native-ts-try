import { ButtonCustom } from '@components/ButtonCustom';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '@config/AppNavigator';
import { TextField } from '@components/TextField';
import { showModal } from '@context/modalSlice';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import React, { ReactElement, useState } from 'react';
import { StyleSheet, View } from 'react-native';

const initialValues = {
  user: '',
  pass: '',
};

const Login = (): ReactElement => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [form, setForm] = useState(initialValues);
  const dispatch = useDispatch();
  const handleInput = (key: string, value: string) => {
    setForm(prev => ({ ...prev, [key]: value }));
  };

  const onSubmit = () => {
    if (validations()) {
      navigation.navigate('Profile', { user: form.user });
    } else {
      dispatch(showModal({ text: 'Datos incorrectos' }));
    }
  };

  const validations = () => {
    return form.user === 'Karen' && form.pass === '1234';
  };

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <TextField
          inputKey="user"
          label="User"
          value={form.user}
          onChange={handleInput}
        />
        <TextField
          inputKey="pass"
          label="Password"
          value={form.pass}
          onChange={handleInput}
        />

        <ButtonCustom title="Ingresar" onPress={onSubmit} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 16,
  },
  box: {
    borderRadius: 8,
    padding: 16,
    backgroundColor: '#fff',
    minWidth: '80%',
  },
});

export { Login };
