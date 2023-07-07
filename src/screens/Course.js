import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import {courses} from '../../api/Courses';
import React from 'react';

const Course = () => {
  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={key => {
          return key.id;
        }}
        data={courses}
        renderItem={({item}) => {
          return (
            <View style={styles.card}>
              <View style={styles.imgContainer}>
                <Image
                  style={styles.img}
                  source={{
                    uri: `${item.image}`,
                  }}
                />
              </View>
              <View style={styles.info}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.desc}>{item.description}</Text>
              </View>
              <View style={styles.btnContainer}>
                <TouchableOpacity onPress={() => console.log('click')}>
                  <Text style={styles.btn}>Click</Text>
                </TouchableOpacity>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

export default Course;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    backgroundColor: '#eee',
  },
  card: {
    marginVertical: 20,
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    shadowColor: 'grey',
    shadowOffset: {width: 5, height: 5},
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
  imgContainer: {},
  img: {
    width: '100%',
    aspectRatio: 1,
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    color: 'black',
    textTransform: 'uppercase',
    marginVertical: 10,
  },
  desc: {
    padding: 10,
  },
  btnContainer: {
    alignItems: 'center',
  },
  btn: {
    textTransform: 'uppercase',
    textAlign: 'center',
    backgroundColor: '#554BE7',
    width: 200,
    margin: 'auto',
    padding: 10,
    marginBottom: 10,
    fontWeight: 'bold',
    borderRadius: 5,
  },
});
