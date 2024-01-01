import React, {useCallback} from 'react';
import axios from 'axios';
import {useQuery} from 'react-query';
import {Button, FlatList, StyleSheet, Text, View} from 'react-native';

interface useQuerytype {
  data: any;
  error: any;
  isError: boolean;
  isLoading: boolean;
  isFetching: boolean;
  refetch: () => void;
}

interface renderItem {
  id: number;
  title: string;
  userId: number;
  completed: boolean;
}

const Screen1 = () => {
  const onSuccess = (data: any) => {
    console.log('success function called', data?.data?.length);
  };

  const onError = (error: any) => {
    console.log('error function called', error);
  };

  const {data, error, isLoading, isError, refetch}: useQuerytype = useQuery(
    'dummy-data',
    () => {
      return axios.get('https://jsonplaceholder.typicode.com/todos');
    },
    {
      enabled: false,
      onError: onError,
      onSuccess: onSuccess,
      select: data => {
        const newdata = data?.data?.map((item: renderItem) => item?.title);
        return newdata;
      },
    },
  );

  const renderItem = useCallback(({item}: {item: string}) => {
    return (
      <View style={styles.titleView}>
        <Text style={styles.renderText}>Title :: </Text>
        <Text style={{color: 'black'}}>{item}</Text>
      </View>
    );
  }, []);

  return (
    <View style={styles.container}>
      <Button title="Fetch Data" onPress={refetch} />
      {isError && <Text>{error?.message}</Text>}
      {isLoading && <Text>Loading....</Text>}
      <FlatList
        data={data?.slice(0, 20)}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default Screen1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  renderText: {
    fontSize: 15,
    color: 'black',
    fontWeight: 'bold',
  },
  titleView: {
    padding: 10,
    marginTop: 20,
    flexWrap: 'wrap',
    flexDirection: 'row',
    backgroundColor: 'lightblue',
  },
});
