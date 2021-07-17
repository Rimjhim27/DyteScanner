import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>DyteScanner</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'darkblue',
    padding: 10,
    height: 50,
  },
  text:{
      color:'#fff',
      fontSize: 20,
      textAlign: 'center',
  },
});
