import { StyleSheet, Text, View } from 'react-native'
import React, { Children } from 'react'
import Colors from '../constants/colors'

export default function Title({children}) {
  return (
    <Text style={styles.title}>{children}</Text>
  )
}

const styles = StyleSheet.create({
    title:{
        fontSize:24,
        fontWeight:'bold',
        color:"white",
        textAlign:"center",
        borderWidth:2,
        padding:12,
        borderColor:"white",
      }
})