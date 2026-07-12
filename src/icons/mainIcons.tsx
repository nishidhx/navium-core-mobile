import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Ionicons from '@expo/vector-icons/Ionicons';
import Octicons from '@expo/vector-icons/Octicons';
import { ColorValue } from 'react-native';


interface defaultIconProps {
    color?: ColorValue;
    size?: number;
}


export const SettingsIcon = ({
    color,
    size
}: defaultIconProps) => {
    return <FontAwesome6 name="gear" size={size} color={color} />
}



export const UserIcon = ({
    color,
    size
}: defaultIconProps) => {
    return <FontAwesome6 name="user-large" size={size} color={color} />
}

export const ChatIcon = ({
    color,
    size
}: defaultIconProps) => {
    return <Ionicons name="chatbubbles" size={size} color={color} />
}


export const HomeIcon = ({
    color,
    size
}: defaultIconProps) => {
    return <Octicons name="home-fill" size={size} color={color} />
}
