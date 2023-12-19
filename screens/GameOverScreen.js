import { StyleSheet, Text, View } from 'react-native'
import Title from '../components/Title'
import Colors from '../constants/colors'
import PrimaryButton from '../components/PrimaryButton'



export default function GameOverScreen({roundsNumber, userNumber, onStartNewGame}) {


  return (
    <View style={styles.container}>
      <Title>GAME OVER</Title>
      <View style={styles.summaryContainer}>
        <Text style={styles.summaryText}>
          Your phone needed 
          <Text style={styles.highlight}> {roundsNumber} </Text> 
          rounds to guess the number 
          <Text style={styles.highlight}> {userNumber} </Text>
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({

  container:{
    marginTop:100,
    padding:20,
  },
  summaryContainer:{
   marginTop:100
  },
  summaryText:{
   fontSize:28,
   textAlign:"center",
   color:Colors.primary2,
   fontWeight:"bold"

  },
  highlight:{
   color: Colors.accent1
  } ,
  buttonContainer:{
    marginTop:50
  }

})

