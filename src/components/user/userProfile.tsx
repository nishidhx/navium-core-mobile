import { useState } from "react";
import { Animated, StyleSheet, Text } from "react-native";

export const UserProfile = () => {
    const [userData, setUserData] = useState({});

    return (
        <Animated.View style={UserProfileStyles.Container}>
            <Text>Hello</Text>
        </Animated.View>
    )
}

const UserProfileStyles = StyleSheet.create({
    Container: {
        backgroundColor: "black",
        padding: 10,
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        width: "100%"
    }
})