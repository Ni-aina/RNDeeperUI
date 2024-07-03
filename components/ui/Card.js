import { View, StyleSheet, Dimensions } from "react-native";
import Colors from "../../contants/Colors";

function Card ({children}) {
    return <View style={styles.inputContainer}>{children}</View>
}

export default Card;

const deviceWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
    inputContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: deviceWidth < 380 ? 100 : 20,
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
    }
})