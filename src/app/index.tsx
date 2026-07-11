"use client"
import { InitialPage } from '@/components/auth/ViewPage';
import { useFonts } from 'expo-font';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';

const App = () => {
  const router = useRouter();
  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace('/home');
    }, 3000);

    return () => clearTimeout(timer);
  }, [router]);
  const [fontsLoaded] = useFonts({
    'HankenGrotesk-Italic': require('../../assets/fonts/HankenGrotesk-Italic-VariableFont_wght.ttf'),
    'HankenGrotesk-Variable': require('../../assets/fonts/HankenGrotesk-VariableFont_wght.ttf'),
    'IosevkaCharon-Bold': require('../../assets/fonts/IosevkaCharon-Bold.ttf')
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.screen}>
      <LinearGradient
                      colors={["#03217A", "#0460FF", "#FFFFFF"]}
                      style={styles.LinearGradientBg}
                      locations={[0, 0.27, 0.75]}
                  />
      <InitialPage />
    </View>
  );
};

const styles = StyleSheet.create({
  LinearGradientBg: {
        height: "100%",
        width: "100%",
        position: "absolute"
    },
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#100f0f",
    // marginTop: 20,
  }
})

export default App;
