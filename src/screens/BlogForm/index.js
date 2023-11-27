import React, {useState} from 'react';
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
} from 'react-native';
import {ArrowLeft} from 'iconsax-react-native';

const AddForm = ({route}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.header}
        onPress={() => navigation.navigate('ProfileScreen')}>
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
        <KotakAwal />
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
});
export default AddForm;

const KotakAwal = () => {
  const [blogData, setBlogData] = useState({
    title: '',
    tanggal: '',
    note: '',
  });
  const handleChange = (key, value) => {
    setBlogData({
      ...blogData,
      [key]: value,
    });
  };
  return (
    <View style={awal.container}>
      <View style={awal.kotakAtas}>
        <TextInput
          placeholder="Title"
          value={blogData.title}
          onChangeText={text => handleChange('title', text)}
          placeholderTextColor="grey"
          multiline
        />
      </View>
      <View style={awal.tanggal}>
        <TextInput
          placeholder="Date"
          value={blogData.tanggal}
          onChangeText={text => handleChange('tanggal', text)}
          placeholderTextColor="grey"
          multiline
        />
      </View>
      <View style={awal.kotakBawah}>
        <TextInput
          placeholder="Note"
          value={blogData.note}
          onChangeText={text => handleChange('note', text)}
          placeholderTextColor="grey"
          multiline
        />
      </View>
    </View>
  );
};

const awal = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: 20,
    marginLeft: 25,
    marginRight: 25,
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
