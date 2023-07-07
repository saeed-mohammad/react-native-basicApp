import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  FlatList,
  Image,
} from 'react-native';
import React, {useState, useEffect} from 'react';

const UserData = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [MyData, setMyData] = useState();

  const getData = async () => {
    try {
      const response = await fetch(
        'https://thapatechnical.github.io/userapi/users.json',
      );
      const data = await response.json();
      setMyData(data);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <View style={styles.container}>
      {isLoading ? (
        <View>
          <ActivityIndicator size={'large'} />
        </View>
      ) : (
        <View>
          <Text style={styles.heading}>List of student</Text>
          <FlatList
            key={key => key.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            data={MyData}
            renderItem={({item}) => {
              return (
                <View style={styles.card}>
                  <View>
                    <Image source={{uri: item.image}} style={styles.img} />
                  </View>
                  <View style={styles.bioData}>
                    <View style={styles.bioInfo}>
                      <Text style={styles.bio}>Bio-Data</Text>
                      <Text style={styles.bioId}>{item.id}</Text>
                    </View>
                    <View style={styles.bioContent}>
                      <Text style={styles.bioName}>Name: {item.name}</Text>
                      <Text style={styles.bioEmail}>Email: {item.email}</Text>
                      <Text style={styles.bioMob}>Mobile: {item.mobile}</Text>
                    </View>
                  </View>
                </View>
              );
            }}
          />
        </View>
      )}
    </View>
  );
};

export default UserData;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#fff',
  },

  heading: {
    fontSize: 20,
    marginVertical: 10,
    textAlign: 'center',
    color: 'black',
    textTransform: 'uppercase',
  },
  card: {
    backgroundColor: '#eee',
    marginHorizontal: 10,
    padding: 5,
    width: 250,
  },
  img: {
    width: '100%',
    aspectRatio: 1,
  },
  bioData: {
    paddingHorizontal: 10,
    marginTop: 5,
  },
  bioInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bio: {
    fontSize: 20,
    color: 'black',
  },
  bioId: {
    fontSize: 20,
    color: 'black',
  },
  bioContent: {
    marginVertical: 10,
  },
  bioName: {
    textTransform: 'capitalize',
    fontSize: 20,
    color: 'black',
    marginBottom: 5,
  },
});
