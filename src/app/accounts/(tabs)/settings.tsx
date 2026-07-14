
import { SecureStorage } from "@/services/secureStore";
import { useRouter } from "expo-router";
import { Alert, Pressable, StyleSheet, Text, View } from "react-native";

export default function Settings() {
    const router = useRouter();

    const handleLogout = () => {
        Alert.alert(
            "Logout",
            "Are you sure you want to logout?",
            [
                {
                    text: "Cancel",
                    onPress: () => {},
                    style: "cancel",
                },
                {
                    text: "Logout",
                    onPress: async () => {
                        try {
                            // Clear the access token
                            await SecureStorage.clear();
                            // Navigate back to home (auth page)
                            router.replace("/home");
                        } catch (error) {
                            console.error("Logout error:", error);
                            Alert.alert("Error", "Failed to logout. Please try again.");
                        }
                    },
                    style: "destructive",
                },
            ]
        );
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Settings</Text>
            </View>

            <View style={styles.content}>
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Account</Text>

                    <Pressable style={styles.optionButton} onPress={handleLogout}>
                        <Text style={styles.optionText}>Preferences</Text>
                        <Text style={styles.optionArrow}>›</Text>
                    </Pressable>

                    <Pressable style={styles.optionButton}>
                        <Text style={styles.optionText}>Notifications</Text>
                        <Text style={styles.optionArrow}>›</Text>
                    </Pressable>

                    <Pressable style={styles.optionButton}>
                        <Text style={styles.optionText}>Privacy</Text>
                        <Text style={styles.optionArrow}>›</Text>
                    </Pressable>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Support</Text>

                    <Pressable style={styles.optionButton}>
                        <Text style={styles.optionText}>Help Center</Text>
                        <Text style={styles.optionArrow}>›</Text>
                    </Pressable>

                    <Pressable style={styles.optionButton}>
                        <Text style={styles.optionText}>About</Text>
                        <Text style={styles.optionArrow}>›</Text>
                    </Pressable>
                </View>

                <Pressable style={styles.logoutButton} onPress={handleLogout}>
                    <Text style={styles.logoutButtonText}>Logout</Text>
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#100f0f",
    },
    header: {
        paddingHorizontal: 16,
        paddingVertical: 20,
        borderBottomWidth: 1,
        borderBottomColor: "#2a2a2d",
    },
    title: {
        color: "#ffffff",
        fontSize: 28,
        fontWeight: "700",
    },
    content: {
        flex: 1,
        paddingVertical: 16,
    },
    section: {
        marginBottom: 24,
    },
    sectionTitle: {
        color: "#8f8f8f",
        fontSize: 12,
        fontWeight: "600",
        marginLeft: 16,
        marginBottom: 8,
        textTransform: "uppercase",
        letterSpacing: 0.5,
    },
    optionButton: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 16,
        paddingVertical: 16,
        borderBottomWidth: 1,
        borderBottomColor: "#1b1a1c",
    },
    optionText: {
        color: "#f5f5f5",
        fontSize: 16,
        fontWeight: "500",
    },
    optionArrow: {
        color: "#8f8f8f",
        fontSize: 18,
    },
    logoutButton: {
        marginHorizontal: 16,
        marginTop: 32,
        backgroundColor: "#8B0000",
        borderRadius: 12,
        paddingVertical: 14,
        alignItems: "center",
    },
    logoutButtonText: {
        color: "#ffffff",
        fontSize: 16,
        fontWeight: "700",
    },
});
