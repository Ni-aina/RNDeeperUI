import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import StartGameSreen from './screens/StartGameScreen';
import GameSreen from './screens/GameScreen';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import Colors from './contants/Colors';
import GameOverSreen from './screens/GameOverScreen';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(true);
  const [roundNumber, setRoundNumber] = useState(0);

  const [fontsLoaded] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(Number.parseInt(pickedNumber));
    setGameIsOver(false);
  }

  let screen = <StartGameSreen onPickNumber={pickedNumberHandler} />

  function gameOverHandler(roundsOfNumber) {
    setGameIsOver(true);
    setRoundNumber(roundsOfNumber)
  }

  function startNewGameHandler() {
    setUserNumber(null);
    setRoundNumber(0);
  }

  if (userNumber) {
    screen = <GameSreen userNumber={userNumber} onGameOver={gameOverHandler} />
  }

  if (gameIsOver && userNumber) {
    screen = <GameOverSreen
      roundNumber={roundNumber}
      userNumber={userNumber}
      onStartNewGame={startNewGameHandler}
    />
  }


  return (
    <LinearGradient colors={[Colors.primary700, Colors.accent500]} style={styles.rootscreen}>
      <ImageBackground
        source={require('./assets/images/background.jpg')}
        resizeMode='cover'
        style={styles.rootscreen}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.rootscreen}>
          {screen}
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootscreen: {
    flex: 1
  },
  backgroundImage: {
    opacity: 0.15
  }
});
