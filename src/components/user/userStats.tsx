import { StyleSheet, Text, View } from "react-native"

export const UserStats = () => {
    const stats = [
        { value: "120", label: "Post" },
        { value: "1.2k", label: "Followers" },
        { value: "872", label: "Following" },
    ]

    return (
        <View style={UserStatsStyles.UserStatsContainer}>
            <View>
                <Text style={UserStatsStyles.BioText}>
                    Ex @amazon
                    @samsung R&D • @jpmorganCFG{'\n'}
                    2025 Winner • @amazon hackon • code with{'\n'}
                    @cisco finalist
                </Text>
            </View>

            <View style={UserStatsStyles.UserStatsCountContainer}>
                {stats.map((item) => (
                    <View style={UserStatsStyles.StatItem} key={item.label}>
                        <Text style={UserStatsStyles.StatValue}>{item.value}</Text>
                        <Text style={UserStatsStyles.StatLabel}>{item.label}</Text>
                    </View>
                ))}
            </View>
        </View>
    )
}

const UserStatsStyles = StyleSheet.create({
    UserStatsContainer: {
        padding: 20,
        width: "100%",
    },
    BioText: {
        textAlign: "center",
        color: "white",
    },
    UserStatsCountContainer: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        marginTop: 20,
        paddingVertical: 12,
        borderWidth: 1,
        borderRadius: 20,
        borderColor: "rgba(234, 221, 227, 0.09)",
        backgroundColor: "rgba(234, 221, 227, 0.04)"
    },
    StatItem: {
        alignItems: "center",
    },
    StatValue: {
        color: "white",
        fontSize: 18,
        fontWeight: "700",
    },
    StatLabel: {
        color: "grey",
        fontSize: 12,
        marginTop: 4,
    },
})