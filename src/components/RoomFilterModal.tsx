import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';
import Modal from 'react-native-modal';
import SegmentedControl from '@react-native-community/segmented-control';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {ModalProps} from '../types';

export function RoomFilterModal({
  visible,
  setVisible,
  filterOptions,
  handleFilterOptions,
}: ModalProps) {
  const [roomNumber, setRoomNumber] = useState<number>();
  const [bathNumber, setBathNumber] = useState<number>();

  useEffect(() => {
    setRoomNumber(filterOptions.numberOfBedrooms.value);
    setBathNumber(filterOptions.numberOfBathrooms.value);
  }, [filterOptions]);

  const applyFilter = () => {
    handleFilterOptions({
      ...filterOptions,
      numberOfBedrooms: {
        value: roomNumber === 0 ? undefined : roomNumber,
      },
      numberOfBathrooms: {
        value: bathNumber === 0 ? undefined : bathNumber,
      },
    });
    setVisible(false);
  };

  return (
    <Modal
      isVisible={visible}
      backdropOpacity={1}
      backdropColor="#FFFFFF"
      animationIn="fadeIn">
      <SafeAreaView style={styles.container}>
        <TouchableOpacity
          onPress={() => setVisible(false)}
          style={styles.closeWrapper}>
          <Ionicons name="close" size={30} />
        </TouchableOpacity>
        <View style={styles.wrapper}>
          <Text style={styles.headerText}>Numero de habitaciones</Text>
          <View style={styles.flexView}>
            <View style={styles.segment}>
              <SegmentedControl
                values={['All', '1+', '2+', '3+', '4+']}
                selectedIndex={roomNumber}
                onChange={(event) => {
                  setRoomNumber(event.nativeEvent.selectedSegmentIndex);
                }}
              />
            </View>
          </View>
        </View>
        <View style={styles.wrapper}>
          <Text style={styles.headerText}>Numero de banos</Text>
          <View style={styles.flexView}>
            <View style={styles.segment}>
              <SegmentedControl
                values={['All', '1+', '2+', '3+', '4+']}
                selectedIndex={bathNumber}
                onChange={(event) => {
                  setBathNumber(event.nativeEvent.selectedSegmentIndex);
                }}
              />
            </View>
          </View>
        </View>
        <View style={styles.bottomView}>
          <TouchableOpacity
            testID="apply-filter-button"
            style={styles.filterBtn}
            onPress={() => applyFilter()}>
            <Text style={styles.filterText}>Aplicar y filtar</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  closeWrapper: {
    position: 'absolute',
    right: 0,
    top: 40,
  },
  wrapper: {
    marginTop: 100,
  },
  downWrapper: {
    marginTop: 200,
  },
  headerText: {
    fontSize: 25,
    fontFamily: 'Raleway-Black',
  },
  flexView: {
    flexDirection: 'row',
    marginTop: 20,
  },
  bottomView: {
    width: '100%',
    position: 'absolute',
    bottom: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  filterBtn: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#484848',
    borderRadius: 3,
  },
  filterText: {
    fontSize: 15,
    color: '#FFFFFF',
    fontFamily: 'Raleway-Black',
  },
  segment: {
    width: '100%',
  },
});
