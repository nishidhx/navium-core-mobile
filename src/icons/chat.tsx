import { SymbolView } from 'expo-symbols';
import { ColorValue } from 'react-native';

interface ChatIconProps {
    color?: ColorValue;
    size?: number;
}

export const ChatIcon = ({ color, size }: ChatIconProps) => {
    return (
        <SymbolView
            name={{
                ios: 'message.fill',
                android: 'chat_bubble',
                web: 'chat_bubble'
            }}
            tintColor={color}
            size={size ?? 24}
        />
    );
};
