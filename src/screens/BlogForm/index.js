import React, {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  View,
  StyleSheet,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  Animated,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import {ArrowLeft} from 'iconsax-react-native';
import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';

const AddForm = ({ route }) => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const [blogData, setBlogData] = useState({
    judul: '',
    tanggal: '',
    content: '',
  });

  useEffect(() => {
    if (route.params && route.params.blogData) {
      const { blogData: initialBlogData } = route.params;
      setBlogData({
        judul: initialBlogData.judul,
        tanggal: initialBlogData.tanggal,
        content: initialBlogData.content,
      });
    }
  }, [route.params]);

  const handleChange = (key, value) => {
    setBlogData({
      ...blogData,
      [key]: value,
    });
  };

const handleUpload = async () => {

    setLoading(true);
    try {
      await firestore().collection('blog').add({
        judul: blogData.judul,
        tanggal: blogData.tanggal,
        content: blogData.content,
      });
      setLoading(false);
      console.log('Blog added!');
      navigation.navigate('ProfileScreen');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.header}
        onPress={() => navigation.navigate('ProfileScreen')}
      >
        <ArrowLeft
          color={'#BB9981'}
          variant="Linear"
          size={18}
          style={{
            marginLeft: 10,
          }}
        />
        <Text style={styles.headerText}>Back</Text>
      </TouchableOpacity>
      <ScrollView>
        <View style={awal.container}>
          <View style={awal.kotakAtas}>
            <TextInput
              placeholder="Title"
              value={blogData.judul}
              onChangeText={(text) => handleChange('judul', text)}
              placeholderTextColor="grey"
              multiline
            />
          </View>
          <View style={awal.tanggal}>
            <TextInput
              placeholder="Date"
              value={blogData.tanggal}
              onChangeText={(text) => handleChange('tanggal', text)}
              placeholderTextColor="grey"
              multiline
            />
          </View>
          <View style={awal.kotakBawah}>
            <TextInput
              placeholder="Note"
              value={blogData.content}
              onChangeText={(text) => handleChange('content', text)}
              placeholderTextColor="grey"
              multiline
            />
          </View>
          <TouchableOpacity style={awal.button} onPress={handleUpload}>
            <Text style={awal.buttonLabel}>Upload</Text>
          </TouchableOpacity>
        </View>
        {loading && (
          <View style={styles.loadingOverlay}>
            <ActivityIndicator size="large" color={'blue'} />
          </View>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    height: 50,
    paddingHorizontal: 20,
  },
  headerText: {
    fontSize: 18,
    marginLeft: 10,
  },
  loadingOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    opacity: 0.4,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const awal = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginTop: 20,
    marginLeft: 25,
    marginRight: 25,
  },
  button: {
    marginTop: 15,
    width: '100%',
    height: 50,
    borderRadius: 10,
    backgroundColor: '#BB9981',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  buttonLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  kotakAtas: {
    backgroundColor: '#FAF3F0',
    height: 50,
    width: '100%',
    justifyContent: 'center',
    borderRadius: 10,
    paddingLeft: 10,
  },
  tanggal: {
    marginTop: 5,
    backgroundColor: '#FAF3F0',
    height: 50,
    width: '100%',
    justifyContent: 'center',
    borderRadius: 10,
    paddingLeft: 10,
  },
  kotakBawah: {
    marginTop: 5,
    backgroundColor: '#FAF3F0',
    height: 500,
    width: '100%',
    borderRadius: 10,
    paddingLeft: 10,
  },
  borderDashed: {
    borderStyle: 'dashed',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    borderColor: 'grey',
  },
});
export default AddForm;
