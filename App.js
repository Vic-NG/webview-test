import React from 'react';
import { StyleSheet, View } from 'react-native';
import { WebView } from 'react-native-webview';

const YOUTUBE = 'https://www.youtube.com';
const GOOGLE = 'https://www.google.com/'



export default function App() {
  return (
    <View style={styles.container}>
      <View style={{ width: '100%', height: '100%' }}>
        <WebView
          source={{ uri: YOUTUBE }}
          onLoad={console.log('Loaded!')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 28,
    flex: 1,
    backgroundColor: '#222',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
