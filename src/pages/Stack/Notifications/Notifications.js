import {View, Text} from 'react-native';
import React from 'react';

//components
import SwitchButton from '../../../components/Switch';
//styles
import styles from './Notifications.style';

const Notifications = () => {
  return (
    <View style={styles.container}>
      <Text>App</Text>
      <SwitchButton />
    </View>
  );
};

export default Notifications;
