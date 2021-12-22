import React, { Component } from 'react'
import { View, Text, StyleSheet} from 'react-native'
import FlatListExam from './src/FlatListExam'
export default class App extends Component{
  render(){
    return(
      <View style={styles.AppContainer}>
        <FlatListExam/>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  AppContainer: {
      flex: 1,
  }
})

