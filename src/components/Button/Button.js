import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const CustomButton = ({
  btnStyle = {},
  btnText,
  isDisable = false,
  onPress,
  textStyle = {},
  testId,
}) => {
  return (
    <TouchableOpacity
      testID={testId}
      disabled={isDisable}
      onPress={onPress}
      style={{
        ...styles.btnStyle,
        ...btnStyle,
      }}>
      <Text
        style={{
          ...styles.btnText,
          ...textStyle,
        }}>
        {btnText}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  btnStyle: {
    backgroundColor: 'blue',
    width: '80%',
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    alignSelf: 'center',
  },
  btnText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
});
