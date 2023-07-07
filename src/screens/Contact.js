import {
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';

import React, {useState} from 'react';

const Contact = ({navigation}) => {
  const [Name, setName] = useState('');
  const [Email, setEmail] = useState('');
  const [Mobile, setMobile] = useState('');
  const [Message, setMessage] = useState('');

  const submit = () => {
    // if (Name === '' || Email === '' || Mobile === '' || Message === '') {
    if (!Name || !Email || !Mobile || !Message) {
      Alert.alert('Fill all the fields');
    } else {
      Alert.alert(`Thank You, ${Name}`);
      navigation.navigate('Home');
    }
  };
  return (
    <ScrollView style={styles.contact}>
      <View style={styles.contact_info}>
        <Text style={styles.contact_infoHeading}>Contact Us</Text>
        <Text style={styles.contact_infoDetails}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad ratione
          dolorum cumque officia possimus!
        </Text>
      </View>
      <View style={styles.contact_form}>
        <View style={styles.contact_formContent}>
          <Text style={styles.contact_formLabel}>Enter Your Name</Text>
          <TextInput
            style={styles.contact_input}
            onChangeText={user => setName(user)}
            value={Name}
          />
        </View>
        <View style={styles.contact_formContent}>
          <Text style={styles.contact_formLabel}>Enter Your Email</Text>
          <TextInput
            style={styles.contact_input}
            onChangeText={eml => setEmail(eml)}
            value={Email}
          />
        </View>
        <View style={styles.contact_formContent}>
          <Text style={styles.contact_formLabel}>Enter Your Mobile</Text>
          <TextInput
            style={styles.contact_input}
            onChangeText={mob => setMobile(mob)}
            value={Mobile}
          />
        </View>
        <View style={styles.contact_formContent}>
          <Text style={styles.contact_formLabel}>How can we help you?</Text>
          <TextInput
            numberOfLines={4}
            style={styles.contact_input}
            onChangeText={msg => setMessage(msg)}
            value={Message}
            multiline={true}
          />
        </View>

        <TouchableOpacity onPress={() => submit()}>
          <Text style={styles.btn}>Countact Us</Text>
        </TouchableOpacity>
        {/*
        <View style={styles.contact_formContent}>
          <Text style={styles.contact_formLabel}>How can we help you?</Text>
          <TextInput
            numberOfLines={4}
            style={styles.contact_input}
            onChangeText={setMessage}
            value={Message}
            multiline={true}
          />
        </View>
        <View style={styles.contact_formContent}>
          <Text style={styles.contact_formLabel}>How can we help you?</Text>
          <TextInput
            numberOfLines={4}
            style={styles.contact_input}
            onChangeText={setMessage}
            value={Message}
            multiline={true}
          />
        </View>
        */}
      </View>
    </ScrollView>
  );
};
export default Contact;

const styles = StyleSheet.create({
  contact: {
    paddingHorizontal: 25,
    paddingTop: 20,
    backgroundColor: '#fff',
    minHeight: '100%',
  },
  contact_info: {
    marginBottom: 40,
  },
  contact_infoHeading: {
    color: 'black',
    fontSize: 25,
    marginBottom: 10,
  },
  contact_infoDetails: {
    fontSize: 15,
  },
  contact_formContent: {
    marginBottom: 15,
  },
  contact_formLabel: {
    color: 'black',
    marginBottom: 2,
    fontSize: 15,
  },
  contact_input: {
    borderWidth: 1,
    fontSize: 20,
    paddingHorizontal: 10,
  },
  btn: {
    backgroundColor: 'green',
    padding: 10,
    textAlign: 'center',
    fontSize: 20,
    marginTop: 15,
  },
});
