import { Container } from "@/components/screen/container";
import { getCurrentThemeObject, subscribeToTheme } from "@/constants/theme";
import { BackArrow, Information } from "@/icons/navIcons";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useState, useSyncExternalStore } from "react";
import { Image, Pressable, StyleSheet, Text, TextInput, View } from "react-native";

export default function ChatDetailScreen() {
  const router = useRouter();
  const { id, image } = useLocalSearchParams<{ id?: string; image?: string }>();
  const currentTheme = useSyncExternalStore(subscribeToTheme, getCurrentThemeObject, getCurrentThemeObject);
  const [message, setMessage] = useState("");
  const imageUrl = typeof image === "string" ? image : undefined;
  const avatarSource = imageUrl ? { uri: imageUrl } : require("../../../assets/images/profile.png");

  const handleSend = () => {
    if (!message.trim()) return;
    setMessage("");
  };

  return (
    <Container style={styles.container}>
      <Pressable onPress={() => router.back()} style={styles.backButton}>
        <BackArrow color={"#60a5fa"} size={18} /><Text style={styles.backText}>Back</Text>
      </Pressable>
      

      <View style={styles.titleContainer}>
        <View style={[styles.titleWrapper, {
          backgroundColor: currentTheme.SecondaryBackgroundColor,
          borderColor: currentTheme.borderColor,
        }]}>
          <View style={[styles.imageWrapper]}>
        <Image source={avatarSource} style={[styles.profileImage, { borderWidth: 1, borderColor: currentTheme.borderColor }]} />
      </View>
          <Text
            style={[
              styles.title,
              {
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
          <Information color={currentTheme.textColor} size={26} />
        </Pressable>
      </View>

      <View style={styles.composer}>
        <TextInput
          value={message}
          onChangeText={setMessage}
          placeholder="Type a message"
          placeholderTextColor={currentTheme.secondaryFontColor ?? "#94a3b8"}
          style={[
            styles.input,
            {
              backgroundColor: currentTheme.SecondaryBackgroundColor,
              borderColor: currentTheme.borderColor,
              color: currentTheme.textColor,
            },
          ]}
          multiline
        />
        <Pressable onPress={handleSend} style={styles.sendButton}>
          <Text style={styles.sendText}>Send</Text>
        </Pressable>
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    paddingBottom: 100,
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
    marginLeft: 10,
  marginRight: 12,
  justifyContent: "center",
  alignItems: "center",
  },
  profileImage: {
    width: 48,
  height: 48,
  borderRadius: 24,
  },
  titleContainer: {
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    alignContent: "center",
    gap: 8,
  },
  titleWrapper: {
    flex: 1,
  flexDirection: "row",
  alignItems: "center",
  borderWidth: 1,
  borderRadius: 50,
  paddingVertical: 5,
  paddingHorizontal: 8,
  },

  title: {
    paddingVertical: 10,
    width: "90%",
    paddingHorizontal: 16,
    color: "#fff",
    fontSize: 24,
    fontWeight: "700",

  },
  subtitle: {
    height: 60,
    width: 60,
    borderWidth: 1,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  composer: {
    position: "absolute",
    left: 16,
    right: 16,
    bottom: 24,
    flexDirection: "row",
    alignItems: "flex-end",
    gap: 10,
  },
  input: {
    flex: 1,
    minHeight: 46,
    maxHeight: 120,
    borderWidth: 1,
    borderRadius: 22,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 15,
  },
  sendButton: {
    height: 46,
    paddingHorizontal: 16,
    borderRadius: 22,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#60a5fa",
  },
  sendText: {
    color: "#fff",
    fontWeight: "600",
  },
});
