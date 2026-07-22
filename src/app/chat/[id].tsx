import { Container } from "@/components/screen/container";
import { getCurrentThemeObject, subscribeToTheme } from "@/constants/theme";
import { BackArrow, Information } from "@/icons/navIcons";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useSyncExternalStore } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

export default function ChatDetailScreen() {
  const router = useRouter();
  const { id, image } = useLocalSearchParams<{ id?: string; image?: string }>();
  const currentTheme = useSyncExternalStore(subscribeToTheme, getCurrentThemeObject, getCurrentThemeObject);
  const imageUrl = typeof image === "string" ? image : undefined;
  const avatarSource = imageUrl ? { uri: imageUrl } : require("../../../assets/images/profile.png");

  return (
    <Container style={styles.container}>
      <Pressable onPress={() => router.back()} style={styles.backButton}>
        <BackArrow color={"#60a5fa"} size={18} /><Text style={styles.backText}>Back</Text>
      </Pressable>
      <View style={[styles.imageWrapper]}>
        <Image source={avatarSource} style={[styles.profileImage, {borderWidth: 1, borderColor: currentTheme.borderColor}]} />
      </View>

      <View style={styles.titleContainer}>
        
        <View style={styles.titleWrapper}>
          <Text
            style={[
              styles.title,
              {
                backgroundColor: currentTheme.SecondaryBackgroundColor,
                borderColor: currentTheme.borderColor,
                color: currentTheme.textColor
              },
            ]}
          >
            {id ?? "details"}
          </Text>
        </View>

        <Pressable
          style={[
            styles.subtitle,
            {
              backgroundColor: currentTheme.SecondaryBackgroundColor,
              borderColor: currentTheme.borderColor,
            },
          ]}
        >
          <Information color={currentTheme.textColor} size={24} />
        </Pressable>
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
  },
  backButton: {
    paddingHorizontal: 14,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  backText: {
    color: "#60a5fa",
    fontSize: 16,
  },
  imageWrapper: {
    paddingHorizontal: 20,
    marginBottom: 16,
  },
  profileImage: {
    width: 70,
    height: 70,
    borderRadius: 45,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.16)",
  },
  titleContainer: {
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    alignContent: "center",
  },
  titleWrapper: {
    flex: 1,
    justifyContent: "center",
  },

  title: {
    borderWidth: 1,
    borderRadius: 20,
    paddingVertical: 10,
    width: "90%",
    paddingHorizontal: 16,
    color: "#fff",
    fontSize: 24,
    fontWeight: "700",
    
  },
  subtitle: {
    height: 50,
    width: 50,
    borderWidth: 1,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    color: "#cbd5e1",
  },
});
