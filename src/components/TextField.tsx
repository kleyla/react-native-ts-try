import React, { ReactElement } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

type TextFieldProps = {
  label: string;
  inputKey: string;
  value: string;
  onChange: (inputKey: string, value: string) => void;
};

const TextField = ({
  label,
  value,
  inputKey,
  onChange,
}: TextFieldProps): ReactElement => {
  return (
    <View style={styles.constainer}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        value={value}
        onChange={event => onChange(inputKey, event.nativeEvent.text)}
        style={styles.textInput}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  constainer: {
    marginBottom: 4,
    marginTop: 4,
  },
  label: {
    marginBottom: 2,
  },
  textInput: {
    borderRadius: 10,
    height: 40,
    borderWidth: 1,
    padding: 10,
  },
});

export { TextField };
