import { Alert, SafeAreaView, StyleSheet, Text, View } from "react-native";
import Title from "../components/Title";
import { useEffect, useState } from "react";
import NumberContainer from "../components/NumberContainer";
import PrimaryButton from "../components/PrimaryButton";
import {Ionicons} from "@expo/vector-icons"
function generateRandomNumber(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomNumber(min, max, exclude);
  } else {
    return rndNum;
  }
}

let minBoundary = 1;
let maxBoundary = 100;

export default function GameScreen({ userNumber,onGameOver }) {
  const initialGuess = generateRandomNumber(
    1,
    100,
    userNumber,
  );
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guessRounds,setGuessRounds] = useState([initialGuess])

  function nextGuessHandler(direction) {

   if((direction === 'lower' && currentGuess<userNumber) || (direction==="higher" && currentGuess>userNumber))
    {
      Alert.alert("wrong Choice","",[{text:"select again",style:'cancel'}])
      return;
    }
    if (direction === "lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }

    const newRndNumber = generateRandomNumber(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setCurrentGuess(newRndNumber);
    setGuessRounds((prev)=>[newRndNumber, ...prev])
  }

useEffect(()=>{
if(currentGuess === userNumber){
 onGameOver(guessRounds.length-1);
}
},[currentGuess,userNumber,onGameOver])


useEffect(()=>{
  minBoundary = 1;
  maxBoundary = 100;
},[])

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View>
        <Text style={styles.buttonsTitle}>Higher or Lower?</Text>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this,'lower')} style={styles.buttons}>
              <Ionicons name="md-remove" size={24} color="white"/>
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this,'higher')} style={styles.buttons}>
            <Ionicons name="md-add" size={24} color="white"/>
            </PrimaryButton>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
    marginTop: 80,
  },
  buttonsContainer:{
    flexDirection:"row",
    justifyContent:"center"
  },
buttonsTitle:{
  fontSize:20,
  color:"white",
  padding:10,
  textAlign:"center"
},
  buttonContainer:{ 
   flex:1
  },

});
