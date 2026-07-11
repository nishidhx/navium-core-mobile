import { ColorValue } from 'react-native';
import { SymbolView } from 'expo-symbols';

interface ProfileIconProps {
    color?: ColorValue;
    size?: number;
}

export const ProfileIcon = ({ color, size }: ProfileIconProps) => {
    return (
        <SymbolView
            name={{
                ios: 'person.fill',
                android: 'person',
                web: 'person'
            }}
            tintColor={color}
            size={size ?? 24}
        />
    );
};
