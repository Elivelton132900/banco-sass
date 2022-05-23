import { ReactNode } from 'react'
import style from './Button.module.scss'

interface Props {
    onClick?: () => void,
    children: ReactNode | string,
}

export default function Button({onClick, children}: Props) {

    return (
        <button className={style.defaultButton} onClick={onClick}>
            {children}
        </button>
    )
}