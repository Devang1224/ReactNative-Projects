import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'
import Colors from '../constants/colors'

export default function NumberContainer({children}) {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  )
}

const deviceWidth = Dimensions.get('window').width; // to make UI more responsive

const styles = StyleSheet.create({

container:{
 borderWidth:4,
 borderColor:Colors.accent1,
 padding: deviceWidth<380 ? 12 : 24,     
 borderRadius:8,
 margin:24,
 alignItems:"center",
 justifyContent:"center",
},
numberText:{
color:Colors.accent1,
fontSize:36,
fontWeight:"bold"
}

})