import style from './Form.module.scss'
import Button from '../Button/Button'
import { useState } from 'react'

interface Props {
    typeOfOperation: string,
    setValueOperation?: () => void,
    saldo: number
}

export default function Form({ typeOfOperation, setValueOperation, saldo }: Props) {

    const [inputValue, setInputValue] = useState<number | string>('')

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }

    const effectOperation = () => {
        const hasValueToWithdraw = saldo > inputValue
        console.log(typeOfOperation, saldo, inputValue, hasValueToWithdraw)
        if (typeOfOperation === 'saque') {
            if (!hasValueToWithdraw) {
                return window.alert('Saldo informado indisponível para saque!')
            }
        }
    }

    return (
        <form className={style.form} onSubmit={(e) => onSubmit(e)}>
            <label htmlFor='input'>Digite o valor para efetuar um {typeOfOperation}</label>
            <input onChange={(e) => setInputValue(e.target.value)} value={inputValue} type="number" placeholder='R$' id='input'></input>
            <Button onClick={effectOperation}>Efetuar Operação</Button>
        </form>
    )
}