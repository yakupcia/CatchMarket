import React, { useState } from 'react';
import { View, TextInput, Text } from 'react-native';
import margin from '../../styles/margin';

const PhoneNumberInput = () => {
  const [phoneNumber, setPhoneNumber] = useState('');

  const formatPhoneNumber = (input) => {

    const regex = /^0(\d{0,3})?(\d{0,3})?(\d{0,4})?$/;

    if (regex.test(input)) {
      const formattedInput = input.replace(/^0(\d{0,3})?(\d{0,3})?(\d{0,4})?$/,'0($1)$2$3');
      setPhoneNumber(formattedInput);
    }
  };
    const formattedNumber = text => {
        const formattedText = text.replace(/[^0-9]/g, '');
        console.log(formattedText);
        formatPhoneNumber(formattedText);
    }

  return (
    <View>
      <Text style={{margin: 10}}>Girilen Telefon Numarası: {phoneNumber}</Text>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, padding: 10, marginHorizontal: 10,}}
        onChangeText={formattedNumber}
        value={phoneNumber}
        placeholder="0(xxx) xxx-xxxx"
        keyboardType="phone-pad"
        maxLength={15}
      />
    </View>
  );
};

export default PhoneNumberInput;