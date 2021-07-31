
import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const Logo = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../../assets/logo_git.png')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      paddingTop: 50,
      paddingBottom: 20,
    },
    tinyLogo: {
      width: 80,
      height: 80,
    },
    logo: {
      width: 100,
      height: 100,
    },
  });

export default Logo;