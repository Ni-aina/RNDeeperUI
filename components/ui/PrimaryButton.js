import { View, Text, Pressable, StyleSheet } from "react-native";
import Colors from "../../contants/Colors";

function PrimaryButton ({ children, onPress }) {

    return (
        <View style={styles.buttonOuterContainer}>
            <Pressable 
                style={({pressed}) => pressed ? [styles.buttonInnercontainer, styles.pressed] : styles.buttonInnercontainer} 
                onPress={onPress} 
                android_ripple={{color: Colors.primary600}}
            >
                <Text style={styles.buttonText}>{ children }</Text>
            </Pressable>
        </View>
    )
}

export default PrimaryButton;

const styles = StyleSheet.create({
    buttonOuterContainer: {
        margin: 4
    },
    buttonInnercontainer: {
        borderRadius: 28,
        backgroundColor: Colors.primary500,
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 2,
    },
    buttonText: {
        color: 'white',
        textAlign: 'center'
    },
    pressed: {
        opacity: 0.75
    }
})