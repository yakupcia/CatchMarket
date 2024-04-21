import {Text, TouchableOpacity} from 'react-native';
import React from 'react';

//styles
import styles from './SettingsItem.style';
import Icon from '../Icon';

const Settings = ({item}) => {
  return (
    <TouchableOpacity onPress={item.onPress} style={styles.container}>
      <Icon {...item.icon} />
      <Text style={styles.title}>{item.name}</Text>
    </TouchableOpacity>
  );
};

export default Settings;
