import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const Menu = () => {
  const btnIcon = [
    {
      name: 'Contact',
      icon: 'https://png.pngtree.com/png-vector/20191027/ourmid/pngtree-calling-telephone-line-icon-vector-png-image_1885981.jpg',
    },
    {
      name: 'About',
      icon: 'https://static.thenounproject.com/png/2940521-200.png',
    },
    {
      name: 'Course',
      icon: 'https://img1.pnghut.com/1/9/13/CWHBfd65f1/icon-design-diploma-symbol-academic-degree-black.jpg',
    },
    {
      name: 'Student',
      icon: 'https://t4.ftcdn.net/jpg/02/53/51/67/360_F_253516705_TdhWJkxcWVdmfFEJPDJ3blMds3Oqx1tH.jpg',
    },
  ];

  const nav = ['Contact', 'About', 'Course', 'Student'];

  const navigation = useNavigation();
  return (
    <View>
      <FlatList
        keyExtractor={key => {
          return key.name;
        }}
        data={btnIcon}
        horizontal
        renderItem={({item}) => {
          return (
            <View>
              <TouchableOpacity
                style={styles.btn}
                onPress={() => navigation.navigate(`${item.name}`)}>
                <View style={styles.iconDes}>
                  <Image
                    style={styles.icon}
                    source={{
                      uri: `${item.icon}`,
                    }}
                  />
                  <Text>{item.name}</Text>
                </View>
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </View>
  );
};

export default Menu;

const styles = StyleSheet.create({
  btn: {
    textAlign: 'center',
    margin: 10,
    padding: 10,
    borderRadius: 10,
  },
  icon: {
    width: 25,
    aspectRatio: 1,
  },
  iconDes: {
    alignItems: 'center',
    gap: 5,
  },
});
