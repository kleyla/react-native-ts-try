import React, { ReactElement } from 'react';
import { StyleSheet, View } from 'react-native';

type Heights = 'space1' | 'space2';
type SpaceProps = {
  height?: Heights;
};

const Space = ({ height = 'space1' }: SpaceProps): ReactElement => {
  return <View style={styles[height]} />;
};

const styles = StyleSheet.create({
  space1: {
    height: 8,
  },
  space2: {
    height: 16,
  },
});

export { Space };
