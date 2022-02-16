import React from 'react'
import styled from 'styled-components'

export const Loader: React.FunctionComponent = ({ children }) => (
    <LoaderContainer>
        <ActivityIndicator />
        {children && (
            <ChildrenContainer>
                {children}
            </ChildrenContainer>
        )}
    </LoaderContainer>
)

const ActivityIndicator = styled.div`
    width: 100%;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.primary};
    border-radius: 6px;
    animation: loading 1s linear infinite alternate;

    @keyframes loading2 {
        0% {
            width: 0;
        }

        100% {
            width: 100%;
        }
    }
`

const ChildrenContainer = styled.div`
    text-align: center;
`

const LoaderContainer = styled.div`
    width: 100%;
`
