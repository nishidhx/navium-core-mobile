import { LinearGradient } from "expo-linear-gradient"
import { Button, Image, StyleSheet, Text, View } from "react-native"
import Animated from "react-native-reanimated"


export const AuthPage = () => {
    return (
        <Animated.View style={AuthPageStyles.Container}>
            <LinearGradient
                                  colors={["#03217A", "#0460FF", "#FFFFFF"]}
                                  style={AuthPageStyles.LinearGradientBg}
                                  locations={[0, 0.27, 0.75]}
                              />

        <View style={AuthPageStyles.SecondContainer}>

            <View style={AuthPageStyles.Header}>
                <Image
                    source={require("@/assets/images/icon.png")}
                    style={AuthPageStyles.Icon}
                    resizeMode="contain"
                />
                <Animated.Text style={AuthPageStyles.Title}>NAVIUM</Animated.Text>
            </View>
            <View style={AuthPageStyles.Hero}>
                <Text style={AuthPageStyles.Text}>Keep it simple. Less typing, more talking.</Text>
            </View>

            <View style={AuthPageStyles.ButtonsView}>
                <View style={AuthPageStyles.GetStartedButtonView}>
                    <Button color={"white"} title="Get Started" />
                </View>
                <View style={AuthPageStyles.AlternateButtonView}>
                    <Button color={"black"} title="I already have an account" />
                </View>
            </View>

            <View style={AuthPageStyles.footer}>
                <Text style={AuthPageStyles.FooterText}>By continuing you agree to our Terms & Services and Privacy Policy.</Text>

            </View>
        </View>
        </Animated.View>
    )
}

const AuthPageStyles = StyleSheet.create({
    footer: {
        marginTop: 0,
        width: "70%",
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center"
    },
    FooterText: {
        fontSize: 10,
        textAlign: "center",
        width: "100%",
        paddingBottom: 20
    },
    LinearGradientBg: {
        height: "100%",
        width: "100%",
        position: "absolute"
    },
    Header: {
        marginTop: 50,
        height: 150,
        flexDirection: "row",
        alignItems: "center",
        gap: 12,
    },
    Container: {
        flex: 1,
        width: "100%",
        justifyContent: "flex-start",
        alignItems: "stretch",
        flexDirection: "column",
    },
    SecondContainer: {
        flex: 1,
        width: "100%",
        justifyContent: "flex-start",
        alignItems: "stretch",
        flexDirection: "column",
        paddingHorizontal: 20,
        paddingVertical: 20
    },
    Hero: {
        zIndex: 999,
        flex: 1,
        marginTop: 320
    },
    Icon: {
        width: 30,
        height: 40,
        marginBottom: 16,
    },
    Title: {
        fontFamily: "IosevkaCharon-Bold",
        color: "#ffffff",
        fontSize: 30,
        textAlign: "center"
    },
    Text: {
        fontFamily: "IosevkaCharon-Bold",
        color: "black",
        fontSize: 35,
        marginBottom: 24,
        fontWeight: "bold"
    },
    ButtonsView: {
        maxHeight: "20%",
        gap: 10,
        paddingBottom: 30,
    },
    GetStartedButtonView: {
        width: "100%",
        height: 50,
        justifyContent: "center",
        backgroundColor: "black",
        color: "white",
        fontWeight: "bold",
        borderRadius: 20
    },
    AlternateButtonView: {
        width: "100%",
        height: 50,
        justifyContent: "center",
        backgroundColor: "#63626227",
        fontWeight: "bold",
        borderRadius: 20
    }
})