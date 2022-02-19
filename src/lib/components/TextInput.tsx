import React from 'react'
import styled from 'styled-components'
import { useEffect } from 'react'

type InputProps = {
    hasError?: boolean
}

type TextInputProps = {
    value?: string,
    disabled?: boolean,
    hasError?: boolean,
    autoFocus?: boolean,
    placeholder?: string,
    onChangeText?(text: string): void
}

export const TextInput: React.FunctionComponent<TextInputProps> = ({
    autoFocus,
    disabled,
    placeholder,
    value,
    hasError,
    onChangeText
}) => {
    const inputRef = React.createRef<HTMLTextAreaElement>()

    useEffect(() => {
        if(!disabled && autoFocus && inputRef.current) {
            inputRef.current.focus()
        }
    }, [])

    return (
        <Input
            value={value}
            ref={inputRef}
            disabled={disabled}
            placeholder={disabled ? undefined : placeholder}
            onChange={event => {
                if (onChangeText) {
                    onChangeText(event.target.value)
                }
            }}
            hasError={hasError}
        />
    )
}

const Input = styled.textarea<InputProps>`
    background-color: ${({ theme }) => theme.colors.input};
    color: ${({ theme }) => theme.colors.typography};
    border: ${({ theme, hasError }) => hasError ? `1px solid ${theme.colors.error}` : 'none'};
    border-radius: 8px;
    height: 300px;
    width: 400px;
    resize: none;
    font-size: 18px;
    padding: 10px 15px;
`
