import React, {useRef} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  Animated,
} from 'react-native';
import {
  Notification,
  Receipt21,
  Clock,
  HambergerMenu,
  SearchNormal,
  User,
  Chrome,
  Location,
  Star,
  Star1,
  Home,
  Activity,
  Profile,
} from 'iconsax-react-native';
import {categories} from '../../../datablog';

const HomeScreen = () => {
  const scrollY = useRef(new Animated.Value(0)).current;
  const diffClampY = Animated.diffClamp(scrollY, 0, 30);
  const recentY = diffClampY.interpolate({
    inputRange: [0, 30],
    outputRange: [0, -30],
    extrapolate: 'clamp',
  });
  return (
    <View style={header.container}>
      <View style={header.header}>
        {/* <User color={'brown'} variant="Bold" size={45} /> */}
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
      <Animated.ScrollView
        showsVerticalScrollIndicator={false}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollY}}}],
          {useNativeDriver: true},
        )}>
        <Animated.View
          style={[header.searchBar, {transform: [{translateY: recentY}]}]}>
          <SearchNormal color={'#C05F2C'} variant="Linear" size={25} />
          <Text style={{left: '-130%', opacity: 0.5}}>Discover a place</Text>
          <HambergerMenu color={'#C05F2C'} variant="Linear" size={25} />
        </Animated.View>
        <ListBlogAtas />
        <ListExplore />
        <BlogUtama />
        <BlogAkhir />
      </Animated.ScrollView>
    </View>
  );
};

export default HomeScreen;

const header = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    zIndex: 999,
  },

  header: {
    marginTop:25,
    marginBottom:25,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    height: 52,
    paddingTop: 8,
    zIndex:1000,
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
    top: -20,
    margin: 25,
    borderRadius: 15,
    elevation: 2,
  },
});

const ListBlogAtas = () => {
  return (
    <ScrollView horizontal style={blog.horizontal1}>
      <View style={blog.smallWarna}>
        <Image
          style={blog.image}
          source={{
            uri: 'https://i.pinimg.com/564x/74/c6/b5/74c6b5256dea8aeb4713dd91210cbcd6.jpg',
          }}
        />
        <Text
          style={{
            left: '52%',
            bottom: '33%',
            color: 'white',
            fontWeight: '700',
          }}>
          Hutan
        </Text>
      </View>
      <View style={blog.small}>
        <Image
          style={blog.image}
          source={{
            uri: 'https://i.pinimg.com/564x/2a/7f/ac/2a7fac553f4ef525f9026497fe79b627.jpg',
          }}
        />
        <Text
          style={{
            left: '52%',
            bottom: '33%',
            color: 'grey',
            fontWeight: '700',
          }}>
          Taman
        </Text>
      </View>
      <View style={blog.small}>
        <Image
          style={blog.image}
          source={{
            uri: 'https://i.pinimg.com/236x/0f/5e/40/0f5e404a4e88afc1a48c230525047bd6.jpg',
          }}
        />
        <Text
          style={{
            left: '45%',
            bottom: '33%',
            color: 'grey',
            fontWeight: '700',
          }}>
          Perairan
        </Text>
      </View>
      <View style={blog.small}>
        <Image
          style={blog.image}
          source={{
            uri: 'https://i.pinimg.com/236x/b9/fe/98/b9fe98bb3f0ff5d0ad4211dc0cb65c13.jpg',
          }}
        />
        <Text
          style={{
            left: '45%',
            bottom: '33%',
            color: 'grey',
            fontWeight: '700',
          }}>
          Pantai
        </Text>
      </View>
      <View style={blog.small1}>
        <Image
          style={blog.image}
          source={{
            uri: 'https://i.pinimg.com/236x/d3/b9/6b/d3b96b5244bdfa0001a95168686e469a.jpg',
          }}
        />
        <Text
          style={{
            left: '41%',
            bottom: '33%',
            color: 'grey',
            fontWeight: '700',
          }}>
          Perkotaan
        </Text>
      </View>
    </ScrollView>
  );
};

