import {
    View,
    TextInput,
    StyleSheet,
    Alert,
    useWindowDimensions,
    KeyboardAvoidingView,
    ScrollView
} from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import { useState } from "react";
import Colors from "../contants/Colors";
import Title from "../components/ui/Title";
import InstructionText from "../components/ui/InstructionText";
import Card from "../components/ui/Card";

function StartGameSreen({ onPickNumber }) {
    const [enteredText, setEnteredText] = useState('');
    const { width, height } = useWindowDimensions();
    function enteredTextHandler(enteredText) {
        setEnteredText(enteredText)
    }
    function resetInputHandler() {
        setEnteredText('')
    }
    function confirmInputHandler() {
        const chosenNumber = Number.parseInt(enteredText);
        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert("Invalid Number!", "Number has to be a number between 0 and 99", [{
                text: "Okay",
                style: "destructive",
                onPress: resetInputHandler
            }])
            return;
        }
        onPickNumber(enteredText);
    }
    const marginTopDistance = height < 380 ? 30 : 100;
    return (
        <ScrollView style={styles.rootContainer}>
            <KeyboardAvoidingView style={styles.rootContainer} behavior="position">
                <View style={[styles.rootContainer, { marginTop: marginTopDistance }]}>
                    <Title>Guess my Number</Title>
                    <Card style={styles.inputContainer}>
                        <InstructionText>Enter a Number</InstructionText>
                        <TextInput
                            style={styles.numberInput}
                            maxLength={2}
                            keyboardType="number-pad"
                            autoCapitalize="none"
                            autoCorrect={false}
                            onChangeText={enteredTextHandler}
                            value={enteredText}
                        />
                        <View style={styles.buttonsContainer}>
                            <View style={styles.buttonContainer}>
                                <PrimaryButton onPress={resetInputHandler}> Reset </PrimaryButton>
                            </View>
                            <View style={styles.buttonContainer}>
                                <PrimaryButton onPress={confirmInputHandler}> Confirm </PrimaryButton>
                            </View>
                        </View>
                    </Card>
                </View>
            </KeyboardAvoidingView>
        </ScrollView>
    )
}

export default StartGameSreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1
    },
    numberInput: {
        height: 50,
        width: 50,
        fontSize: 32,
        borderBottomColor: Colors.accent500,
        borderBottomWidth: 2,
        color: Colors.accent500,
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    buttonsContainer: {
        flexDirection: 'row'
    },
    buttonContainer: {
        flex: 1
    }
})