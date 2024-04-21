import {View, Text} from 'react-native';
import * as React from 'react';
import styles from './Switch.style';

//3th party
import {Switch} from 'react-native-paper';

const SwitchButton = ({SwitchText}) => {
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);

  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
  return (
    <View style={styles.container}>
      <Switch
        value={isSwitchOn}
        onValueChange={onToggleSwitch}
        style={styles.Switch}
      />
      <Text>{SwitchText}</Text>
    </View>
  );
};

export default SwitchButton;
