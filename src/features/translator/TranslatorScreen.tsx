import React from 'react'
import styled from 'styled-components'

export const TranslatorScreen: React.FunctionComponent = () => (
    <Container>
        Hello World!
    </Container>
)

const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    color: ${({ theme }) => theme.colors.typography}
`
