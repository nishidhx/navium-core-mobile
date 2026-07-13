import { useState } from "react";
import { Animated, Image, StyleSheet, Text, View } from "react-native";
import { UserIcon } from "./userIcon";
import { UserStats } from "./userStats";

export const UserProfile = () => {
    const [userData, setUserData] = useState({});

    return (
        <Animated.View style={UserProfileStyles.Container}>
            <View style={UserProfileStyles.BannerContainer}>
                <Image
                    source={require("../../../assets/images/banner.jpeg")}
                    style={UserProfileStyles.BannerImage}
                    resizeMode="cover"
                />
                <View style={UserProfileStyles.IconWrapper}>
                    <UserIcon />
                </View>
                <View style={UserProfileStyles.ProfileDescripiton}>
                    <View style={UserProfileStyles.NameContainer}>
                        <Text style={{color: "white", width: "100%", textAlign: "center", fontSize: 20, fontWeight: "bold"}}>Nishidh Singh</Text>
                    </View>
                    <View>
                        <Text style={{color: "grey", width: "100%", textAlign: "center", fontSize: 15}}>@xnishidh</Text>
                    </View>
                    <UserStats />
                </View>
            </View>
        </Animated.View>
    )
}

const UserProfileStyles = StyleSheet.create({
    Container: {
        backgroundColor: "#100f0f",
        flex: 1,
        width: "100%"
    },
    BannerContainer: {
        position: "relative",
        width: "100%",
        height: 200,
    },
    BannerImage: {
        width: "100%",
        height: "100%",
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50
    },
    IconWrapper: {
        position: "absolute",
        bottom: -50,
        alignSelf: "center"
    },
    ProfileDescripiton: {
        padding: 10,
        marginTop: 50,
        height: "80%",
    },
    NameContainer: {
        width: "100%",
        maxHeight: 40,
    }
})