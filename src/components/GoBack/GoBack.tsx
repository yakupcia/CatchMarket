import {View, TouchableOpacity, Text} from 'react-native';
import React from 'react';
import Icon from '../Icon';
// import type {  IGoBackProps } from './Goback.type';
import styles from './GoBack.style';

const GoBack = ({navigation}) => {
  const goBack = () => {
    navigation.goBack(); //last page
  };

  return (
    <TouchableOpacity onPress={goBack} style={styles.container}>
      <Icon name="chevron-back" type="ion" color="white" />
    </TouchableOpacity>
  );
};

export default GoBack;
