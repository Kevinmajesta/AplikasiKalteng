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
  Activity,
  Activicty,
  ArrowLeft,
  Home,
  Location,
  LocationAdd,
  Map1,
  People,
  Profile,
  Star1,
  SunFog,
} from 'iconsax-react-native';

const navigation = useNavigation();

const ContentScreen = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.header}onPress={() => navigation.navigate('ContentAsliScreen')}>
        <ArrowLeft
          color={'#BB9981'}
          variant="Linear"
          size={18}
          style={{marginLeft: 10}}
        />
        <Text style={styles.headerText}>Back</Text>
      </TouchableOpacity>
      <ScrollView>
        <GambarContent />
        <BlogTengah />
        <TulisanBlog />
        <Deskripsi />
        <Booking />
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

const GambarContent = () => {
  return (
    <View style={gambar.gambar}>
      <Image
        style={gambar.image}
        source={{
          uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpPo36cmOpqXOaJ3B5TQ3TSSEZb7zHOwMHag&usqp=CAU',
        }}
      />
      <View style={gambar.kotakPutih}></View>
      <View style={gambar.row}></View>
      <Image
        style={gambar.imageDalem}
        source={{
          uri: 'https://asset.kompas.com/crops/rS9Tx0RWoTT3iKohMEX0PMcmJbM=/0x0:750x500/750x500/data/photo/2022/02/24/6216f993c35a0.jpg',
        }}
      />
      <Image
        style={gambar.imageDalem1}
        source={{
          uri: 'https://centralborneoguide.com/wp-content/uploads/2019/07/IMG_E2688.jpg',
        }}
      />
      <Image
        style={gambar.imageDalem2}
        source={{
          uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCHqEeti7Bn664UcfmCuDFm1ik01Op6NKi0A&usqp=CAU',
        }}
      />
    </View>
  );
};

const gambar = StyleSheet.create({
  gambar: {
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    margin: 20,
    width: 350,
    height: 350,
    borderRadius: 30,
  },
  imageDalem: {
    margin: 8,
    width: 55,
    height: 55,
    top: 90,
    left: 280,
    borderRadius: 10,
    borderColor: 'white',
    borderWidth: 2,
    backgroundColor: 'white',
    position: 'absolute',
    zIndex: 2,
  },
  imageDalem1: {
    margin: 8,
    width: 55,
    height: 55,
    top: 155,
    left: 280,
    borderRadius: 10,
    borderColor: 'white',
    borderWidth: 2,
    backgroundColor: 'white',
    position: 'absolute',
    zIndex: 2,
  },
  imageDalem2: {
    margin: 8,
    width: 55,
    height: 55,
    top: 220,
    left: 280,
    borderRadius: 10,
    borderColor: 'white',
    borderWidth: 2,
    backgroundColor: 'white',
    position: 'absolute',
    zIndex: 2,
  },
  kotakPutih: {
    backgroundColor: 'white',
    position: 'absolute',
    top: 90,
    left: 280,
    width: 70,
    height: 200,
    opacity: 0.5,
    borderRadius: 20,
    zIndex: 1,
  },
});

