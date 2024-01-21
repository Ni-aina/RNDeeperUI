import { View, StyleSheet } from "react-native";
import Title from "../components/ui/Title";
import NumberContainer from "../components/game/NumberContainer";
import { useState } from "react";

function generateRandomBetween(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;

    if (rndNum === exclude) {
        return generateRandomBetween(min, max, exclude);
    } else {
        return rndNum;
    }
}

function GameSreen ({userNumber}) {
    const initialGuess = generateRandomBetween(1, 100, userNumber);
    const [currentGuess, setCurrentGuess] = useState(initialGuess);
    return(
        <View style={styles.screen}>
            <Title>Oppenent's guess</Title>
            <NumberContainer>{currentGuess}</NumberContainer>
        </View>
    )
}

export default GameSreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24
    }
})