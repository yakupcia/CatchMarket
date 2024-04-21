import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './Save.style';

const SaveButton = props => {
  const {onPress} = props;

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}>Save</Text>
    </TouchableOpacity>
  );
};

export default SaveButton;
