import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useEffect, useState } from "react";
import { useColorScheme } from "react-native";

type ThemeMode = "light" | "dark" | "system";

type ThemeContextType = {
    theme: "light" | "dark";
    themeMode: ThemeMode;
    setMode: (mode: ThemeMode) => Promise<void>;
};

export const ThemeContext = createContext<ThemeContextType | null>(null);

export const ThemeProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const systemTheme = useColorScheme();
    const [mode, setModeState] = useState<ThemeMode>("system");

    useEffect(() => {
        const loadThemeFromAsyncStorage = async () => {
            const savedTheme = await AsyncStorage.getItem("theme");

            if (savedTheme === "light" || savedTheme === "dark" || savedTheme === "system") {
                setModeState(savedTheme);
            }
        };

        loadThemeFromAsyncStorage();
    }, []);

    const setMode = async (newMode: ThemeMode) => {
        setModeState(newMode);
        await AsyncStorage.setItem("theme", newMode);
    };

    const theme = mode === "system" ? (systemTheme === "dark" ? "dark" : "light") : mode;

    return React.createElement(
        ThemeContext.Provider,
        { value: { theme, themeMode: mode, setMode } },
        children
    );
};