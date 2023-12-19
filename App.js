import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, SafeAreaView } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient';
import BackgroundImage from "./assets/images/background.jpg"
import { useState } from 'react';
import GameScreen from './screens/GameScreen';
import Colors from './constants/colors';
import GameOverScreen from './screens/GameOverScreen';

export default function App() {

const [userNumber,setUserNumber] = useState(null);
const [gameIsOver,setGameIsOver] = useState(true);
const [rounds,setRounds] = useState(0);

function pickedNumberHandler(pickedNumber)
{
  setUserNumber(pickedNumber);
  setGameIsOver(false);
}

function gameOverHandler(numberOfRounds){
  setGameIsOver(true);
  setRounds(numberOfRounds)
}


function handleStartNewGame(){
 setUserNumber(null);
 setRounds(0);
}



let screen = <StartGameScreen onPickNumber = {pickedNumberHandler}/>;

if(userNumber){
screen = <GameScreen userNumber={userNumber} onGameOver = {gameOverHandler} />;
}
if(gameIsOver && userNumber){
screen = <GameOverScreen userNumber={userNumber} roundsNumber={rounds} onStartNewGame={handleStartNewGame}/>;
}



  return (
    <LinearGradient  colors={['#4e0329', '#ddb52f']} style={styles.container}>
      <ImageBackground 
        source={BackgroundImage} 
        resizeMode="cover" 
        style={styles.backgroundImage}
        imageStyle={{opacity:0.4}}
        >
        <StatusBar style="auto"/>
        <SafeAreaView style={styles.container}>
         {screen}
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  backgroundImage:{
    flex:1,
  }
});
