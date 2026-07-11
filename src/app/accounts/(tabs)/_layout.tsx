
import { HomeIcon } from '@/icons/HomeIcon';
import { ChatIcon } from '@/icons/chat';
import { ProfileIcon } from '@/icons/ProfileIcon';
import { Tabs } from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function TabLayout() {
    return (
        <SafeAreaProvider style={{
            width: "100%"
        }}>
            <Tabs
                screenOptions={
                    {
                        tabBarShowLabel: false,
                        headerShown: false,

                        tabBarStyle: {
                            position: "absolute",
                            bottom: 0,
                        }
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
                                <ProfileIcon color={color} size={size} />
                            )
                        }
                    }
                />
            </Tabs>
        </SafeAreaProvider >
    );
}