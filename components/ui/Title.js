import { Text, StyleSheet } from "react-native";
import Colors from "../../contants/Colors";

function Title({children}) {
    return <Text style={styles.title}>{children}</Text>
}

export default Title;

const styles = StyleSheet.create({
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 24,
        color: Colors.accent500,
        textAlign: 'center'
    }
})