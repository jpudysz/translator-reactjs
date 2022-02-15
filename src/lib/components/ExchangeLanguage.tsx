import styled from 'styled-components'
import { Images } from 'assets'

export const ExchangeLanguage = () => (
    <Exchange src={Images.Exchange}/>
)

const Exchange = styled.img`
    cursor: pointer;
    width: 22px;
    height: 22px;
`
