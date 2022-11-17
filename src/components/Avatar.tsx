import styles from './Avatar.module.css'
import { AvatarProps } from '../@types/AvatarProps'

export const Avatar = ({ hasBorder = true, ...props/*Spread operator, puxa todas as propiedades definidas no componente*/ }: AvatarProps) => {
    return (
        <img
            className={hasBorder ? styles.avatarWithBorder : styles.avatar}
            {...props} /*Spread operator, puxa todas as propiedades definidas no componente*/
        />
    )
}