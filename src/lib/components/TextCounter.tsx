import styled from 'styled-components'

type TextCounterProps = {
    counter: number,
    limit: number
}

export const TextCounter: React.FunctionComponent<TextCounterProps> = ({
    counter,
    limit
}) => (
    <Counter>
        {counter}/{limit}
    </Counter>
)

const Counter = styled.div`
    color: ${({ theme }) => theme.colors.typography}
`
