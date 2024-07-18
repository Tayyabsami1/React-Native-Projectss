/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */

import React from 'react';
// TODO : Check why when i use SafeAreaView my text on mobile disapears :'(
import {
  SafeAreaView,
  View, // div in the world of web
  StyleSheet,
  useColorScheme,
  Text,
  ScrollView,
} from 'react-native';
import FlatCard from './Components/FlatCard';
import ElevatedCards from './Components/ElevatedCards';
// import FlatCard from './Components/FlatCard';


function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <SafeAreaView>
        <ScrollView>
        <FlatCard/>
        <ElevatedCards/>
        </ScrollView>
      </SafeAreaView>

  );
}

// Allign items center in app  works like justifycontent in web ( work in X-axis in mobile)
// Justify conetent center in app works like allign items in web ( work in Y-axis in mobile)

const styles = StyleSheet.create({
  whiteText:{
    color:"#FFFFFF",
  },
  blackText:{
    color:'#000000',
  }
});
export default App;
