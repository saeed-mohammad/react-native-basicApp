import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import Menu from '../components/Menu';

const Home = props => {
  return (
    <View style={styles.container}>
      <View>
        <Image
          style={styles.img}
          source={{
            uri: 'https://fastly.picsum.photos/id/9/5000/3269.jpg?hmac=cZKbaLeduq7rNB8X-bigYO8bvPIWtT-mh8GRXtU3vPc',
          }}
        />
      </View>
      <View style={styles.heading}>
        <Text style={[styles.txt, {color: 'green'}]}>Welocome To </Text>
        <Text style={styles.txt}>{props.Name}</Text>
        <Text style={styles.para}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique,
          in deleniti! Expedita possimus placeat earum ut facilis architecto
          minima incidunt?
        </Text>
      </View>
      <View style={styles.navigation}>
        <Menu />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  img: {
    width: '100%',
    aspectRatio: 1,
    borderRadius: 20,
  },
  heading: {
    paddingVertical: 15,
  },
  txt: {
    fontSize: 35,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  para: {
    fontSize: 18,
    marginTop: 15,
  },
  navigation: {
    marginTop: 30,
  },
});
