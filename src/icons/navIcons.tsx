import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Octicons from '@expo/vector-icons/Octicons';
import { defaultIconProps } from "./mainIcons";


export const BackArrow = ({
    color,
    size
}: defaultIconProps) => {
    return <MaterialCommunityIcons name="step-backward" size={size} color={color} />

}

export const Information = ({
    color,
    size
}: defaultIconProps) => {
    return <Octicons name="info" size={size} color={color} />
}