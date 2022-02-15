import styled from 'styled-components'

export const SelectLanguage = () => (
    <Select>
        <Option>
            Polish
        </Option>
        <Option>
            English
        </Option>
    </Select>
)

const Select = styled.select`
    max-width: 140px;
    margin-bottom: 10px;
    //-webkit-appearance: none;
    border: 0;
    font-size: 14px;
    font-weight: bold;
    background-color: ${({ theme }) => theme.colors.foreground};
    color: ${({ theme }) => theme.colors.typography};
    height: 26px;
    padding: 0 10px;
`

const Option = styled.option``
