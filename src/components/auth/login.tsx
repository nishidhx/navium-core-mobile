
import { LinearGradient } from "expo-linear-gradient"
import { useRouter } from "expo-router"
import { useState } from "react"
import { Platform, Pressable, StyleSheet, Text, TextInput, View } from "react-native"

export const Login = () => {
    const router = useRouter()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleUserLogin = async () => {


    }

    return (
        <View style={styles.container}>
            <LinearGradient
                colors={["#03217A", "#0460FF", "#FFFFFF"]}
                style={styles.background}
                locations={[0, 0.3, 0.85]}
            />

            <View style={styles.content}>
                <View style={styles.header}>
                    <Text style={styles.eyebrow}>Welcome back</Text>
                    <Text style={styles.title}>Login to your account</Text>
                    <Text style={styles.subtitle}>Use your email and password to continue.</Text>
                </View>

                <View style={styles.card}>
                    <TextInput
                        style={styles.input}
                        value={email}
                        onChangeText={setEmail}
                        placeholder="Email address"
                        placeholderTextColor="#7B8AAE"
                        autoCapitalize="none"
                        keyboardType="email-address"
                    />

                    <TextInput
                        style={styles.input}
                        value={password}
                        onChangeText={setPassword}
                        placeholder="Password"
                        placeholderTextColor="#7B8AAE"
                        secureTextEntry
                    />

                    <Pressable style={styles.primaryButton} onPress={() => router.push("/accounts/(tabs)/profile")}>
                        <Text style={styles.primaryButtonText}>Log in</Text>
                    </Pressable>

                    <Pressable onPress={() => router.back()}>
                        <Text style={styles.secondaryLink}>Back to home</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: "#07142b",
    },
    background: {
        height: "100%",
        width: "100%",
        position: "absolute"
    },
    content: {
        flex: 1,
        justifyContent: "center",
        paddingHorizontal: 24,
        paddingVertical: 32,
    },
    header: {
        marginBottom: 24,
        gap: 8,
    },
    eyebrow: {
        color: "#EAF2FF",
        fontSize: 14,
        fontWeight: "600",
        letterSpacing: 1.2,
        textTransform: "uppercase",
    },
    title: {
        color: "#FFFFFF",
        fontSize: 30,
        fontWeight: "700",
    },
    subtitle: {
        color: "#EAF2FF",
        fontSize: 15,
        lineHeight: 22,
        maxWidth: 320,
    },
    card: {
        backgroundColor: "rgba(255, 255, 255, 0)",
        borderRadius: 24,
        gap: 14,
        ...Platform.select({
            ios: {
                shadowColor: "#000",
                shadowOpacity: 0.15,
                shadowRadius: 16,
                shadowOffset: { width: 0, height: 8 },
            },
            android: {
                elevation: 0,
            },
        }),
    },
    input: {
        borderWidth: 1,
        borderColor: "#D7E2F5",
        borderRadius: 14,
        paddingHorizontal: 14,
        paddingVertical: 12,
        fontSize: 15,
        color: "#07142B",
        backgroundColor: "#F8FAFF",
    },
    primaryButton: {
        marginTop: 8,
        backgroundColor: "#000000",
        borderRadius: 14,
        paddingVertical: 14,
        alignItems: "center",
    },
    primaryButtonText: {
        color: "#FFFFFF",
        fontSize: 16,
        fontWeight: "700",
    },
    secondaryLink: {
        textAlign: "center",
        color: "#1E4FD2",
        fontSize: 14,
        fontWeight: "600",
        marginTop: 4,
    },
})