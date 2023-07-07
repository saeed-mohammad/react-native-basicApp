import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
  Linking,
} from 'react-native';
import React from 'react';

const About = ({navigation}) => {
  return (
    <View style={styles.aboutContainer}>
      <View style={styles.heading}>
        <Text style={styles.heading_title}> Welcome </Text>
        <Text style={styles.heading_desc}>Lorem ipsum dolor sit amet.</Text>
      </View>
      <View style={styles.imgContainer}>
        <Image
          style={styles.img}
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
          }}
        />
      </View>
      <View style={styles.about}>
        <Text style={styles.about_heading}>About Me</Text>
        <Text style={styles.about_desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quae
          vel quibusdam error repellat omnis, officia ab dicta hic, numquam
          velit odit voluptate inventore eos non. Dolores a facere earum!
        </Text>
      </View>
      <View style={styles.social}>
        <Text style={styles.social_heading}>Follow me on social network</Text>

        <View style={styles.social_iconContainer}>
          <TouchableOpacity
            onPress={() => Linking.openURL('https://www.google.com/')}>
            <Image
              style={styles.social_icon}
              source={{
                uri: 'https://cdn.pixabay.com/photo/2016/08/09/17/52/instagram-1581266_640.jpg',
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => Linking.openURL('https://www.google.com/')}>
            <Image
              style={styles.social_icon}
              source={{
                uri: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/800px-Facebook_f_logo_%282021%29.svg.png',
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => Linking.openURL('https://www.google.com/')}>
            <Image
              style={styles.social_icon}
              source={{
                uri: 'https://play-lh.googleusercontent.com/lMoItBgdPPVDJsNOVtP26EKHePkwBg-PkuY9NOrc-fumRtTFP4XhpUNk_22syN4Datc',
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default About;

const styles = StyleSheet.create({
  aboutContainer: {
    marginTop: 40,
  },
  heading: {
    alignItems: 'center',
  },
  heading_title: {
    fontSize: 28,
    marginBottom: 5,
    color: 'black',
    textTransform: 'capitalize',
  },
  heading_desc: {
    fontSize: 15,
  },
  imgContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  img: {
    width: 250,
    aspectRatio: 1,
  },
  about: {
    backgroundColor: 'lime',
    padding: 20,
  },
  about_heading: {
    textAlign: 'center',
    fontSize: 22,
    color: 'black',
    marginVertical: 10,
  },
  about_desc: {},
  social: {
    marginTop: 20,
  },
  social_heading: {
    textAlign: 'center',
    fontSize: 20,
  },
  social_iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  social_icon: {
    width: 40,
    aspectRatio: 1,
    marginHorizontal: 20,
    marginTop: 15,
  },
});