const blog = StyleSheet.create({
  horizontal1: {
    flex: 2,
    marginLeft: 25,
    backgroundColor: '#FFFFFF',
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
  image: {
    width: '40%',
    top: 10,
    left: 5,
    height: '70%',
    borderRadius: 12,
  },
  small: {
    width: 120,
    height: 65,
    borderRadius: 10,
    marginBottom: 10,
    marginRight: 10,
    backgroundColor: 'white',
    elevation: 5,
  },
  small1: {
    width: 120,
    height: 65,
    borderRadius: 10,
    marginBottom: 10,
    marginRight: 10,
    backgroundColor: 'white',
    marginRight: 40,
    elevation: 5,
  },
  smallWarna: {
    width: 130,
    height: 65,
    borderRadius: 10,
    marginBottom: 10,
    marginRight: 10,
    backgroundColor: '#C05F2C',
    elevation: 5,
  },
});

//penerapan props
const ExploreTab = ({label, availableWidth, fontWeight}) => {
  return (
    <View style={[eksplore.smallFont, {width: availableWidth}]}>
      <Text style={[eksplore.tabText, {fontWeight}]}>{label}</Text>
    </View>
  );
};
//penerapan props
const ListExplore = () => {
  return (
    <View style={eksplore.font}>
      <Text style={eksplore.headerText}>Explore Places</Text>
      <ScrollView horizontal style={eksplore.horizontalFont}>
        <ExploreTab label="All" availableWidth={40} fontWeight="normal" />
        <ExploreTab
          label="Recommended"
          availableWidth={130}
          fontWeight="bold"
        />
        <ExploreTab label="Popular" availableWidth={70} fontWeight="normal" />
        <ExploreTab
          label="Most Viewed"
          availableWidth={110}
          fontWeight="normal"
        />
        <ExploreTab
          label="Most Star"
          availableWidth={110}
          fontWeight="normal"
        />
      </ScrollView>
    </View>
  );
};

const eksplore = StyleSheet.create({
  font: {
    left: '7%',
    marginTop: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
  },
  horizontalFont: {
    marginTop: 10,
    flexDirection: 'row',
  },
  smallFont: {
    height: 30,
    justifyContent: 'center',
  },
  tabText: {
    fontSize: 17,
    justifyContent: 'center',
  },
});

const BlogUtama = () => {
  return (
    <View style={utama.utama}>
      <ScrollView horizontal style={utama.horizontalContent}>
        <View style={utama.smallContent}>
          <Image
            style={utama.image1}
            source={{
              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpPo36cmOpqXOaJ3B5TQ3TSSEZb7zHOwMHag&usqp=CAU',
            }}
          />
          <Text
            style={{
              left: '5%',
              top: '5%',
              fontSize: 20,
              color: 'black',
              fontWeight: 'bold',
            }}>
            Tanjung Puting
          </Text>
          <Location
            color={'grey'}
            variant="Linear"
            size={18}
            style={{top: 24, left: 10}}
          />
          <Star1
            color={'grey'}
            variant="Linear"
            size={15}
            style={{bottom: 25, left: '78%'}}
          />
          <Text style={{left: '13%', bottom: '4%', fontSize: 15}}>
            Kotawaringin Barat
          </Text>
          <Text style={{left: '85%', bottom: 63, fontSize: 13}}>4.9</Text>
        </View>
        <View style={utama.smallContent}>
          <Image
            style={utama.image1}
            source={{
              uri: 'https://i0.wp.com/mentayanet.com/wp-content/uploads/2023/02/Pantai-Kalimantan-Tengah-e1676192534337.webp?fit=750%2C375&ssl=1',
            }}
          />
          <Text
            style={{
              left: '5%',
              top: '5%',
              fontSize: 20,
              color: 'black',
              fontWeight: 'bold',
            }}>
            Ujung pandaran
          </Text>
          <Location
            color={'grey'}
            variant="Linear"
            size={18}
            style={{top: 24, left: 10}}
          />
          <Star1
            color={'grey'}
            variant="Linear"
            size={15}
            style={{bottom: 25, left: '78%'}}
          />
          <Text style={{left: '13%', bottom: '4%', fontSize: 15}}>
            Kotawaringin Timur
          </Text>
          <Text style={{left: '85%', bottom: 63, fontSize: 13}}>4.8</Text>
        </View>
        <View style={utama.smallContent}>
          <Image
            style={utama.image1}
            source={{
              uri: 'https://www.intimnews.com/wp-content/uploads/2023/04/whatsapp-image-2023-04-25-at-19.52.43jpeg.jpg',
            }}
          />
          <Text
            style={{
              left: '5%',
              top: '5%',
              fontSize: 20,
              color: 'black',
              fontWeight: 'bold',
            }}>
            Ujung pandaran
          </Text>
          <Location
            color={'grey'}
            variant="Linear"
            size={18}
            style={{top: 24, left: 10}}
          />
          <Star1
            color={'grey'}
            variant="Linear"
            size={15}
            style={{bottom: 25, left: '78%'}}
          />
          <Text style={{left: '13%', bottom: '4%', fontSize: 15}}>Sampit</Text>
          <Text style={{left: '85%', bottom: 63, fontSize: 13}}>4.5</Text>
        </View>
        <View style={utama.smallContent}>
          <Image
            style={utama.image1}
            source={{
              uri: 'https://www.daerahkita.com/gambar/rumah-betang-tradisional-kalteng-1.webp',
            }}
          />
          <Text
            style={{
              left: '5%',
              top: '5%',
              fontSize: 20,
              color: 'black',
              fontWeight: 'bold',
            }}>
            Rumah Betang
          </Text>
          <Location
            color={'grey'}
            variant="Linear"
            size={18}
            style={{top: 24, left: 10}}
          />
          <Star1
            color={'grey'}
            variant="Linear"
            size={15}
            style={{bottom: 25, left: '78%'}}
          />
          <Text style={{left: '13%', bottom: '4%', fontSize: 15}}>
            Palangkaraya
          </Text>
          <Text style={{left: '85%', bottom: 63, fontSize: 13}}>4.3</Text>
        </View>
        <View style={utama.smallContent1}>
          <Image
            style={utama.image1}
            source={{
              uri: 'https://osccdn.medcom.id/images/content/2021/09/10/234ad084213642ebdf4ba658361f63d8.jpg',
            }}
          />
          <Text
            style={{
              left: '5%',
              top: '5%',
              fontSize: 20,
              color: 'black',
              fontWeight: 'bold',
            }}>
            Batu Banama
          </Text>
          <Location
            color={'grey'}
            variant="Linear"
            size={18}
            style={{top: 24, left: 10}}
          />
          <Star1
            color={'grey'}
            variant="Linear"
            size={15}
            style={{bottom: 25, left: '78%'}}
          />
          <Text style={{left: '13%', bottom: '4%', fontSize: 15}}>
            Katingan
          </Text>
          <Text style={{left: '85%', bottom: 63, fontSize: 13}}>4.2</Text>
        </View>
        <View style={utama.smallContent1}>
          <Image
            style={utama.image1}
            source={{
              uri: 'https://kaltengtoday.com/wp-content/uploads/2020/05/2-7.jpg',
            }}
          />
          <Text
            style={{
              left: '5%',
              top: '5%',
              fontSize: 20,
              color: 'black',
              fontWeight: 'bold',
            }}>
            Tugu Soekarno
          </Text>
          <Location
            color={'grey'}
            variant="Linear"
            size={18}
            style={{top: 24, left: 10}}
          />
          <Star1
            color={'grey'}
            variant="Linear"
            size={15}
            style={{bottom: 25, left: '78%'}}
          />
          <Text style={{left: '13%', bottom: '4%', fontSize: 15}}>
            Palangkaraya
          </Text>
          <Text style={{left: '85%', bottom: 63, fontSize: 13}}>4.0</Text>
        </View>
      </ScrollView>
    </View>
  );
};

const utama = StyleSheet.create({
  utama: {
    flex: 4,
    backgroundColor: '#FFFFFF',
    paddingLeft: 15,
  },
  horizontalFont: {
    flex: 1,
    marginTop: 10,
    left: 25,
    marginRight: 24,
    backgroundColor: '#FFFFFF',
  },
  smallFont: {
    width: 80,
    height: 40,
    marginLeft: 5,
    marginRight: 10,
    backgroundColor: '#FFFFFF',
  },
  horizontalContent: {
    flex: 1,
    marginTop: 15,
    backgroundColor: '#FFFFFF',
    height: 300, // Atur tinggi sesuai kebutuhan Anda
  },
  smallContent: {
    width: 240,
    height: 290,
    borderRadius: 20,
    marginBottom: 10,
    marginRight: 15,
    backgroundColor: 'white',
    elevation: 5,
  },
  image1: {
    width: '100%',
    height: '70%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  image2: {
    margin: 5,
    width: '80%',
    bottom: 1,
    left: 2,
    height: '60%',
    borderRadius: 12,
  },
  smallContent1: {
    width: 240,
    height: 290,
    borderRadius: 20,
    marginBottom: 10,
    backgroundColor: 'white',
    marginRight: 15,
    elevation: 5,
  },
});

const BlogAkhir = () => {
  return (
    <View style={akhir.akhir}>
      <Text style={akhir.text}>Category</Text>
      <ScrollView horizontal>
        <View style={akhir.image2}>
          {categories.map(category => (
            <View key={category.id} style={akhir.smallKategori}>
              <Image style={akhir.image3} source={{uri: category.image}} />
              <Text
                style={{
                  left: '22%',
                  color: 'grey',
                  fontWeight: '700',
                  fontSize: 18,
                }}>
                {category.name}
              </Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const akhir = StyleSheet.create({
  akhir: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 15,
    marginRight: 10,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    marginRight: 240,
    marginBottom: 5,
  },
  image3: {
    margin: 10,
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    height: '60%',
    borderRadius: 12,
  },
  image2: {
    flexDirection: 'row',
  },
  smallKategori: {
    width: 130,
    height: 130,
    backgroundColor: 'white', // Ganti warna background sesuai keinginan Anda
    margin: 10,
    left: 15,
    marginLeft: 10,
    marginRight: 20,
    borderRadius: 20,
  },
});
