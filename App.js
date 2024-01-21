import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import StartGameSreen from './screens/StartGameScreen';
import GameSreen from './screens/GameScreen';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import Colors from './contants/Colors';

export default function App() {
  const [userNumber, setUserNumber] = useState()

  function pickedNumberHandler (pickedNumber) {
    setUserNumber(pickedNumber);
  }

  let screen = <StartGameSreen onPickNumber={pickedNumberHandler}/>

  if (userNumber) {
    screen = <GameSreen />
  }

  return (
    <LinearGradient colors={[Colors.primary700,Colors. accent500]} style={styles.rootscreen}>
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
