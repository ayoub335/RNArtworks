import React from 'react';
import {SafeAreaView} from 'react-native';
import {ArtWorksPage} from './src/pages';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ArtWorksPage />
    </SafeAreaView>
  );
}

export default App;
