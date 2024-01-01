import React from 'react';
import {StyleSheet, Text, TextStyle, View} from 'react-native';

interface nameComp {
  value: string | undefined;
  title: string;
  isWhite?: boolean;
}

const NameComp = ({value, title, isWhite}: nameComp) => {
  return (
    <View style={styles.container}>
      <View style={styles.flexStyle}>
        <Text style={[styles.titleStyle, {color: isWhite ? 'white' : 'black'}]}>
          {title}
        </Text>
      </View>
      <Text style={[styles.deshStyle, {color: isWhite ? 'white' : 'black'}]}>
        :-
      </Text>
      <View style={styles.flexStyle}>
        <Text style={[styles.valueStyle, {color: isWhite ? 'white' : 'black'}]}>
          {value}
        </Text>
      </View>
    </View>
  );
};

export default NameComp;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  flexStyle: {
    flex: 1,
  },
  titleStyle: {
    color: 'white',
  },
  valueStyle: {
    fontSize: 15,
    color: 'white',
    fontWeight: 'bold',
  },
  deshStyle: {
    fontSize: 13,
    marginRight: 10,
  },
});
