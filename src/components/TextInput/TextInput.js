import React from 'react';

import {View, TextInput, StyleSheet} from 'react-native';

export const CustomTextInput = ({
  placeholder,
  secureTextEntry,
  textInputStyle,
  keyboardType,
  value,
  onChangeText,
  onBlur,
}) => {
  return (
    <View style={[styles.container, textInputStyle]}>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        onBlur={onBlur}
        placeholder={placeholder}
        placeholderTextColor={'gray'}
        style={styles.input}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    width: '80%',
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 5,
    alignSelf:'center',
    marginTop:100,
  },
  input: {
    fontSize: 16,
    color: '#000',
  },

});
