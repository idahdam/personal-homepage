import React from 'react'
import styled from 'styled-components'
import { Container } from '../../globalStyles'


export const Color = styled.div`
	color: #fff,
	backgrond-image: ${({light}) => (light ? "linear-gradient('#fff', '#CDCDCD')" : "linear-gradient('#CDCDCD', '#fff')")}
`