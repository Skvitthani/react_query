import axios from 'axios';
import {useQuery} from 'react-query';
import React, {useState} from 'react';
import NameComp from '../components/NameComp';

import {FlatList, StyleSheet, TouchableOpacity, View} from 'react-native';
import UserDetailModal from '../components/UserDetailModal';

export interface renderItem {
  id: number;
  job: string;
  city: string;
  email: string;
  phone: string;
  state: string;
  gender: string;
  street: string;
  country: string;
  zipcode: string;
  latitude: number;
  longitude: number;
  last_name: string;
  first_name: string;
  date_of_birth: string;
  profile_picture: string;
}

const Screen3 = () => {
  const [userData, setUserData] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedUser, setSelectedUser] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState<number>(0);

  const onSuccess = (data: {data: {users: any}}) => {
    setUserData([...userData, ...data.data?.users] as any);
  };

  useQuery(
    ['pagination', pageNumber],
    () => {
      return axios.get(
        `https://api.slingacademy.com/v1/sample-data/users?offset=${pageNumber}&limit=10`,
      );
    },
    {
      onSuccess,
    },
  );

  const renderItem = ({item}: {item: renderItem}) => {
    return (
      <TouchableOpacity
        style={styles.renderComponentStyle}
        activeOpacity={0.7}
        onPress={() => {
          setIsVisible(true);
          setSelectedUser(item?.id);
        }}>
        <NameComp value={item?.id?.toString()} title="ID" isWhite={true} />
        <NameComp
          isWhite={true}
          value={`${item?.first_name} ${item?.last_name}`}
          title="Name"
        />
        <NameComp value={item?.gender} title="Gender" isWhite={true} />
        <NameComp value={item?.country} title="Country" isWhite={true} />
        <NameComp value={item?.street} title="Street" isWhite={true} />
      </TouchableOpacity>
    );
  };

  const onEndReached = () => {
    setPageNumber(pre => pre + 10);
  };

  return (
    <View style={styles.container}>
      <UserDetailModal
        setIsVisible={setIsVisible}
        modalVisible={isVisible}
        user={selectedUser}
      />
      <FlatList
        data={userData}
        renderItem={renderItem}
        onEndReached={onEndReached}
      />
    </View>
  );
};

export default Screen3;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  renderComponentStyle: {
    padding: 10,
    marginTop: 10,
    borderRadius: 10,
    marginHorizontal: 20,
    backgroundColor: 'darkgreen',
  },
});
