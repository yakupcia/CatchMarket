import {View, Text, TouchableOpacity} from 'react-native';
import React, {useRef} from 'react';
import styles from './ActionSheet.style';

const ActionSheet = ({titleHeaderShown, onPressTouchOpa, buttonTitle}) => {
  const actionSheetRef = useRef();

  // Action Sheet'i açan fonksiyon
  const openActionSheet = () => {
    actionSheetRef.current?.show();
  };
  return (
    <ActionSheet ref={actionSheetRef} style={styles.btn}>
      <View style={styles.ActionSheet}>
        <Text style={styles.title}>{titleHeaderShown}</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.ActionButton}
            onPress={onPressTouchOpa}>
            <Text style={styles.text}>{buttonTitle}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ActionSheet>
  );
};

export default ActionSheet;
