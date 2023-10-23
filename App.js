import React from 'react'
import { View, StyleSheet, Text, Image ,ScrollView,TouchableHighlight } from 'react-native'
import { Notification, Receipt21, Clock, HambergerMenu, SearchNormal, User, Chrome, Location, Star, Star1 } from 'iconsax-react-native';
import LinearGradient from 'react-native-linear-gradient';

export default function App() {
  return (
    <ScrollView>
    <View style={styles.container}>
      <View style={styles.header}>
      {/* <User color={'brown'} variant="Bold" size={45} /> */}
      <Image
          style={{height: '150%', width: '20%',borderRadius: 10,top:5,borderWidth: 2,borderColor: '#BB9981'}}
          source={{ uri: 'https://i.scdn.co/image/ab67616d0000b2732334b4d3199bea648237751e' }}
        />
      <Text style={styles.textHeader1}>Welcome Back</Text>
      <Text style={styles.textHeader2}>Kevin Majesta Ivano</Text>
      </View>
      <View style={styles.searchBar}>
        <SearchNormal color={'#BB9981'} variant="Linear" size={25}/>
        <Text style={{ left: '-130%', opacity: 0.5 }}>Discover a place</Text>
        <HambergerMenu color={'#BB9981'} variant="Linear" size={25}/>      
      </View>

      <ScrollView horizontal style={styles.horizontal1}>
        <View style={styles.smallWarna} >
        <Image
          style={styles.image}
          source={{ uri: 'https://i.pinimg.com/564x/74/c6/b5/74c6b5256dea8aeb4713dd91210cbcd6.jpg' }}
        />
         <Text style={{left: '52%', bottom: '33%', color:'white', fontWeight: '700'  }}>Hutan</Text>
        </View>
        <View style={styles.small} >
        <Image
          style={styles.image}
          source={{ uri: 'https://i.pinimg.com/564x/2a/7f/ac/2a7fac553f4ef525f9026497fe79b627.jpg' }}
        />
         <Text style={{left: '52%', bottom: '33%', color:'grey', fontWeight: '700'  }}>Taman</Text>
        </View>
        <View style={styles.small} >
        <Image
          style={styles.image}
          source={{ uri: 'https://i.pinimg.com/236x/0f/5e/40/0f5e404a4e88afc1a48c230525047bd6.jpg' }}
        />
         <Text style={{left: '45%', bottom: '33%', color:'grey', fontWeight: '700'  }}>Perairan</Text>
        </View>
        <View style={styles.small} >
        <Image
          style={styles.image}
          source={{ uri: 'https://i.pinimg.com/236x/b9/fe/98/b9fe98bb3f0ff5d0ad4211dc0cb65c13.jpg' }}
        />
         <Text style={{left: '45%', bottom: '33%', color:'grey', fontWeight: '700'  }}>Pantai</Text>
        </View>
        <View style={styles.small1} >
        <Image
          style={styles.image}
          source={{ uri: 'https://i.pinimg.com/236x/d3/b9/6b/d3b96b5244bdfa0001a95168686e469a.jpg' }}
        />
         <Text style={{left: '41%', bottom: '33%', color:'grey', fontWeight: '700'  }}>Perkotaan</Text>
        </View>
      </ScrollView>
      <Text style={{bottom:'-2%', left: '7%', fontSize: 24, fontWeight: 'bold', color:'black'}}>Explore Places</Text>     
      <ScrollView horizontal style={styles.horizontalFont}>
        <View style={styles.smallFont}>
        <Text style={{fontSize: 17,marginHorizontal: 1,top:7,width: 60,justifyContent: 'center'}}>All</Text>
        </View>
        <View style={styles.smallFont}>
        <Text style={{fontSize: 17,marginHorizontal: '-70%',top:7,width: 130,justifyContent: 'center',fontWeight:'bold',color:'black'}}>Recommended</Text>
        </View>
        <View style={styles.smallFont}>
        <Text style={{fontSize: 17,marginHorizontal: '-18%',top:7,width: 110,justifyContent: 'center'}}>Popular</Text>
        </View>
        <View style={styles.smallFont} >
        <Text style={{fontSize: 17,marginHorizontal: '-40%',top:7,width: 110,justifyContent: 'center'}}>Most Viewed</Text>
        </View>
        <View style={styles.smallFont} >
        <Text style={{fontSize: 17,marginHorizontal: '-10%',top:7,width: 110,justifyContent: 'center', marginRight: 24}}>Most Star</Text>
        </View>
      </ScrollView>
      <ScrollView horizontal style={styles.horizontalContent}>
        <View style={styles.smallContent} >
        <Image
          style={styles.image1}
          source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpPo36cmOpqXOaJ3B5TQ3TSSEZb7zHOwMHag&usqp=CAU' }}
        />
         <Text style={{left: '5%', top: '5%', fontSize:20, color:'black', fontWeight: 'bold'  }}>Tanjung Puting</Text>
         <Location color={'grey'} variant="Linear" size={18} style={{top:24,left:10}}/>    
         <Star1 color={'grey'} variant="Linear" size={15} style={{bottom:25,left:'78%'}}/>        
         <Text style={{left: '13%', bottom: '4%', fontSize:15  }}>Kotawaringin Barat</Text>
         <Text style={{left: '85%', bottom: 63, fontSize:13  }}>4.9</Text>
        </View>
        <View style={styles.smallContent} >
        <Image
          style={styles.image1}
          source={{ uri: 'https://i0.wp.com/mentayanet.com/wp-content/uploads/2023/02/Pantai-Kalimantan-Tengah-e1676192534337.webp?fit=750%2C375&ssl=1' }}
        />
         <Text style={{left: '5%', top: '5%', fontSize:20, color:'black', fontWeight: 'bold'  }}>Ujung pandaran</Text>
         <Location color={'grey'} variant="Linear" size={18} style={{top:24,left:10}}/>    
         <Star1 color={'grey'} variant="Linear" size={15} style={{bottom:25,left:'78%'}}/>        
         <Text style={{left: '13%', bottom: '4%', fontSize:15  }}>Kotawaringin Timur</Text>
         <Text style={{left: '85%', bottom: 63, fontSize:13  }}>4.8</Text>
        </View>
        <View style={styles.smallContent} >
        <Image
          style={styles.image1}
          source={{ uri: 'https://www.intimnews.com/wp-content/uploads/2023/04/whatsapp-image-2023-04-25-at-19.52.43jpeg.jpg' }}
        />
         <Text style={{left: '5%', top: '5%', fontSize:20, color:'black', fontWeight: 'bold'  }}>Ujung pandaran</Text>
         <Location color={'grey'} variant="Linear" size={18} style={{top:24,left:10}}/>    
         <Star1 color={'grey'} variant="Linear" size={15} style={{bottom:25,left:'78%'}}/>        
         <Text style={{left: '13%', bottom: '4%', fontSize:15  }}>Sampit</Text>
         <Text style={{left: '85%', bottom: 63, fontSize:13  }}>4.5</Text>
        </View>
        <View style={styles.smallContent} >
        <Image
          style={styles.image1}
          source={{ uri: 'https://www.daerahkita.com/gambar/rumah-betang-tradisional-kalteng-1.webp' }}
        />
         <Text style={{left: '5%', top: '5%', fontSize:20, color:'black', fontWeight: 'bold'  }}>Rumah Betang</Text>
         <Location color={'grey'} variant="Linear" size={18} style={{top:24,left:10}}/>    
         <Star1 color={'grey'} variant="Linear" size={15} style={{bottom:25,left:'78%'}}/>        
         <Text style={{left: '13%', bottom: '4%', fontSize:15  }}>Palangkaraya</Text>
         <Text style={{left: '85%', bottom: 63, fontSize:13  }}>4.3</Text>
        </View>
        <View style={styles.smallContent1} >
        <Image
          style={styles.image1}
          source={{ uri: 'https://osccdn.medcom.id/images/content/2021/09/10/234ad084213642ebdf4ba658361f63d8.jpg' }}
        />
         <Text style={{left: '5%', top: '5%', fontSize:20, color:'black', fontWeight: 'bold'  }}>Batu Banama</Text>
         <Location color={'grey'} variant="Linear" size={18} style={{top:24,left:10}}/>    
         <Star1 color={'grey'} variant="Linear" size={15} style={{bottom:25,left:'78%'}}/>        
         <Text style={{left: '13%', bottom: '4%', fontSize:15  }}>Katingan</Text>
         <Text style={{left: '85%', bottom: 63, fontSize:13  }}>4.2</Text>
        </View>
        <View style={styles.smallContent1} >
        <Image
          style={styles.image1}
          source={{ uri: 'https://kaltengtoday.com/wp-content/uploads/2020/05/2-7.jpg' }}
        />
         <Text style={{left: '5%', top: '5%', fontSize:20, color:'black', fontWeight: 'bold'  }}>Tugu Soekarno</Text>
         <Location color={'grey'} variant="Linear" size={18} style={{top:24,left:10}}/>    
         <Star1 color={'grey'} variant="Linear" size={15} style={{bottom:25,left:'78%'}}/>        
         <Text style={{left: '13%', bottom: '4%', fontSize:15  }}>Palangkaraya</Text>
         <Text style={{left: '85%', bottom: 63, fontSize:13  }}>4.0</Text>
        </View>
      </ScrollView>

      <Text style={{bottom:'-5%', left: '7%', fontSize: 24, fontWeight: 'bold', color:'black'}}>Category</Text>

      <View style={styles.verticalKategori}>
        <View style={styles.smallKategori} >
        <Image
          style={styles.image2}
          source={{ uri: 'https://cdn-icons-png.flaticon.com/512/7893/7893979.png' }}
        />
         <Text style={{left: '16%', color:'grey', fontWeight: '700', fontSize: 18,  }}>Bandara</Text>
        </View>
        <View style={styles.smallKategori1} >
        <Image
          style={styles.image2}
          source={{ uri: 'https://png.pngtree.com/png-vector/20190521/ourmid/pngtree-hotel-icon-for-personal-and-commercial-use-png-image_1044892.jpg' }}
        />
         <Text style={{left: '24%', color:'grey', fontWeight: '700', fontSize: 18,  }}>Hotel</Text>
        </View>
        <View style={styles.smallKategori2} >
        <Image
          style={styles.image2}
          source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv1u6Afx2BVdEYdnS4bi8c1i-fb9Q3Gjv88y1OnPSEP1LUvp02gqvFciiKyxXLD7nEmgA&usqp=CAU' }}
        />
         <Text style={{left: '8%', color:'grey', fontWeight: '700', fontSize: 18,  }}>Pelabuhan</Text>
        </View>
        <View style={styles.smallKategori3} >
        <Image
          style={styles.image2}
          source={{ uri: 'https://static.vecteezy.com/system/resources/thumbnails/006/961/746/small/abstract-and-infinity-house-in-blue-colors-free-vector.jpg' }}
        />
         <Text style={{left: '29%', color:'grey', fontWeight: '700', fontSize: 18,  }}>Villa</Text>
        </View>
      </View>
    </View>
    </ScrollView>
    
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EAF6F6',
  },
  
  header: {
    top: 15,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EAF6F6',
    height: 52,
    paddingTop: 8,
    paddingBottom: 4
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
  textHeader1: {
    width: "30%",
    marginHorizontal: '2%',
    top: '-4%',
  },
  textHeader2: {
    width: "100%",
    left: '-281%',
    top: '3%',
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
  },
  horizontal1: {
    flex:1,
    top:15,
    left: 25,
  },
  horizontalFont: {
    flex:1,
    bottom:'-10%',
    left: 25,
    marginRight: 24

  },
  horizontalContent: {
    flex:1,
    bottom:'-12%',
    left: 25,
  },
  verticalKategori: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '40%',
    marginBottom: 4,
    width: 200,
  },
  small: {
    width: 120,
    height: 65,
    borderRadius:10,
    marginBottom: 10,
    marginRight: 10,
    backgroundColor: 'white',
    elevation:5,
  },
  smallWarna: {
    width: 130,
    height: 65,
    borderRadius:10,
    marginBottom: 10,
    marginRight: 10,
    backgroundColor: '#BB9981',
    elevation:5,
    
  },
  small1: {
    width: 120,
    height: 65,
    borderRadius:10,
    marginBottom: 10,
    marginRight: 10,
    backgroundColor: 'white',
    marginRight:40,
    elevation:5,
  },
  smallFont: {
    width: 80,
    height: 40,
    borderRadius:10,
    marginBottom: 10,
    marginRight: 10,
    backgroundColor: '#EAF6F6',
  },
  smallContent: {
    width: 250,
    height: 300,
    borderRadius:10,
    marginBottom: 10,
    marginRight: 15,
    backgroundColor: '#FFFFFF',
    elevation:5,
  },
  smallContent1: {
    width: 250,
    height: 300,
    borderRadius:10,
    marginBottom: 10,
    marginRight: 15,
    backgroundColor: '#FFFFFF',
    elevation:5,
  },
  smallKategori: {
    width: 100,
    height: 100,
    borderRadius:10,
    marginBottom:10,
    marginRight:10,
    left: 20,
    bottom: 70,
    backgroundColor: 'white',
  },
  smallKategori1: {
    width: 100,
    height: 100,
    borderRadius:10,
    marginBottom: 10,
    left: '80%',
    bottom: 180,
    marginRight: 10,
    backgroundColor: 'white',
  },
  smallKategori2: {
    width: 100,
    height: 100,
    borderRadius:10,
    marginBottom: 10,
    marginRight: 10,
    bottom: 155,
    left: '80%',
    backgroundColor: 'white',
  },
  smallKategori3: {
    width: 100,
    height: 100,
    borderRadius:10,
    marginBottom: 10,
    marginRight: 10,
    bottom: '60%',
    left: '10%',
    backgroundColor: 'white',
  },
  image: {
    width: '40%',
    top:10,
    left: 5,
    height: '70%',
    borderRadius:12,
  },
  image1: {
    margin:5,
    width: '90%',
    top:10,
    left: 5,
    height: '70%',
    borderRadius:12,
  },
  image2: {
    margin:5,
    width: '80%',
    bottom:1,
    left: 2,
    height: '60%',
    borderRadius:12,
  },
})