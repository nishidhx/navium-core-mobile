import { ChatIcon, HomeIcon, SettingsIcon, UserIcon } from '@/icons/mainIcons';
import { Tabs } from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function TabLayout() {
    return (
        <SafeAreaProvider style={{
            width: "100%",
            backgroundColor: "black"
        }}>
            <Tabs
                screenOptions={
                    {
                        tabBarShowLabel: false,
                        tabBarInactiveTintColor: "#A0A0A0",
                        headerShown: false,

                        tabBarStyle: {
                            paddingTop: 10,
                            position: "absolute",
                            bottom: 0,
                            backgroundColor: "black",
                            justifyContent: "center",
                            alignItems: "center",

                        },
                        tabBarItemStyle: {
                            justifyContent: "center",
                            alignItems: "center",
                        },

                        tabBarIconStyle: {
                            marginTop: 0,
                        },
                    }
                }>
                <Tabs.Screen
                    name="home"
                    options={
                        {
                            tabBarIcon: ({ color, size }) => (
                                <HomeIcon color={color} size={size} />
                            )
                        }
                    }
                />
                <Tabs.Screen
                    name="chats"
                    options={
                        {
                            tabBarIcon: ({ color, size }) => (
                                <ChatIcon color={color} size={size} />
                            )
                        }
                    }
                />
                <Tabs.Screen
                    name="profile"
                    options={
                        {
                            tabBarIcon: ({ color, size }) => (
                                <UserIcon color={color} size={size} />
                            )
                        }
                    }
                />
                <Tabs.Screen
                    name="settings"
                    options={
                        {
                            tabBarIcon: ({ color, size }) => (
                                <SettingsIcon color={color} size={size} />
                            )
                        }
                    }
                />
            </Tabs>
        </SafeAreaProvider >
    );
}