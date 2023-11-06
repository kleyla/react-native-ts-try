import { Pressable, StyleSheet, Text } from 'react-native';
import React, { ReactElement } from 'react';

type ButtonColor = 'primary' | 'secondary' | 'success' | 'error';
type ButtonCustomProps = {
  title: string;
  onPress: () => void;
  color?: ButtonColor;
  circle?: boolean;
};

const ButtonCustom = ({
  title,
  onPress,
  color = 'primary',
  circle = false,
}: ButtonCustomProps): ReactElement => {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.button,
        styles[color],
        circle ? styles.circle : styles.common,
      ]}
    >
      <Text>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    elevation: 2,
    backgroundColor: '#F194FF',
  },
  common: {
    padding: 10,
    borderRadius: 20,
  },
  primary: {
    backgroundColor: '#F194FF',
  },
  secondary: {
    backgroundColor: '#2196F3',
  },
  success: {
    backgroundColor: '#F194FF',
  },
  error: {
    backgroundColor: '#F194FF',
  },
  circle: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
  },
});

export type { ButtonColor };
export { ButtonCustom };
