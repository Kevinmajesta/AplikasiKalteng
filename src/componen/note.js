import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {NoteText} from 'iconsax-react-native';
import {useNavigation} from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';

const NoteScreen = ({item}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.cardItem}
      onPress={() => {
        navigation.navigate('EditBlog', {Id: item.id});
      }}>
      <View style={styles.cardContent}>
        <NoteText size={32} color="#C05F2C" />

        <View style={styles.textContainer}>
          <Text style={styles.cardTitle}>{item?.judul}</Text>
          <Text style={styles.cardCategory}>{item?.tanggal}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardItem: {
    flexDirection: 'row',
    marginTop: 10,
    marginLeft: 25,
    width: 355,
    height: 53,
    borderRadius: 20,
    backgroundColor: '#FAF3F0',
    paddingLeft: 15,
  },
  cardCategory: {
    color: '#3498db',
    fontSize: 10,
  },
  cardTitle: {
    fontSize: 14,
    color: '#333',
  },
  cardContent: {
    flexDirection: 'row', // Arrange icon and text horizontally
    gap: 10,
    alignItems: 'center', // Center items vertically
    paddingRight: 10,
    paddingLeft: 15,
    flex: 1,
    paddingVertical: 5, // Adjust this value to reduce the vertical gap
  },
  textContainer: {
    flex: 1, // Take remaining space for the text container
    justifyContent: 'space-between',
  },
});

export default NoteScreen;
