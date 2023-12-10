import React, {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
    View,
    StyleSheet,
    Text,
    ScrollView,
    TouchableOpacity,
    TextInput,
    ActivityIndicator
} from 'react-native';
import {ArrowLeft} from 'iconsax-react-native';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';

const EditBlogForm = ({route}) => {
    const {Id} = route.params;
    const [blogData,
        setBlogData] = useState({judul: '', tanggal: '', content: ''});

    const handleChange = (key, value) => {
        setBlogData({
            ...blogData,
            [key]: value
        });
    };
    const navigation = useNavigation();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const subscriber = firestore()
            .collection('blog')
            .doc(Id)
            .onSnapshot(documentSnapshot => {
                const blogData = documentSnapshot.data();
                if (blogData) {
                    console.log('Blog data: ', blogData);
                    setBlogData({judul: blogData.judul, tanggal: blogData.tanggal, content: blogData.content});
                    setLoading(false);
                } else {
                    console.log(`Blog with ID ${Id} not found.`);
                }
            });
        setLoading(false);
        return () => subscriber();
    }, [Id]);

    const handleUpdate = async() => {
        setLoading(true);

        try {
            await firestore()
                .collection('blog')
                .doc(Id)
                .update({judul: blogData.judul, tanggal: blogData.tanggal, content: blogData.content});

            setLoading(false);
            console.log('Blog Updated!');
            navigation.navigate('ProfileScreen', {Id});
        } catch (error) {
            console.log(error);
        }
    };

    const handleDelete = async() => {
        setLoading(true);
        try {
            await firestore()
                .collection('blog')
                .doc(Id)
                .delete()
                .then(() => {
                    console.log('Blog deleted!');
                });
            console.log('Blog deleted!');
            setLoading(false)
            navigation.navigate('ProfileScreen');
        } catch (error) {
            console.error(error);
        }
    };

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
                    marginLeft: 10
                }}/>
                <Text style={styles.headerText}>Back</Text>
            </TouchableOpacity>
            <ScrollView>
                <View style={awal.container}>
                    <View style={awal.kotakAtas}>
                        <TextInput
                            placeholder="Title"
                            value={blogData.judul}
                            onChangeText={text => handleChange('judul', text)}
                            placeholderTextColor="grey"
                            multiline/>
                    </View>
                    <View style={awal.tanggal}>
                        <TextInput
                            placeholder="Date"
                            value={blogData.tanggal}
                            onChangeText={text => handleChange('tanggal', text)}
                            placeholderTextColor="grey"
                            multiline/>
                    </View>
                    <View style={awal.kotakBawah}>
                        <TextInput
                            placeholder="Note"
                            value={blogData.content}
                            onChangeText={text => handleChange('content', text)}
                            placeholderTextColor="grey"
                            multiline/>
                    </View>
                    <View style ={awal.column}>
                        <TouchableOpacity style={awal.button} onPress={handleUpdate}>
                            <Text style={awal.buttonLabel}>Update</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={awal.button} onPress={handleDelete}>
                            <Text style={awal.buttonLabel}>Delete</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF'
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        height: 50,
        paddingHorizontal: 20
    },
    headerText: {
        fontSize: 18,
        marginLeft: 10
    },
    loadingOverlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

const awal = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        marginTop: 20,
        marginLeft: 25,
        marginRight: 25
    },
    column: {
        flexDirection: 'row'
    },
    button: {
        marginTop: 15,
        width: 150,
        height: 50,
        marginRight: 10,
        marginLeft: 10,
        borderRadius: 10,
        backgroundColor: '#BB9981',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center'
    },
    buttonLabel: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    kotakAtas: {
        backgroundColor: '#FAF3F0',
        height: 50,
        width: '100%',
        justifyContent: 'center',
        borderRadius: 10,
        paddingLeft: 10
    },
    tanggal: {
        marginTop: 5,
        backgroundColor: '#FAF3F0',
        height: 50,
        width: '100%',
        justifyContent: 'center',
        borderRadius: 10,
        paddingLeft: 10
    },
    kotakBawah: {
        marginTop: 5,
        backgroundColor: '#FAF3F0',
        height: 500,
        width: '100%',
        borderRadius: 10,
        paddingLeft: 10
    },
    borderDashed: {
        borderStyle: 'dashed',
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        borderColor: 'grey'
    }
});
export default EditBlogForm;
