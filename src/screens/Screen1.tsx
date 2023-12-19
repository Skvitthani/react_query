import {useQuery} from '@apollo/client';
import {GET_COUNTRIES_DETAILS} from '../services/Query';
import React, {useCallback, useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';

interface Items {
  code: string;
  name: string;
  capital: string;
  __typename: string;
}

const Screen1 = () => {
  const [countriesData, setCountriesData] = useState();

  const {loading, data} = useQuery(GET_COUNTRIES_DETAILS);

  useEffect(() => {
    const fetchData = () => {
      setCountriesData(data?.countries?.slice(0, 20));
    };
    fetchData();
  }, [loading]);

  const renderItem = useCallback(({item}: {item: Items}) => {
    return (
      <View style={styles.renderItemView}>
        <Text style={styles.fontStyle}>Name : {item?.name}</Text>
        <Text style={styles.fontStyle}>Capital : {item?.capital}</Text>
        <Text style={styles.fontStyle}>Code : {item?.code}</Text>
      </View>
    );
  }, []);

  return (
    <View style={styles.conatiner}>
      {loading ? (
        <View style={styles.loadinView}>
          <Text style={styles.loadingText}>Loading....</Text>
        </View>
      ) : (
        <FlatList
          renderItem={renderItem}
          data={countriesData}
          showsVerticalScrollIndicator={false}
        />
      )}
    </View>
  );
};

export default Screen1;

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    backgroundColor: 'white',
  },
  loadingText: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
  },
  loadinView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  renderItemView: {
    padding: 10,
    borderRadius: 20,
    marginVertical: 10,
    marginHorizontal: 20,
    backgroundColor: 'gray',
  },
  fontStyle: {
    color: 'white',
  },
});
