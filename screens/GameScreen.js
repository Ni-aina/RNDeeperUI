import { View, StyleSheet, Alert } from "react-native";
import Title from "../components/ui/Title";
import NumberContainer from "../components/game/NumberContainer";
import { useEffect, useState } from "react";
import PrimaryButton from '../components/ui/PrimaryButton';
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
import { AntDesign } from "@expo/vector-icons";

function generateRandomBetween(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;

    if (rndNum === exclude) {
        return generateRandomBetween(min, max, exclude);
    } else {
        return rndNum;
    }
}
let minBoundary = 1;
let maxBoundary = 100;

function GameSreen({ userNumber, onGameOver }) {
    const initialGuess = generateRandomBetween(1, 100, userNumber);
    const [currentGuess, setCurrentGuess] = useState(initialGuess);

    function nextGuessHandler(direction) {
        if (direction === "lower" && currentGuess < userNumber
            || direction === "greater" && currentGuess > userNumber) {
            Alert.alert("Don't lie!", "You know that this is wrong...", [{
                text: "Sorry!",
                style: "cancel"
            }])
            return;
        }
        if (direction === "lower") {
            maxBoundary = currentGuess;
        }
        else {
            minBoundary = currentGuess + 1;
        }
        const newRndNumber = generateRandomBetween(minBoundary, maxBoundary, currentGuess);
        setCurrentGuess(newRndNumber);
    }
    useEffect(() => {
        if (currentGuess === userNumber)
            onGameOver();
    }, [currentGuess, userNumber, onGameOver])

    return (
        <View style={styles.screen}>
            <Title>Oppenent's guess</Title>
            <Card>
                <NumberContainer>{currentGuess}</NumberContainer>
                <InstructionText style={styles.instructionText}>Higher or lower</InstructionText>
                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
                            <AntDesign name="minus" size={24} color={"white"}/>
                        </PrimaryButton>
                    </View>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>
                            <AntDesign name="plus" size={24} color={"white"}/>
                        </PrimaryButton>
                    </View>
                </View>
            </Card>
        </View>
    )
}

export default GameSreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24
    },
    instructionText: {
        marginBottom: 16
    },
    buttonsContainer: {
        flexDirection: 'row'
    },
    buttonContainer: {
        flex: 1
    }
})