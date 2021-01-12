import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';

export function Header(navigation: any) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <Ionicons name="menu" size={30} color={'#00AF43'} />
      </TouchableOpacity>
      <TextInput value="Barcelona" style={styles.textInput} />
      <TouchableOpacity style={styles.mapWrapper}>
        <Fontisto name="map-marker-alt" size={18} />
        <Text style={styles.mapText}>Maps</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 80,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  textInput: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: 'lightgray',
    paddingLeft: 10,
    marginLeft: 10,
  },
  mapWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
  mapText: {
    fontSize: 12,
    fontFamily: 'Raleway-Regular',
  },
});
