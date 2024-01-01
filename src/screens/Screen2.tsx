import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import axios from 'axios';
import {useQuery} from 'react-query';
import React, {useState} from 'react';

interface renderItem {
  id: number;
  title: string;
  userId: number;
  completed: boolean;
}
const Screen2 = () => {
  const [id, setId] = useState<string | undefined>(undefined);
  const [data, setData] = useState<renderItem>();

  const onSuccess = ({data}: {data: renderItem}) => {
    setId(undefined);
    console.log('data----------', data);
    setData(data);
  };

  const {refetch} = useQuery(
    ['search-data', id],
    () => {
      return axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`);
    },
    {
      onSuccess: onSuccess,
      cacheTime: 0,
      enabled: false,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    },
  );

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          value={id}
          keyboardType={'numeric'}
          style={styles.inputStyle}
          placeholder="Enter id..."
          onChangeText={(txt: string | undefined) => {
            setId(txt);
          }}
        />
        <TouchableOpacity
          style={styles.buttonView}
          onPress={() => {
            if (id !== undefined) {
              refetch();
            }
          }}>
          <Text style={styles.txtColor}>Search</Text>
        </TouchableOpacity>
      </View>
      {data ? (
        <View style={styles.userDetailView}>
          <Text style={styles.txtColor}>Id :: {data?.id}</Text>
          <Text style={styles.txtColor}>Title :: {data?.title}</Text>
        </View>
      ) : (
        <Text style={{alignSelf: 'center', marginTop: 50}}>No Data</Text>
      )}
    </View>
  );
};

export default Screen2;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  inputStyle: {
    flex: 1,
    borderWidth: 1,
    paddingLeft: 10,
    borderRadius: 10,
    marginHorizontal: 10,
  },
  buttonView: {
    padding: 13,
    marginRight: 5,
    borderRadius: 10,
    justifyContent: 'center',
    backgroundColor: 'darkgreen',
  },
  inputContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  userDetailView: {
    padding: 10,
    marginTop: 15,
    borderRadius: 10,
    marginHorizontal: 10,
    backgroundColor: 'darkgreen',
  },
  txtColor: {color: 'white'},
});
