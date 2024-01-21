import { Text, StyleSheet } from "react-native";
import Colors from "../../contants/Colors";

function InstructionText ({children, style}) {
    return <Text style={[styles.textStyle, style]}>{ children }</Text>;
}

export default InstructionText;

const styles = StyleSheet.create({
    textStyle: {
        fontFamily: 'open-sans',
        fontSize: 18,
        color: Colors.accent500
    }
})