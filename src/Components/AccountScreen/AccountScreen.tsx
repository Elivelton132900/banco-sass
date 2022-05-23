import { useEffect, useState, useRef } from 'react'

import Button from '../Button/Button'

import style from './AccountScreen.module.scss'

import Hide from '../assets/hide.png'
import DontHide from '../assets/dontHide.png'
import closeButton from '../assets/closeButton.png'
import Form from '../Form/Form'

interface Props {
    saldo: number,
    setSaldo: React.Dispatch<React.SetStateAction<number>>
}

export default function AccountScreen({ saldo, setSaldo }: Props) {

    const [saldoFormatado, setSaldoFormatado] = useState<string>('')
    const [typeOfOperation, setTypeOfOperation] = useState<string | null>(null)

    const img = useRef<HTMLImageElement | null>(null)
    const headingSaldo = useRef<HTMLHeadingElement | null>(null)

    useEffect(() => {
        console.log('saldo mudou!')
        setSaldoFormatado(saldo.toLocaleString('pt-br', { minimumFractionDigits: 2 }))
    }, [saldo])

    const toggleBlur = () => {
        toggleSrc()
        headingSaldo.current?.classList.toggle(`${style.blur}`)
    }

    const toggleSrc = () => {
        let srcAtual = img.current?.getAttribute('src')
        srcAtual === DontHide ? srcAtual = Hide : srcAtual = DontHide
        img.current?.setAttribute('src', srcAtual)
    }

    const onOperationClick = (typeOfOperation: string) => {
        if (typeOfOperation === 'saque') {
            return setTypeOfOperation('saque')
        }

        setTypeOfOperation('deposito')
    }

    return (
        <div className={style.accountScreenContainer}>
            <header className={style.accountScreenHeader}>
                <h3>Seu saldo atual é</h3>
                <div>
                    <h2 ref={headingSaldo}>R$ {saldoFormatado}</h2>
                    <Button onClick={toggleBlur}>
                        <img ref={img} src={Hide} />
                    </Button>
                </div>
            </header>
            
            <div className={style.formContainer}>
                {typeOfOperation &&
                <>
                <Button onClick={() => setTypeOfOperation(null)}><img src={closeButton} /></Button>
                <Form typeOfOperation={typeOfOperation} saldo={saldo} />
                </>
                }
            </div>
            
            <div className={style.containerButtons}>
                <Button onClick={() => onOperationClick('deposito')}>Depositar</Button>
                <Button onClick={() => onOperationClick('saque')}>Sacar</Button>
            </div>
        </div>
    )
}