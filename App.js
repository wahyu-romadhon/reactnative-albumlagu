import React from 'react';
import { View, StyleSheet } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

class App extends React.Component {
  render() {
    return (
      <View style={styles.containerStyle}>
        <Header headerText={'Linov Music!'} />
        <AlbumList />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: '#2f353a',
    flex: 1
  }
});

export default App;