const BlogTengah = () => {
  return (
    <ScrollView horizontal>
      <View style={tengah.container}>
        <TouchableOpacity
          style={tengah.itemContainer}>
          <View style={tengah.buletan}>
            <Map1 size={32} color="#FF8A65" />
          </View>
          <View style={tengah.textContainer1}>
            <Text>Maps</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={tengah.itemContainer}>
          <View style={tengah.buletan1}>
            <People size={32} color="#FF8A65" />
          </View>
          <View style={tengah.textContainer1}>
            <Text>Guide</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={tengah.itemContainer}>
          <View style={tengah.buletan2}>
            <SunFog size={32} color="#FF8A65" />
          </View>
          <View style={tengah.textContainer}>
            <Text>3 Day 3 Night</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={tengah.itemContainer}>
          <View style={tengah.buletan3}>
            <Activity size={32} color="#FF8A65" />
          </View>
          <View style={tengah.textContainer}>
            <Text>BreakFast</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const tengah = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 30,
  },
  itemContainer: {
    alignItems: 'center',
    marginRight: 22,
  },
  buletan: {
    backgroundColor: '#f4dbbd',
    width: 60,
    height: 60,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer: {
    marginTop: 5,
  },
  textContainer1: {
    marginTop: 5,
    marginLeft: -5,
  },
  buletan1: {
    backgroundColor: '#D7EEFF',
    width: 60,
    height: 60,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buletan2: {
    backgroundColor: '#E1FFFB',
    width: 60,
    height: 60,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buletan3: {
    backgroundColor: '#F2DFD9',
    width: 60,
    height: 60,
    borderRadius: 50,

    alignItems: 'center',
    justifyContent: 'center',
  },
});

const TulisanBlog = () => {
  return (
    <View style={tulisan.container}>
      <View style={tulisan.garis}></View>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Text style={tulisan.tulisanBesar}>Tanjung Puting</Text>
        <Star1
          size="20"
          color="#A9A9A9"
          style={{marginLeft: 58, marginRight: 3}}
        />
        <Text style={tulisan.tulisanKecil}>4.7(9k Review)</Text>
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Location
            size="20"
            color="#A9A9A9"
            style={{marginLeft: 18, marginRight: 3}}
          />
          <Text>Kotawaringin</Text>
          <LocationAdd
            size="20"
            color="#FF8A65"
            style={{marginLeft: 129, marginRight: 3}}
          />
          <Text style={{color: '#C05F2C', fontWeight: 'bold'}}>
            Map Direction
          </Text>
        </View>
      </View>
    </View>
  );
};

const tulisan = StyleSheet.create({
  garis: {
    marginTop: 10,
    marginLeft: 20,
    width: '90%',
    height: 3,
    backgroundColor: '#A9A9A9',
    opacity:0.5,
  },
  tulisanBesar: {
    marginLeft: 20,
    margin: 5,
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
  },
  tulisanKecil: {
    fontSize: 13,
    color: '#A9A9A9',
  },
});

const Deskripsi = () => {
  return (
    <View>
      <Text style={deskripsi.tulisanBesar}>Description</Text>
      <Text style={deskripsi.textPanjang}>
        Taman Nasional Tanjung Puting adalah sebuah taman nasional yang terletak
        di semenanjung barat daya provinsi Kalimantan Tengah. Tanjung Puting
        pada awalnya merupakan cagar alam dan suaka margasatwa yang ditetapkan
        oleh Pemerintah Hindia Belanda pada tahun 1937. Selanjutnya berdasarkan
        SK Menteri Kehutanan No. 687/Kpts-II/1996 tanggal 25 Oktober 1996,
        Tanjung Puting ditunjuk sebagai Taman Nasional dengan luas seluruhnya
        415.040 ha.
      </Text>
    </View>
  );
};

const deskripsi = StyleSheet.create({
  tulisanBesar: {
    marginTop: 20,
    marginLeft: 20,
    margin: 5,
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
  },
  textPanjang: {
    marginLeft: 20,
    marginRight: 30,
  },
});

const Booking = () => {
  return (
    <View style={booking.container}>
      <TouchableOpacity
        style={booking.footerkiri}>
        <Text style={booking.text}>$500/Person</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={booking.footerkanan}>
        <Text style={booking.text1}>Book Now</Text>
      </TouchableOpacity>
    </View>
  );
};

const booking = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  footerkiri: {
    marginLeft: 30,
    marginTop: 5,
    marginBottom: 15,
    width: 120,
    height: 55,
    backgroundColor: 'white',
    borderColor: '#C05F2C',
    borderWidth: 2,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerkanan: {
    marginLeft: 30,
    marginTop: 5,
    marginBottom: 15,
    width: 180,
    height: 55,
    backgroundColor: '#C05F2C',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#C05F2C',
    fontSize: 14,
  },
  text1: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
});


export default ContentScreen;
