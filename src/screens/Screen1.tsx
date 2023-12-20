import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useQuery} from '@tanstack/react-query';

const Screen1 = () => {
  const {isLoading, data} = useQuery({
    queryKey: ['myKey'],
    queryFn: async () => {
      const response = await fetch(
        'https://api.github.com/repos/tannerlinsley/react-query',
      );

      return response.json();
    },
  });
  console.log('isLoading', isLoading);

  return (
    <View style={styles.container}>
      <Text>Screen1</Text>
    </View>
  );
};

export default Screen1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
