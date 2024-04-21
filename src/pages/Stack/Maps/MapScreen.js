import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import MapView from 'react-native-maps';
import styles from './MapScreen.style';
import {FinanceWidget} from './components';

function MapScreen({navigation}) {
  const navigateToSettings = () => {
    navigation.navigate('SettingsScreen');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={navigateToSettings}
        style={styles.imageContainer}>
        <Image
          source={{
            uri: 'https://media.licdn.com/dms/image/C4E03AQGI3Yajw9uNfg/profile-displayphoto-shrink_400_400/0/1644958600050?e=2147483647&v=beta&t=cc3MFAIbyKpgtybbaKWP6cVkpbjht8fhBkiIfEUZSs0',
          }}
          style={styles.image}
        />
      </TouchableOpacity>
      <MapView
        style={styles.container}
        initialRegion={{
          latitude: 41.0391683,
          longitude: 28.9982707,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      />
      <FinanceWidget />
    </View>
  );
}

export default MapScreen;
