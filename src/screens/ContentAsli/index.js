import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import {SearchNormal, HambergerMenu} from 'iconsax-react-native';
import useBlogState from '../../../dataUtama';
import {useNavigation} from '@react-navigation/native';

const navigation = useNavigation();

const ContentAsliScreen = () => {
  const {blogs} = useBlogState();
  return (
    <View style={header.container}>
      <ScrollView>
        <View style={header.header}>
          <Image
            style={{
              height: '150%',
              width: '20%',
              borderRadius: 10,
              top: 5,
              borderWidth: 2,
              borderColor: '#C05F2C',
            }}
            source={{
              uri: 'https://i.scdn.co/image/ab67616d0000b2732334b4d3199bea648237751e',
            }}
          />
          <Text style={header.textHeader1}>Welcome Back</Text>
          <Text style={header.textHeader2}>Kevin Majesta Ivano</Text>
        </View>
        <View style={header.searchBar}>
            <SearchNormal color={'#C05F2C'} variant="Linear" size={25} />
            <TouchableWithoutFeedback
            onPress={() => navigation.navigate('SearchPage')}>
            <Text style={{left: '-130%', opacity: 0.5}}>Discover a place</Text>
            </TouchableWithoutFeedback>
            <HambergerMenu color={'#C05F2C'} variant="Linear" size={25} />
        </View>
        <ListBlogAtas blogs={blogs} />
      </ScrollView>
    </View>
  );
};

export default ContentAsliScreen;

const header = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    top: 15,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    height: 52,
    paddingTop: 8,
    paddingBottom: 4,
  },
  textHeader1: {
    width: '30%',
    marginHorizontal: '2%',
    top: '-4%',
  },
  textHeader2: {
    width: '100%',
    left: '-281%',
    top: '3%',
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
  },
  searchBar: {
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    height: 50,
    top: 20,
    margin: 25,
    borderRadius: 15,
    elevation: 2,
  },
});

const ListBlogAtas = ({blogs}) => {
  if (!blogs) {
    return null;
  }
  return (
    <View style={blogir.container}>
      <ScrollView>
        <View style={blogir.imageContainer}>
          {blogs.map((blog, index) => (
            <TouchableOpacity
              style={blogir.imageWithText}
              key={blog.id}
              onPress={() => {
                navigation.navigate('ContentScreen', {id: blog.id});
              }}>
              <Image style={blogir.image} source={{uri: blog.imageUrl}} />
              <Text style={blogir.imageText}>{blog.title}</Text>
              <Text style={blogir.imageText1}>{blog.location}</Text>
              {(index + 1) % 2 === 0 && <View style={{width: 10}} />}
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const blogir = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  imageContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 20,
  },
  imageRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 45,
    marginHorizontal: 10,
  },
  imageWithText: {
    alignItems: 'left',
  },
  image: {
    width: 350,
    height: 230,
    borderRadius: 10,
    borderWidth: 2,
    marginBottom: 10,
    marginTop: 20,
    marginRight: 10,
    left: 5,
  },
  imageText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  imageText1: {
    fontSize: 14,
    marginLeft: 10,
  },
});
