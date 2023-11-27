import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  View,
  StyleSheet,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {
  Personalcard,
  Bag2,
  SecurityUser,
  NoteAdd,
} from 'iconsax-react-native';

const navigation = useNavigation();

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Profile</Text>
      </View>
      <ScrollView>
        <Foto />
        <Akun />
        {/* Konten profil Anda di sini */}
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
    justifyContent: 'center', // Menengahkan secara horizontal
    backgroundColor: '#FFFFFF',
    height: 50,
    paddingHorizontal: 20,
    marginTop: 20,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
});

const Foto = () => {
  return (
    <View style={foto.container}>
      <View style={foto.header}>
        <Image
          style={foto.image}
          source={{
            uri: 'data:image/jpeg;base64,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',
          }}
        />
        <Text style={foto.headerText}>Carl Jhonson</Text>
        <Text style={foto.headerText1}>Change Photo</Text>
      </View>
    </View>
  );
};

const foto = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'column', // Mengatur susunan elemen menjadi vertikal
    alignItems: 'center',
    justifyContent: 'center', // Menengahkan secara horizontal
    backgroundColor: '#FFFFFF',
    height: 180, // Menyesuaikan tinggi sesuai dengan gambar dan teks
    paddingHorizontal: 20,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 10, // Memberi jarak antara gambar dan teks
  },
  headerText1: {
    fontSize: 14,
    color: 'black',
    marginTop: 10, // Memberi jarak antara gambar dan teks
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 70,
  },
});

const Akun = () => {
  return (
    <View style={akun.container}>
      <Text style={akun.textBesar}>My Account</Text>
      <TouchableOpacity style={akun.kotakAbu}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Personalcard size={32} color="#C05F2C" />
          <Text style={[akun.textDalem, { marginLeft: 10 }]}>Information</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={akun.kotakAbu}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Bag2 size={32} color="#C05F2C" />
          <Text style={[akun.textDalem, { marginLeft: 10 }]}>Wishlist Place</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={akun.kotakAbu}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <SecurityUser size={32} color="#C05F2C" />
          <Text style={[akun.textDalem, { marginLeft: 10 }]}>Security Account</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={akun.kotakAbu} onPress={() => navigation.navigate("AddForm")}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <NoteAdd size={32} color="#C05F2C" />
          <Text style={[akun.textDalem, { marginLeft: 10 }]}>Add Note</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const akun = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  textBesar: {
    marginLeft: 15,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 10,
  },
  kotakAbu: {
    marginTop: 10,
    marginLeft: 15,
    width: '93%',
    height: 53,
    borderRadius: 20,
    backgroundColor: '#F6F8FC',
    justifyContent: 'center',
    paddingLeft: 15,
  },
  textDalem: {
    color: 'black',
  },
});



export default ProfileScreen;
