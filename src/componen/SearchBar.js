import {
    StyleSheet,
    View,
    TextInput,
    Animated,
    TouchableOpacity,
  } from "react-native";
  import React, { useState, useRef, useEffect } from "react";
  import { SearchNormal1, ArrowLeft, Add } from "iconsax-react-native";
  import { useNavigation } from "@react-navigation/native";
  
  const SearchBar = ({ searchPhrase, setSearchPhrase }) => {
    const navigation = useNavigation();
    const animation = useRef(new Animated.Value(0)).current;
    useEffect(() => {
      Animated.timing(animation, {
        toValue: 1,
        duration: 400,
        useNativeDriver: false,
      }).start();
    }, []);
    return (
      <Animated.View
        style={[
          styles.container,
          {
            gap: animation.interpolate({
              inputRange: [0, 1],
              outputRange: [0, 12],
            }),
          },
        ]}
      >
        <Animated.View
          style={{
            transform: [
              {
                scale: animation.interpolate({
                  inputRange: [0, 0.8, 1],
                  outputRange: [0, 1.2, 1],
                }),
              },
            ],
          }}
        >
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <ArrowLeft color={"#C05F2C"} variant="Linear" size={24} style={{ marginTop: 10 }}/>
          </TouchableOpacity>
        </Animated.View>
        <View style={styles.bar}>
          <SearchNormal1
            size={18}
            color={searchPhrase ? colors="#C05F2C" : color="#C05F2C"}
            variant="Linear" 
            />
          <TextInput
            style={styles.textinput}
            placeholder="Discover a place"
            placeholderTextColor="grey"
            value={searchPhrase}
            onChangeText={setSearchPhrase}
            borderWidth={0}
            underlineColorAndroid="transparent"
            autoCorrect={false}
            autoFocus={true}
          />
          {searchPhrase && (
            <TouchableOpacity onPress={() => setSearchPhrase("")}>
              <Add
                size={18}
                color="black"
                variant="Linear"
                style={{ transform: [{ rotate: "45deg" }] }}
              />
            </TouchableOpacity>
          )}
        </View>
      </Animated.View>
    );
  };
  
  export default SearchBar;
  
  const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      justifyContent: "flex-start",
      alignItems: "center",
    },
    bar: {
      flexDirection: "row",
      padding: 10,
      gap: 10,
      alignItems: "center",
      backgroundColor: "#FFFFFF",
      borderRadius: 10,
      elevation:3,
      marginTop:10,
      flex: 1,
    },
    textinput: {
      fontSize: 14,
      color: "#C05F2C",
      lineHeight: 18,
      padding: 0,
      flex: 1,
    },
  });