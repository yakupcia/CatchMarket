import {
  Text,
  SafeAreaView,
  View,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import styles from './SettingsPage.style';
import { SaveButton, SettingsItem } from '../../../components';
import ActionSheet from 'react-native-actions-sheet';
const SettingsPage = () => {
  const ref = React.useRef();

  const [lang, setLang] = React.useState('en');

  const openChangeLanguage = () => ref.current?.show();

  const changeLanguage = language => setLang(language);

  const DATA = [
    {
      icon: {
        name: 'user',
        type: 'ant',
      },
      name: 'Profile settings',
    },
    {
      icon: {
        name: 'list',
        type: 'entypo',
      },
      name: 'Orders',
    },
    {
      icon: {
        name: 'inbox',
        type: 'ant',
      },
      name: 'Parcels',
    },
    {
      icon: {
        name: 'inbox',
        type: 'ant',
      },
      name: 'Notifications',
    },
    {
      icon: {
        name: 'inbox',
        type: 'ant',
      },
      name: 'Order history',
    },
    {
      icon: {
        name: 'inbox',
        type: 'ant',
      },
      name: 'Parcel history',
    },
    {
      icon: {
        name: 'inbox',
        type: 'ant',
      },
      name: 'Income',
    },
    {
      icon: {
        name: 'inbox',
        type: 'ant',
      },
      name: 'Language',
      onPress: openChangeLanguage,
    },
    {
      icon: {
        name: 'inbox',
        type: 'ant',
      },
      name: 'Logout',
    },
  ];

  const renderItem = ({ item }) => <SettingsItem item={item} />;

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ padding: 20 }}>
        <View style={styles.headerContainer}>
          <Image
            source={{
              uri: 'https://media.licdn.com/dms/image/C4E03AQGI3Yajw9uNfg/profile-displayphoto-shrink_400_400/0/1644958600050?e=2147483647&v=beta&t=cc3MFAIbyKpgtybbaKWP6cVkpbjht8fhBkiIfEUZSs0',
            }}
            style={styles.image}
          />
          <View>
            <Text style={styles.title}>Yakup KÖK</Text>
            <Text style={styles.number}>123456789</Text>
          </View>
        </View>
      </View>

      <FlatList data={DATA} renderItem={renderItem} />

      <ActionSheet ref={ref} containerStyle={styles.actionContainer}>
        <Text style={styles.title}>Language</Text>
        <TouchableOpacity
          onPress={() => changeLanguage('en')}
          style={styles.langContainer}>
          <View style={[styles.radio, lang === 'en' && styles.activeRadio]} />
          <Text>English</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => changeLanguage('tr')}
          style={styles.langContainer}>
          <View style={[styles.radio, lang === 'tr' && styles.activeRadio]} />
          <Text>Turkish</Text>
        </TouchableOpacity>
        <SaveButton />
      </ActionSheet>
    </SafeAreaView>
  );
};

export default SettingsPage;
