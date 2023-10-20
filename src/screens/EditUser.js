import {View, StyleSheet, Alert} from 'react-native';
import React, {useEffect, useState} from 'react';
import {openDatabase} from 'react-native-sqlite-storage';
import {useNavigation, useRoute} from '@react-navigation/native';
import CustomButton from '../components/Button/Button';
import {CustomTextInput} from '../components/TextInput';

let db = openDatabase({name: 'UserDatabase.db'});

const EditUser = () => {
  const route = useRoute();
  console.log(route.params.data);
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState(route.params.data.email);
  const [address, setAddress] = useState(route.params.data.address);
  const updateUser = () => {
    db.transaction(tx => {
      tx.executeSql(
        'UPDATE table_user set name=?, email=? , address=? where user_id=?',
        [name, email, address, route.params.data.id],
        (tx, results) => {
          console.log('Results', results.rowsAffected);
          if (results.rowsAffected > 0) {
            Alert.alert(
              'Success',
              'User updated successfully',
              [
                {
                  text: 'Ok',
                  onPress: () => navigation.navigate('Home'),
                },
              ],
              {cancelable: false},
            );
          } else alert('Updation Failed');
        },
      );
    });
  };
  useEffect(() => {
    setName(route.params.data.name);
    setEmail(route.params.data.email);
    setAddress(route.params.data.address);
  }, []);

  return (
    <View style={styles.container}>
      <CustomTextInput
        placeholder="Enter User Name"
        value={name}
        onChangeText={txt => setName(txt)}
      />
      <CustomTextInput
        placeholder="Enter User Email"
        value={email}
        onChangeText={txt => setEmail(txt)}
        textInputStyle={{marginTop: 20}}
      />
      <CustomTextInput
        placeholder="Enter User Address"
        value={address}
        onChangeText={txt => setAddress(txt)}
        textInputStyle={{marginTop: 20}}
      />

      <CustomButton btnText="Save User" onPress={updateUser} />
    </View>
  );
};

export default EditUser;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    width: '80%',
    height: 50,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'black',
    alignSelf: 'center',
    paddingLeft: 20,
    marginTop: 100,
  },
});
