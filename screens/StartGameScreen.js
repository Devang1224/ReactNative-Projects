import { StyleSheet, Text, TextInput, View, Alert } from 'react-native'
import PrimaryButton from '../components/PrimaryButton'
import { useState } from 'react'
import Colors from '../constants/colors'
import Title from '../components/Title'

export default function StartGameScreen({onPickNumber}) {

  const[inputValue,setInputValue] = useState('')

const handleInputChange = (value)=>{
   setInputValue(value)
}

const resetInputHandler = ()=>{
 setInputValue('')
}

const handleConfirmButton = ()=>{

   const chosenNumber = parseInt(inputValue);
   if(isNaN(chosenNumber) || chosenNumber<=0 || chosenNumber>99){
    Alert.alert('Invalid number!' , 
               "Number has to be a number between 1 and 99",
               [{text:"Okay", style:'destructive',onPress: resetInputHandler}]
               )
    return;
   }

   onPickNumber(chosenNumber);
   
}

  return (
    <View style={styles.rootContainer}>
      <Title>Guess My Number</Title>
    <View style={styles.inputContainer}>
      <Text style={styles.inputContainerTitle}>Enter a Number</Text>
      <TextInput 
        style={styles.numberInput}
        maxLength={2}
        keyboardType='number-pad'
        onChangeText={handleInputChange}
        value={inputValue}
       />
       <View style={styles.buttonsContainer}>
         <View style={styles.buttonContainer}>
           <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
         </View>
         <View style={styles.buttonContainer}>
           <PrimaryButton onPress={handleConfirmButton}>Confirm</PrimaryButton>
         </View>

      </View>
    </View>
    </View>
  )
}

const styles = StyleSheet.create({

rootContainer:{
flex:1,
marginTop:100,
alignItems:"center"

},
inputContainer:{
    justifyContent:"center",
    alignItems:"center",
    padding:16,
    marginTop:40,
    backgroundColor:Colors.primary3,
    marginHorizontal:24,
    borderRadius:8,
    elevation:10,
},
numberInput:{
  height:50,
  width:50,
  fontSize:32,
  borderBottomColor:Colors.accent1,
  borderBottomWidth:2,
  color:Colors.accent1,
  marginVertical:8,
  fontWeight:"bold",
  textAlign:"center",
},
inputContainerTitle:{
  color:Colors.accent1,
  fontSize:24,
}
,
buttonsContainer:{
 flexDirection:"row",
},
buttonContainer:{
  flex:1,
}


})