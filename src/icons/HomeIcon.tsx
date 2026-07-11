import { ColorValue } from 'react-native';
import { SymbolView } from 'expo-symbols';

interface HomeIconProps {
    color?: ColorValue;
    size?: number;
}

export const HomeIcon = ({ color, size }: HomeIconProps) => {
    return (
        <SymbolView
            name={{
                ios: 'house.fill',
                android: 'home',
                web: 'home'
            }}
            tintColor={color}
            size={size ?? 24}
        />
    );
};