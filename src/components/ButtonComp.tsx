import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

interface buttonComp {
  isDisable?: boolean;
  buttonTitle: string;
  onPress: () => void;
}

const ButtonComp = ({buttonTitle, onPress, isDisable}: buttonComp) => {
  return (
    <TouchableOpacity
      style={[
        styles.buttonStyle,
        {backgroundColor: isDisable ? 'lightblue' : 'blue'},
      ]}
      onPress={onPress}
      disabled={isDisable}>
      <Text style={styles.buttonTextStyle}>{buttonTitle}</Text>
    </TouchableOpacity>
  );
};

export default ButtonComp;

const styles = StyleSheet.create({
  buttonStyle: {
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonTextStyle: {
    color: 'white',
  },
});
