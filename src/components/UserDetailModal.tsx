import React from 'react';
import axios from 'axios';
import NameComp from './NameComp';
import {useQuery} from 'react-query';
import ButtonComp from './ButtonComp';
import {View, Modal, Dimensions, StyleSheet} from 'react-native';

const {width} = Dimensions.get('window');

interface FilterModal {
  setIsVisible: any;
  modalVisible?: boolean;
  onRequestClose?: () => void;
  user: number | null;
}
const UserDetailModal = ({
  modalVisible,
  onRequestClose,
  setIsVisible,
  user,
}: FilterModal) => {
  const onClosePress = () => {
    setIsVisible(false);
  };

  const {data} = useQuery(
    ['search-data', user],
    () => {
      return axios.get(
        `https://api.slingacademy.com/v1/sample-data/users/${user}`,
      );
    },
    {
      enabled: !!user,
    },
  );

  return (
    <Modal
      transparent={true}
      animationType="slide"
      visible={modalVisible}
      onRequestClose={onRequestClose}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <NameComp
            title="ID"
            value={`${data?.data?.user?.id}`}
            isWhite={false}
          />
          <NameComp
            title="Name"
            isWhite={false}
            value={`${data?.data?.user?.first_name} ${data?.data?.user?.last_name}`}
          />
          <NameComp
            title="Gender"
            value={data?.data?.user?.gender}
            isWhite={false}
          />
          <NameComp title="Job" value={data?.data?.user?.job} isWhite={false} />
          <NameComp
            title="State"
            value={data?.data?.user?.state}
            isWhite={false}
          />
          <NameComp
            title="City"
            value={data?.data?.user?.city}
            isWhite={false}
          />
          <NameComp
            title="Country"
            value={data?.data?.user?.country}
            isWhite={false}
          />
          <View style={{height: 10}} />
          <ButtonComp onPress={onClosePress} buttonTitle={'Close'} />
        </View>
      </View>
    </Modal>
  );
};

export default UserDetailModal;
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,.5)',
  },
  modalView: {
    margin: 20,
    padding: 35,
    borderRadius: 20,
    width: width - 20,
    backgroundColor: 'white',

    // shadow
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    elevation: 5,
    shadowRadius: 4,
    shadowOpacity: 0.25,
  },

  ageItems: {
    padding: 7,
    marginTop: 10,
    borderRadius: 10,
    flexDirection: 'row',
    marginHorizontal: 10,
  },
  ageContainer: {
    width: '100%',
    flexWrap: 'wrap',
    flexDirection: 'row',
    marginBottom: 15,
  },
  ageText: {
    fontSize: 15,
    color: 'white',
  },
});
