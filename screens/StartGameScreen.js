import { View, TextInput, StyleSheet, Alert } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import { useState } from "react";
import Colors from "../contants/Colors";

function StartGameSreen ({onPickNumber}) {
    const [enteredText, setEnteredText] = useState('');
    function enteredTextHandler(enteredText) {
        setEnteredText(enteredText)
    }
    function resetInputHandler() {
        setEnteredText('')
    }
    function confirmInputHandler() {
        const chosenNumber = Number.parseInt(enteredText);
        if (isNaN(chosenNumber) || chosenNumber<=0 || chosenNumber>99) {
            Alert.alert("Invalid Number!", "Number has to be a number between 0 and 99", [{
                text: "Okay",
                style: "destructive",
                onPress: resetInputHandler
            }])
            return;
        }
        onPickNumber(enteredText);
    }
    return (
        <View style={styles.inputContainer}>
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
        </View>
    )
}

export default StartGameSreen;

const styles = StyleSheet.create({
    inputContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 100,
        marginHorizontal: 24,
        padding: 16,
        backgroundColor: Colors.primary800,
        borderRadius: 8,
        // Shadow android
        elevation: 4,
        //shadow iOS
        shadowColor: 'red',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.25
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