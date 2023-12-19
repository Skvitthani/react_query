import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {useQuery} from '@apollo/client';
import {GET_COUNTRIES_DETAILS_ON_ID} from '../services/Query';

const SearchCountryScreen = () => {
  const [searchValue, setSearchValue] = useState('');
  const [countryCode, setCountryCode] = useState('');

  const {data} = useQuery(GET_COUNTRIES_DETAILS_ON_ID, {
    variables: {
      code: countryCode?.toUpperCase(),
    },
  });
  console.log('data', data);
  const onsearchPress = () => {
    setCountryCode(searchValue);
  };

  return (
    <View style={styles.container}>
      <TextInput
        value={searchValue}
        style={styles.inputStyle}
        onChangeText={txt => {
          setSearchValue(txt);
        }}
        placeholder="Search Countries"
      />
      <TouchableOpacity style={styles.searchButton} onPress={onsearchPress}>
        <Text style={styles.fontStyle}>Search</Text>
      </TouchableOpacity>

      {data?.country ? (
        <View style={styles.countryDetailView}>
          <Text style={styles.fontStyle}>Code : {data?.country?.code}</Text>
          <Text style={styles.fontStyle}>Name : {data?.country?.name}</Text>
          <Text style={styles.fontStyle}>Phone : {data?.country?.phone}</Text>
        </View>
      ) : (
        <View style={styles.noDataView}>
          <Text style={styles.noDataText}>No Data</Text>
        </View>
      )}
    </View>
  );
};

export default SearchCountryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  inputStyle: {
    marginTop: 10,
    borderWidth: 1,
    borderRadius: 15,
    marginHorizontal: 10,
  },
  searchButton: {
    padding: 20,
    marginTop: 10,
    borderRadius: 20,
    alignSelf: 'center',
    backgroundColor: 'gray',
  },
  fontStyle: {
    color: 'white',
  },
  countryDetailView: {
    padding: 10,
    borderRadius: 20,
    marginVertical: 10,
    marginHorizontal: 20,
    backgroundColor: 'gray',
  },
  noDataText: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  noDataView: {
    flex: 1,
    justifyContent: 'center',
  },
});
